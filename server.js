const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = Number(process.env.PORT || 3000);
const PUBLIC_DIR = __dirname;
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "";
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || "";
const TELEGRAM_REPLY_CUSTOM_EMOJI_ID = process.env.TELEGRAM_REPLY_CUSTOM_EMOJI_ID || "";
const TELEGRAM_REFERENCES_CUSTOM_EMOJI_ID = process.env.TELEGRAM_REFERENCES_CUSTOM_EMOJI_ID || "";

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp"
};

function sendJson(res, status, payload) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(payload));
}

function escapeHTML(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function isUrl(value) {
  return /^https?:\/\//i.test(String(value || "").trim());
}

function telegramContactUrl(value) {
  const text = String(value || "").trim();
  const username = text.match(/(?:^|[\s/])@([a-zA-Z0-9_]{5,})/) || text.match(/t\.me\/([a-zA-Z0-9_]{5,})/);
  return username ? `https://t.me/${username[1]}` : "";
}

function telegramButton({ fallbackEmoji, text, url, style, customEmojiId, enhanced = true }) {
  const button = {
    text: customEmojiId && enhanced ? text : `${fallbackEmoji} ${text}`,
    url
  };

  if (enhanced) {
    button.style = style;
    if (customEmojiId) {
      button.icon_custom_emoji_id = customEmojiId;
    }
  }

  return button;
}

function buildReplyMarkup(order, enhanced = true) {
  const rows = [];
  const contactUrl = telegramContactUrl(order.client?.messenger);
  const references = String(order.references || "").trim();

  if (contactUrl) {
    rows.push([telegramButton({
      fallbackEmoji: "💬",
      text: "Reply in Telegram",
      url: contactUrl,
      style: "primary",
      customEmojiId: TELEGRAM_REPLY_CUSTOM_EMOJI_ID,
      enhanced
    })]);
  }

  if (isUrl(references)) {
    rows.push([telegramButton({
      fallbackEmoji: "🔎",
      text: "Open references",
      url: references,
      style: "success",
      customEmojiId: TELEGRAM_REFERENCES_CUSTOM_EMOJI_ID,
      enhanced
    })]);
  }

  return rows.length ? { inline_keyboard: rows } : null;
}

function buildTelegramMessage(order) {
  const addons = Array.isArray(order.addons) && order.addons.length
    ? order.addons.map(escapeHTML).join("\n")
    : "None";

  return [
    `✨ <b>${escapeHTML(order.botTitle || "New Mult emotion request")}</b>`,
    "",
    `🎯 <b>Service:</b> ${escapeHTML(order.service?.label)}`,
    `📦 <b>Package:</b> ${escapeHTML(order.package?.label)}`,
    `➕ <b>Add-ons:</b>\n${addons}`,
    `💰 <b>Estimated total:</b> ${escapeHTML(order.estimatedTotal)}`,
    "",
    `👤 <b>Name:</b> ${escapeHTML(order.client?.name)}`,
    `📧 <b>Email:</b> ${escapeHTML(order.client?.email)}`,
    `💬 <b>Telegram / WhatsApp:</b> ${escapeHTML(order.client?.messenger)}`,
    `🌐 <b>Project language:</b> ${escapeHTML(order.projectLanguage)}`,
    `🎁 <b>Occasion / goal:</b> ${escapeHTML(order.occasion || "Not provided")}`,
    `⏰ <b>Deadline:</b> ${escapeHTML(order.deadline || "Not provided")}`,
    `💳 <b>Budget:</b> ${escapeHTML(order.budget || "Not provided")}`,
    `🔗 <b>References:</b> ${escapeHTML(order.references || "Not provided")}`,
    "",
    `📝 <b>Idea:</b>\n${escapeHTML(order.idea)}`,
    "",
    "🔐 <b>Note:</b> Confidential request. Confirm scope before production.",
    `✅ ${escapeHTML(order.nextStep || "Reply to the client and confirm scope before production.")}`,
    `🌍 <b>Page language:</b> ${escapeHTML(String(order.pageLanguage || "").toUpperCase())}`
  ].join("\n");
}

async function sendTelegram(order, enhancedButtons = true) {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    return { ok: false, description: "Server is missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID env variables." };
  }

  const body = new URLSearchParams({
    chat_id: TELEGRAM_CHAT_ID,
    text: buildTelegramMessage(order),
    parse_mode: "HTML",
    disable_web_page_preview: "true"
  });

  const replyMarkup = buildReplyMarkup(order, enhancedButtons);
  if (replyMarkup) {
    body.set("reply_markup", JSON.stringify(replyMarkup));
  }

  const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: "POST",
    body
  });
  const result = await response.json().catch(() => ({}));
  return { ok: response.ok, status: response.status, ...result };
}

async function handleOrder(req, res) {
  let raw = "";
  req.on("data", (chunk) => {
    raw += chunk;
    if (raw.length > 120000) {
      req.destroy();
    }
  });

  req.on("end", async () => {
    try {
      const order = JSON.parse(raw || "{}");
      if (!order.client?.name || !order.client?.email || !order.client?.messenger || !order.idea) {
        sendJson(res, 400, { ok: false, error: "Required fields are missing." });
        return;
      }

      let result = await sendTelegram(order, true);
      if (!result.ok && /reply_markup|button|keyboard/i.test(result.description || "")) {
        result = await sendTelegram(order, false);
      }

      if (!result.ok) {
        sendJson(res, 502, { ok: false, error: result.description || "Telegram request failed." });
        return;
      }

      sendJson(res, 200, { ok: true });
    } catch (error) {
      sendJson(res, 500, { ok: false, error: error.message || "Unexpected server error." });
    }
  });
}

function serveStatic(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const safePath = path.normalize(decodeURIComponent(url.pathname)).replace(/^(\.\.[/\\])+/, "");
  const requestedPath = safePath === "/" ? "/index.html" : safePath;
  const filePath = path.join(PUBLIC_DIR, requestedPath);

  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not found");
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { "Content-Type": mimeTypes[ext] || "application/octet-stream" });
    res.end(content);
  });
}

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/api/order") {
    handleOrder(req, res);
    return;
  }

  if (req.method === "GET" || req.method === "HEAD") {
    serveStatic(req, res);
    return;
  }

  res.writeHead(405, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Method not allowed");
});

server.listen(PORT, () => {
  console.log(`Mult emotion site is running on port ${PORT}`);
});
