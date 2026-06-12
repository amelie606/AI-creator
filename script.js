const serviceOrder = ["aiVideo", "aiSong", "websites", "bots"];

const priceData = {
  aiVideo: {
    packages: [
      { id: "videoStarter", price: 75 },
      { id: "videoStory", price: 240 },
      { id: "videoProduction", price: 480 }
    ],
    addons: [
      { id: "extra30", price: 55 },
      { id: "extraScene", price: 45 },
      { id: "extraCharacter", price: 30 },
      { id: "scenePlan", price: 70 },
      { id: "aiVoiceover", price: 40 },
      { id: "subtitles", price: 25 },
      { id: "fourK", price: 50 },
      { id: "fast", price: 120 },
      { id: "minorRevision", price: 30 },
      { id: "sceneRemake", price: 70 }
    ]
  },
  aiSong: {
    packages: [
      { id: "songMini", price: 65 },
      { id: "songFull", price: 160 },
      { id: "songEvent", price: 280 }
    ],
    addons: [
      { id: "extraVerse", price: 35 },
      { id: "instrumental", price: 30 },
      { id: "secondVoice", price: 45 },
      { id: "lyricVideo", price: 90 },
      { id: "coverArt", price: 35 },
      { id: "greetingIntro", price: 25 },
      { id: "fastSong", price: 80 },
      { id: "songRevision", price: 25 }
    ]
  },
  websites: {
    packages: [
      { id: "siteInvite", price: 260 },
      { id: "siteLanding", price: 390 },
      { id: "sitePremium", price: 620 }
    ],
    addons: [
      { id: "rsvpTelegram", price: 80 },
      { id: "extraSection", price: 45 },
      { id: "multilang", price: 90 },
      { id: "gallery", price: 50 },
      { id: "customAnimation", price: 70 },
      { id: "deployHelp", price: 60 },
      { id: "privacyPage", price: 50 },
      { id: "fastSite", price: 140 }
    ]
  },
  bots: {
    packages: [
      { id: "botStarter", price: 220 },
      { id: "botBusiness", price: 420 },
      { id: "botMiniApp", price: 750 }
    ],
    addons: [
      { id: "extraFlow", price: 70 },
      { id: "sheets", price: 120 },
      { id: "adminPanel", price: 180 },
      { id: "payments", price: 180 },
      { id: "reminders", price: 90 },
      { id: "analytics", price: 100 },
      { id: "deployBot", price: 80 },
      { id: "fastBot", price: 180 }
    ]
  }
};

const translations = {
  en: {
    nav: { home: "Home", services: "Services", packages: "Packages", portfolio: "Portfolio", process: "Process", faq: "FAQ", order: "Order", cta: "Order now" },
    hero: {
      eyebrow: "Creative AI studio for emotional digital projects",
      title: "AI emotions, songs, websites and smart Telegram tools for unforgettable moments.",
      text: "Mult emotion creates AI videos, custom songs, event websites, landing pages, Telegram bots and mini apps from idea to polished launch.",
      choose: "Choose service",
      custom: "Custom project",
      services: "View services",
      visualTitle: "Creative Production Engine",
      capabilities: ["AI Video", "AI Songs", "Event Websites", "Telegram Bots", "Mini Apps", "Confidential Projects"]
    },
    categories: {
      aiVideo: { label: "AI video & visuals", short: "Video, photo, characters, stories", emoji: "🎬" },
      aiSong: { label: "AI songs", short: "Personal songs sung by AI", emoji: "🎵" },
      websites: { label: "Websites & invitations", short: "Landing pages, RSVP, events", emoji: "💌" },
      bots: { label: "Telegram bots & mini apps", short: "Automation, forms, mini apps", emoji: "🤖" }
    },
    services: {
      eyebrow: "What we create",
      title: "Creative digital services for emotions, events, brands and automation.",
      items: [
        ["🎬", "AI videos and visual stories", "Cinematic AI clips, characters, ads, love stories, reels and visual concepts."],
        ["🖼️", "AI photos and creative visuals", "Portraits, character visuals, product concepts, moodboards and social creatives."],
        ["🎵", "Personal AI songs", "Lyrics, melody direction and AI-sung songs for weddings, birthdays, anniversaries and surprises."],
        ["💌", "Event invitation websites", "Beautiful wedding, birthday and corporate invitation sites with guest confirmation forms."],
        ["🚀", "Landing pages", "Simple premium landing pages for services, launches, portfolios and personal brands."],
        ["📩", "Forms to Telegram", "Guest answers, leads and requests can arrive directly into your Telegram bot."],
        ["🤖", "Telegram bots", "Order bots, lead bots, FAQ bots, booking flows and automation for different goals."],
        ["📱", "Telegram mini apps", "Compact interactive mini apps, catalogs, forms, calculators and client portals."],
        ["🔐", "Confidential projects", "Private ideas, surprise gifts, sensitive materials and custom tasks handled carefully."]
      ]
    },
    packages: {
      eyebrow: "Packages",
      title: "Choose a direction and see safe starting prices.",
      select: "Select package",
      customOption: "Custom quote",
      items: {
        videoStarter: { name: "Visual Starter", subtitle: "Short AI clip / visual set", features: ["15-30 sec AI video or small visual pack", "1 concept direction", "1-2 characters or objects", "Basic edit", "Music / AI voiceover optional", "2 minor revisions", "Delivery from 2-3 days"] },
        videoStory: { name: "Story Production", subtitle: "AI story, ad or reel pack", features: ["Up to 90 sec AI video", "Up to 5 scenes", "Scene plan and prompts", "AI voiceover or subtitles", "Polished edit", "3 minor revisions", "Delivery from 5-7 days"] },
        videoProduction: { name: "Premium Visual World", subtitle: "Full AI story or campaign", features: ["Up to 3 min AI story or visual campaign", "Up to 10 scenes", "Characters and art direction", "Music, subtitles and sound design", "Final edit", "5 minor revisions", "Delivery from 7-12 days"] },
        songMini: { name: "Mini Song Gift", subtitle: "Short personal AI song", features: ["Original lyrics for one occasion", "AI vocal performance", "Up to 60-90 seconds", "1 music mood", "Basic audio polish", "2 minor revisions", "Delivery from 2-3 days"] },
        songFull: { name: "Full AI Song", subtitle: "Complete emotional song", features: ["Full lyrics with story details", "AI vocal and music direction", "Up to 2.5-3 minutes", "Personal names/details included", "Audio polish", "3 minor revisions", "Delivery from 4-6 days"] },
        songEvent: { name: "Event Song Package", subtitle: "Song plus visual presentation", features: ["Full AI-sung song", "Custom intro or greeting", "Cover image", "Simple lyric video or visual card", "Event-ready file", "4 minor revisions", "Delivery from 5-8 days"] },
        siteInvite: { name: "Event Invitation Site", subtitle: "Wedding, birthday, corporate event", features: ["One-page invitation website", "Event details and program", "Guest confirmation form", "Telegram request delivery", "Mobile responsive", "2 minor revisions", "Delivery from 4-6 days"] },
        siteLanding: { name: "Premium Landing", subtitle: "Service, product or personal page", features: ["One-page landing website", "Offer, sections and CTA", "Contact/request form", "Responsive design", "Basic SEO tags", "3 minor revisions", "Delivery from 6-9 days"] },
        sitePremium: { name: "Multi-section Website", subtitle: "More content and richer UI", features: ["Expanded landing or small website", "Premium animated interface", "Forms and Telegram notifications", "Portfolio/gallery blocks", "Launch support", "4 minor revisions", "Delivery from 10-14 days"] },
        botStarter: { name: "Request Bot", subtitle: "Simple lead/order bot", features: ["Telegram bot setup", "Basic menu and request flow", "Form answers to your chat", "Clean message formatting", "Basic deployment guidance", "2 minor revisions", "Delivery from 4-6 days"] },
        botBusiness: { name: "Business Bot", subtitle: "Automation with scenarios", features: ["Multi-step bot logic", "Client questions and branching", "Admin notifications", "Google Sheets or simple storage optional", "Inline buttons", "3 minor revisions", "Delivery from 7-12 days"] },
        botMiniApp: { name: "Mini App MVP", subtitle: "Interactive Telegram mini app", features: ["Telegram mini app interface", "Forms, catalog, calculator or booking flow", "Bot connection", "Responsive UI", "Launch support", "4 minor revisions", "Delivery from 14-21 days"] }
      }
    },
    addons: {
      eyebrow: "Add-ons",
      title: "Add only what your selected service actually needs.",
      labels: {
        extra30: "Extra 30 sec video", extraScene: "Extra video scene", extraCharacter: "Extra character/object", scenePlan: "Detailed scene plan / storyboard", aiVoiceover: "AI voiceover", subtitles: "Subtitles", fourK: "4K delivery", fast: "Fast delivery", minorRevision: "Extra minor revision", sceneRemake: "Scene remake",
        extraVerse: "Extra verse", instrumental: "Instrumental version", secondVoice: "Additional vocal version", lyricVideo: "Simple lyric video", coverArt: "Cover artwork", greetingIntro: "Personal greeting intro", fastSong: "Fast song delivery", songRevision: "Extra minor song revision",
        rsvpTelegram: "RSVP form to Telegram", extraSection: "Extra website section", multilang: "Additional language", gallery: "Photo/video gallery", customAnimation: "Custom animation", deployHelp: "Domain/deploy help", privacyPage: "Private access / privacy page", fastSite: "Fast website delivery",
        extraFlow: "Extra bot scenario", sheets: "Google Sheets integration", adminPanel: "Simple admin panel", payments: "Payment flow setup", reminders: "Reminders/notifications", analytics: "Basic analytics", deployBot: "Bot deployment support", fastBot: "Fast bot delivery"
      }
    },
    custom: { eyebrow: "Confidential custom work", title: "Have a private idea, event surprise or unusual business task?", text: "Tell me the goal. I will estimate the scope carefully, protect your materials and suggest the safest production plan.", button: "Discuss custom project" },
    portfolio: {
      eyebrow: "Portfolio",
      title: "Portfolio concepts by service direction.",
      note: "Real works can be added here later.",
      all: "All",
      tag: "Concept",
      items: [
        ["aiVideo", "AI Wedding Story", "A cinematic animated love story with custom characters and music."],
        ["aiVideo", "Product Visual Reel", "A bright AI promo clip for launches, reels and ads."],
        ["aiSong", "Birthday AI Song", "A personal song with names, memories and an AI vocal performance."],
        ["aiSong", "Wedding First Dance Song", "A custom emotional song prepared as a meaningful event gift."],
        ["websites", "Wedding Invitation Website", "A mobile invitation with RSVP form and answers sent to Telegram."],
        ["websites", "Premium Service Landing", "A polished landing page with offer, sections, form and launch-ready design."],
        ["bots", "Lead Request Bot", "A Telegram bot that collects requests and sends structured briefs to the owner."],
        ["bots", "Mini App Calculator", "A compact Telegram mini app for forms, calculations or service selection."]
      ]
    },
    process: {
      eyebrow: "How it works",
      title: "A clear process from emotional idea to finished digital result.",
      steps: [
        ["You send the idea", "Tell me the occasion, goal, audience, references, deadline and what should happen after launch."],
        ["We lock scope and price", "I separate minor revisions from major rework, so the project stays fair and predictable."],
        ["Production begins", "I create visuals, songs, website screens, bot logic or mini app flows depending on the service."],
        ["You receive the final result", "You get files, links or launch-ready setup with clear next steps."]
      ]
    },
    faq: {
      eyebrow: "FAQ",
      title: "Important details before we start.",
      items: [
        ["Are projects confidential?", "Yes. Private event details, personal stories, references and business ideas are handled carefully. NDA-style wording can be discussed for sensitive work."],
        ["What is an AI song?", "It is an original song concept with custom lyrics and an AI vocal performance. It can be a beautiful gift for a wedding, birthday, anniversary, corporate event or surprise."],
        ["What counts as a minor revision?", "Small text fixes, timing changes, subtitle corrections, small visual/audio adjustments. Rebuilding a scene, changing the concept or remaking most of the project is quoted separately."],
        ["Do you offer human voiceover?", "Human voiceover is custom quote only. Standard packages use AI voiceover, so pricing and deadlines stay realistic."],
        ["What are commercial rights?", "Commercial use means the client may use the final delivered result for business, social media, ads or promotion, if their own materials and references do not violate third-party rights."],
        ["Can invitation websites collect guest answers?", "Yes. RSVP forms can send guest confirmations and comments directly to the client's Telegram bot or chat."],
        ["Can you build any Telegram bot?", "I can build simple and medium-complexity bots, automations and mini apps. Complex systems, payments, databases and admin panels are estimated separately."]
      ]
    },
    form: {
      name: "Name", email: "Email", messenger: "Telegram / WhatsApp", projectLanguage: "Project language", service: "Service direction", package: "Select package", addons: "Add-ons", idea: "Project idea / description", occasion: "Occasion / business goal", references: "References link or notes", deadline: "Deadline", budget: "Budget", total: "Estimated total", confirm: "I understand that final price may change after discussing the project scope", submit: "Send request",
      required: "Please fill in all required fields and confirm the price note.", sending: "Sending request...", tokenMissing: "Telegram Bot Token or Chat ID is not filled in. Add them in script.js before sending requests.", error: "Request was not sent. Please check the Telegram settings and try again.", networkError: "Request was not sent. Browser could not reach Telegram API. Check internet, token and hosting restrictions.", success: "Request sent successfully. Thank you!"
    },
    bot: { title: "New Mult emotion request", next: "Next step: reply to the client, confirm scope, deadline and materials before production." },
    footer: { tagline: "Creative AI, websites and Telegram tools for emotional digital projects.", services: "Services", packages: "Packages", packageLink: "Video / Songs / Websites / Bots", contact: "Contact", rights: "All rights reserved." }
  },
  ru: {
    nav: { home: "Главная", services: "Услуги", packages: "Пакеты", portfolio: "Портфолио", process: "Процесс", faq: "FAQ", order: "Заявка", cta: "Заказать" },
    hero: {
      eyebrow: "Creative AI studio для эмоциональных digital-проектов",
      title: "AI-эмоции, песни, сайты и умные Telegram-инструменты для важных моментов.",
      text: "Mult emotion создает AI-видео, персональные песни, сайты-приглашения, лендинги, Telegram-ботов и mini apps от идеи до готового запуска.",
      choose: "Выбрать услугу",
      custom: "Индивидуальный проект",
      services: "Смотреть услуги",
      visualTitle: "Creative Production Engine",
      capabilities: ["AI-видео", "AI-песни", "Сайты-приглашения", "Telegram-боты", "Mini Apps", "Конфиденциально"]
    },
    categories: {
      aiVideo: { label: "AI-видео и визуалы", short: "Видео, фото, персонажи, истории", emoji: "🎬" },
      aiSong: { label: "AI-песни", short: "Персональные песни голосом ИИ", emoji: "🎵" },
      websites: { label: "Сайты и приглашения", short: "Лендинги, RSVP, мероприятия", emoji: "💌" },
      bots: { label: "Telegram-боты и mini apps", short: "Автоматизация, формы, mini apps", emoji: "🤖" }
    },
    services: {
      eyebrow: "Что мы создаем",
      title: "Креативные digital-услуги для эмоций, событий, брендов и автоматизации.",
      items: [
        ["🎬", "AI-видео и визуальные истории", "Cinematic AI-ролики, персонажи, реклама, love stories, reels и визуальные концепты."],
        ["🖼️", "AI-фото и креативные визуалы", "Портреты, персонажи, продуктовые концепты, moodboards и social-креативы."],
        ["🎵", "Персональные AI-песни", "Текст, музыкальное направление и песня, которую споет ИИ для свадьбы, дня рождения, годовщины или сюрприза."],
        ["💌", "Сайты-приглашения", "Красивые сайты для свадеб, дней рождения и корпоративов с анкетой подтверждения гостей."],
        ["🚀", "Лендинги", "Простые премиальные лендинги для услуг, запусков, портфолио и личных брендов."],
        ["📩", "Формы в Telegram", "Ответы гостей, заявки и лиды могут приходить прямо в Telegram-бот клиента."],
        ["🤖", "Telegram-боты", "Боты заявок, FAQ-боты, записи, меню, сценарии и автоматизация под разные цели."],
        ["📱", "Telegram mini apps", "Компактные mini apps: каталоги, формы, калькуляторы и клиентские кабинеты."],
        ["🔐", "Конфиденциальные проекты", "Личные идеи, сюрпризы, чувствительные материалы и нестандартные задачи обрабатываются бережно."]
      ]
    },
    packages: {
      eyebrow: "Пакеты",
      title: "Выберите направление и посмотрите безопасные стартовые цены.",
      select: "Выбрать пакет",
      customOption: "Индивидуальная оценка",
      items: {
        videoStarter: { name: "Visual Starter", subtitle: "Короткий AI-клип / набор визуалов", features: ["15-30 секунд AI-видео или небольшой visual pack", "1 креативное направление", "1-2 персонажа или объекта", "Базовый монтаж", "Музыка / AI-озвучка опционально", "2 маленькие правки", "Срок от 2-3 дней"] },
        videoStory: { name: "Story Production", subtitle: "AI-история, реклама или reel pack", features: ["До 90 секунд AI-видео", "До 5 сцен", "План сцен и промты", "AI-озвучка или субтитры", "Полированный монтаж", "3 маленькие правки", "Срок от 5-7 дней"] },
        videoProduction: { name: "Premium Visual World", subtitle: "Полная AI-история или кампания", features: ["До 3 минут AI-истории или visual campaign", "До 10 сцен", "Персонажи и арт-дирекшн", "Музыка, субтитры и sound design", "Финальный монтаж", "5 маленьких правок", "Срок от 7-12 дней"] },
        songMini: { name: "Mini Song Gift", subtitle: "Короткая персональная AI-песня", features: ["Оригинальный текст под событие", "AI-вокал", "До 60-90 секунд", "1 музыкальное настроение", "Базовая аудио-полировка", "2 маленькие правки", "Срок от 2-3 дней"] },
        songFull: { name: "Full AI Song", subtitle: "Полная эмоциональная песня", features: ["Полный текст с личными деталями", "AI-вокал и музыкальное направление", "До 2.5-3 минут", "Имена/истории можно включить", "Аудио-полировка", "3 маленькие правки", "Срок от 4-6 дней"] },
        songEvent: { name: "Event Song Package", subtitle: "Песня плюс визуальная подача", features: ["Полная AI-песня", "Кастомное интро или поздравление", "Обложка", "Простой lyric video или visual card", "Файл для мероприятия", "4 маленькие правки", "Срок от 5-8 дней"] },
        siteInvite: { name: "Event Invitation Site", subtitle: "Свадьба, день рождения, корпоратив", features: ["Одностраничный сайт-приглашение", "Детали и программа события", "Анкета подтверждения гостей", "Ответы в Telegram", "Адаптив под телефон", "2 маленькие правки", "Срок от 4-6 дней"] },
        siteLanding: { name: "Premium Landing", subtitle: "Услуга, продукт или личная страница", features: ["Одностраничный лендинг", "Оффер, секции и CTA", "Форма заявки", "Адаптивный дизайн", "Базовые SEO-теги", "3 маленькие правки", "Срок от 6-9 дней"] },
        sitePremium: { name: "Multi-section Website", subtitle: "Больше контента и richer UI", features: ["Расширенный лендинг или небольшой сайт", "Премиальный анимированный интерфейс", "Формы и Telegram-уведомления", "Портфолио/галерея", "Помощь с запуском", "4 маленькие правки", "Срок от 10-14 дней"] },
        botStarter: { name: "Request Bot", subtitle: "Простой бот заявок", features: ["Настройка Telegram-бота", "Базовое меню и сценарий заявки", "Ответы формы в ваш чат", "Красивое форматирование сообщений", "Базовая помощь с деплоем", "2 маленькие правки", "Срок от 4-6 дней"] },
        botBusiness: { name: "Business Bot", subtitle: "Автоматизация со сценариями", features: ["Многошаговая логика", "Вопросы и ветвления", "Уведомления администратору", "Google Sheets или простое хранение опционально", "Inline-кнопки", "3 маленькие правки", "Срок от 7-12 дней"] },
        botMiniApp: { name: "Mini App MVP", subtitle: "Интерактивный Telegram mini app", features: ["Интерфейс Telegram mini app", "Формы, каталог, калькулятор или запись", "Связка с ботом", "Адаптивный UI", "Помощь с запуском", "4 маленькие правки", "Срок от 14-21 дней"] }
      }
    },
    addons: {
      eyebrow: "Дополнительные услуги",
      title: "Добавляйте только то, что действительно нужно выбранной услуге.",
      labels: {
        extra30: "Дополнительные 30 секунд видео", extraScene: "Дополнительная сцена", extraCharacter: "Дополнительный персонаж/объект", scenePlan: "Детальный план сцен / сториборд", aiVoiceover: "AI-озвучка", subtitles: "Субтитры", fourK: "4K-версия", fast: "Срочная доставка", minorRevision: "Дополнительная маленькая правка", sceneRemake: "Переделка сцены",
        extraVerse: "Дополнительный куплет", instrumental: "Инструментальная версия", secondVoice: "Дополнительная вокальная версия", lyricVideo: "Простой lyric video", coverArt: "Обложка", greetingIntro: "Личное поздравительное интро", fastSong: "Срочная песня", songRevision: "Дополнительная маленькая правка песни",
        rsvpTelegram: "Анкета RSVP в Telegram", extraSection: "Дополнительная секция сайта", multilang: "Дополнительный язык", gallery: "Фото/видео галерея", customAnimation: "Кастомная анимация", deployHelp: "Помощь с доменом/деплоем", privacyPage: "Приватный доступ / privacy page", fastSite: "Срочный сайт",
        extraFlow: "Дополнительный сценарий бота", sheets: "Интеграция с Google Sheets", adminPanel: "Простая админ-панель", payments: "Настройка оплаты", reminders: "Напоминания/уведомления", analytics: "Базовая аналитика", deployBot: "Помощь с деплоем бота", fastBot: "Срочный бот"
      }
    },
    custom: { eyebrow: "Конфиденциальные custom-проекты", title: "Есть личная идея, сюрприз или необычная бизнес-задача?", text: "Опишите цель. Я аккуратно оценю объем, защищу материалы и предложу безопасный production plan.", button: "Обсудить custom-проект" },
    portfolio: {
      eyebrow: "Портфолио", title: "Концепты портфолио по направлениям.", note: "Реальные работы можно добавить сюда позже.", all: "Все", tag: "Концепт",
      items: [
        ["aiVideo", "AI Wedding Story", "Cinematic love story с персонажами, музыкой и нежной визуальной подачей."],
        ["aiVideo", "Product Visual Reel", "Яркий AI-промо ролик для запуска, reels и рекламы."],
        ["aiSong", "Birthday AI Song", "Персональная песня с именами, воспоминаниями и AI-вокалом."],
        ["aiSong", "Wedding First Dance Song", "Эмоциональная песня-сюрприз для свадебного момента."],
        ["websites", "Wedding Invitation Website", "Мобильное приглашение с RSVP-формой и ответами в Telegram."],
        ["websites", "Premium Service Landing", "Премиальный лендинг с оффером, секциями, формой и готовым дизайном."],
        ["bots", "Lead Request Bot", "Telegram-бот, который собирает заявки и отправляет структурированный бриф владельцу."],
        ["bots", "Mini App Calculator", "Компактный Telegram mini app для форм, расчетов или выбора услуги."]
      ]
    },
    process: {
      eyebrow: "Как это работает",
      title: "Понятный процесс от эмоциональной идеи до готового digital-результата.",
      steps: [
        ["Вы отправляете идею", "Опишите событие, цель, аудиторию, референсы, дедлайн и что должно произойти после запуска."],
        ["Фиксируем объем и цену", "Я отделяю маленькие правки от крупных переделок, чтобы проект был честным и предсказуемым."],
        ["Начинается производство", "Создаю визуалы, песню, экраны сайта, логику бота или flow mini app в зависимости от услуги."],
        ["Вы получаете результат", "Файлы, ссылку или launch-ready setup с понятными следующими шагами."]
      ]
    },
    faq: {
      eyebrow: "FAQ", title: "Важные детали перед стартом.",
      items: [
        ["Проекты конфиденциальны?", "Да. Личные истории, материалы, референсы и бизнес-идеи обрабатываются бережно. Для чувствительных проектов можно согласовать NDA-style формулировку."],
        ["Что такое AI-песня?", "Это оригинальная песня с персональным текстом и AI-вокалом. Такой формат подходит как подарок на свадьбу, день рождения, годовщину, корпоратив или сюрприз."],
        ["Что считается маленькой правкой?", "Исправление текста, тайминга, субтитров, маленькие визуальные/аудио корректировки. Переделка сцены, смена концепта или большая часть проекта оцениваются отдельно."],
        ["Вы делаете живую профессиональную озвучку?", "Живая озвучка только по индивидуальной оценке. В стандартных пакетах используется AI-озвучка, чтобы цена и сроки оставались реалистичными."],
        ["Что такое коммерческое использование?", "Клиент может использовать финальный результат для бизнеса, соцсетей, рекламы или продвижения, если его материалы и референсы не нарушают права третьих лиц."],
        ["Сайт-приглашение может собирать ответы гостей?", "Да. RSVP-анкета может отправлять подтверждения гостей и комментарии прямо в Telegram-бот или чат клиента."],
        ["Можно сделать любого Telegram-бота?", "Можно сделать простые и средние по сложности боты, автоматизации и mini apps. Сложные системы, оплаты, базы данных и админки оцениваются отдельно."]
      ]
    },
    form: {
      name: "Имя", email: "Email", messenger: "Telegram / WhatsApp", projectLanguage: "Язык проекта", service: "Направление услуги", package: "Выберите пакет", addons: "Дополнительные услуги", idea: "Идея / описание проекта", occasion: "Событие / бизнес-цель", references: "Ссылка на референсы или заметки", deadline: "Дедлайн", budget: "Бюджет", total: "Предварительная сумма", confirm: "Я понимаю, что финальная цена может измениться после обсуждения объема проекта", submit: "Отправить заявку",
      required: "Пожалуйста, заполните обязательные поля и подтвердите примечание о цене.", sending: "Отправляю заявку...", tokenMissing: "Telegram Bot Token или Chat ID не заполнены. Добавьте их в script.js перед отправкой заявок.", error: "Заявка не отправилась. Проверьте настройки Telegram и попробуйте снова.", networkError: "Заявка не отправилась. Браузер не смог подключиться к Telegram API. Проверьте интернет, токен и ограничения хостинга.", success: "Заявка успешно отправлена. Спасибо!"
    },
    bot: { title: "Новая заявка Mult emotion", next: "Следующий шаг: ответить клиенту, подтвердить объем, дедлайн и материалы до старта." },
    footer: { tagline: "Creative AI, сайты и Telegram-инструменты для эмоциональных digital-проектов.", services: "Услуги", packages: "Пакеты", packageLink: "Видео / Песни / Сайты / Боты", contact: "Контакты", rights: "Все права защищены." }
  },
  ua: {
    nav: { home: "Головна", services: "Послуги", packages: "Пакети", portfolio: "Портфоліо", process: "Процес", faq: "FAQ", order: "Заявка", cta: "Замовити" },
    hero: {
      eyebrow: "Creative AI studio для емоційних digital-проєктів",
      title: "AI-емоції, пісні, сайти та розумні Telegram-інструменти для важливих моментів.",
      text: "Mult emotion створює AI-відео, персональні пісні, сайти-запрошення, лендинги, Telegram-ботів і mini apps від ідеї до готового запуску.",
      choose: "Обрати послугу",
      custom: "Індивідуальний проєкт",
      services: "Дивитися послуги",
      visualTitle: "Creative Production Engine",
      capabilities: ["AI-відео", "AI-пісні", "Сайти-запрошення", "Telegram-боти", "Mini Apps", "Конфіденційно"]
    },
    categories: {
      aiVideo: { label: "AI-відео та візуали", short: "Відео, фото, персонажі, історії", emoji: "🎬" },
      aiSong: { label: "AI-пісні", short: "Персональні пісні голосом AI", emoji: "🎵" },
      websites: { label: "Сайти та запрошення", short: "Лендинги, RSVP, події", emoji: "💌" },
      bots: { label: "Telegram-боти та mini apps", short: "Автоматизація, форми, mini apps", emoji: "🤖" }
    },
    services: {
      eyebrow: "Що ми створюємо",
      title: "Креативні digital-послуги для емоцій, подій, брендів та автоматизації.",
      items: [
        ["🎬", "AI-відео та візуальні історії", "Cinematic AI-ролики, персонажі, реклама, love stories, reels і візуальні концепти."],
        ["🖼️", "AI-фото та креативні візуали", "Портрети, персонажі, продуктові концепти, moodboards і social-креативи."],
        ["🎵", "Персональні AI-пісні", "Текст, музичний напрям і пісня, яку заспіває AI для весілля, дня народження, річниці чи сюрпризу."],
        ["💌", "Сайти-запрошення", "Красиві сайти для весіль, днів народження та корпоративів з анкетою підтвердження гостей."],
        ["🚀", "Лендинги", "Прості преміальні лендинги для послуг, запусків, портфоліо та персональних брендів."],
        ["📩", "Форми в Telegram", "Відповіді гостей, заявки та ліди можуть приходити прямо в Telegram-бот клієнта."],
        ["🤖", "Telegram-боти", "Боти заявок, FAQ-боти, записи, меню, сценарії та автоматизація під різні цілі."],
        ["📱", "Telegram mini apps", "Компактні mini apps: каталоги, форми, калькулятори та клієнтські кабінети."],
        ["🔐", "Конфіденційні проєкти", "Особисті ідеї, сюрпризи, чутливі матеріали та нестандартні задачі обробляються уважно."]
      ]
    },
    packages: {
      eyebrow: "Пакети", title: "Оберіть напрям і подивіться безпечні стартові ціни.", select: "Обрати пакет", customOption: "Індивідуальна оцінка",
      items: {
        videoStarter: { name: "Visual Starter", subtitle: "Короткий AI-кліп / набір візуалів", features: ["15-30 секунд AI-відео або невеликий visual pack", "1 креативний напрям", "1-2 персонажі або об'єкти", "Базовий монтаж", "Музика / AI-озвучка опційно", "2 маленькі правки", "Термін від 2-3 днів"] },
        videoStory: { name: "Story Production", subtitle: "AI-історія, реклама або reel pack", features: ["До 90 секунд AI-відео", "До 5 сцен", "План сцен і промти", "AI-озвучка або субтитри", "Відполірований монтаж", "3 маленькі правки", "Термін від 5-7 днів"] },
        videoProduction: { name: "Premium Visual World", subtitle: "Повна AI-історія або кампанія", features: ["До 3 хвилин AI-історії або visual campaign", "До 10 сцен", "Персонажі та артдирекшн", "Музика, субтитри та sound design", "Фінальний монтаж", "5 маленьких правок", "Термін від 7-12 днів"] },
        songMini: { name: "Mini Song Gift", subtitle: "Коротка персональна AI-пісня", features: ["Оригінальний текст під подію", "AI-вокал", "До 60-90 секунд", "1 музичний настрій", "Базове аудіо-полірування", "2 маленькі правки", "Термін від 2-3 днів"] },
        songFull: { name: "Full AI Song", subtitle: "Повна емоційна пісня", features: ["Повний текст з особистими деталями", "AI-вокал і музичний напрям", "До 2.5-3 хвилин", "Імена/історії можна включити", "Аудіо-полірування", "3 маленькі правки", "Термін від 4-6 днів"] },
        songEvent: { name: "Event Song Package", subtitle: "Пісня плюс візуальна подача", features: ["Повна AI-пісня", "Кастомне інтро або привітання", "Обкладинка", "Простий lyric video або visual card", "Файл для події", "4 маленькі правки", "Термін від 5-8 днів"] },
        siteInvite: { name: "Event Invitation Site", subtitle: "Весілля, день народження, корпоратив", features: ["Односторінковий сайт-запрошення", "Деталі та програма події", "Анкета підтвердження гостей", "Відповіді в Telegram", "Адаптив під телефон", "2 маленькі правки", "Термін від 4-6 днів"] },
        siteLanding: { name: "Premium Landing", subtitle: "Послуга, продукт або персональна сторінка", features: ["Односторінковий лендинг", "Офер, секції та CTA", "Форма заявки", "Адаптивний дизайн", "Базові SEO-теги", "3 маленькі правки", "Термін від 6-9 днів"] },
        sitePremium: { name: "Multi-section Website", subtitle: "Більше контенту та richer UI", features: ["Розширений лендинг або невеликий сайт", "Преміальний анімований інтерфейс", "Форми та Telegram-сповіщення", "Портфоліо/галерея", "Допомога із запуском", "4 маленькі правки", "Термін від 10-14 днів"] },
        botStarter: { name: "Request Bot", subtitle: "Простий бот заявок", features: ["Налаштування Telegram-бота", "Базове меню та сценарій заявки", "Відповіді форми у ваш чат", "Красиве форматування повідомлень", "Базова допомога з деплоєм", "2 маленькі правки", "Термін від 4-6 днів"] },
        botBusiness: { name: "Business Bot", subtitle: "Автоматизація зі сценаріями", features: ["Багатокрокова логіка", "Питання та розгалуження", "Сповіщення адміністратору", "Google Sheets або просте зберігання опційно", "Inline-кнопки", "3 маленькі правки", "Термін від 7-12 днів"] },
        botMiniApp: { name: "Mini App MVP", subtitle: "Інтерактивний Telegram mini app", features: ["Інтерфейс Telegram mini app", "Форми, каталог, калькулятор або запис", "Зв'язка з ботом", "Адаптивний UI", "Допомога із запуском", "4 маленькі правки", "Термін від 14-21 днів"] }
      }
    },
    addons: {
      eyebrow: "Додаткові послуги", title: "Додавайте лише те, що справді потрібно обраній послузі.",
      labels: {
        extra30: "Додаткові 30 секунд відео", extraScene: "Додаткова сцена", extraCharacter: "Додатковий персонаж/об'єкт", scenePlan: "Детальний план сцен / сторіборд", aiVoiceover: "AI-озвучка", subtitles: "Субтитри", fourK: "4K-версія", fast: "Швидка доставка", minorRevision: "Додаткова маленька правка", sceneRemake: "Переробка сцени",
        extraVerse: "Додатковий куплет", instrumental: "Інструментальна версія", secondVoice: "Додаткова вокальна версія", lyricVideo: "Простий lyric video", coverArt: "Обкладинка", greetingIntro: "Особисте привітальне інтро", fastSong: "Термінова пісня", songRevision: "Додаткова маленька правка пісні",
        rsvpTelegram: "Анкета RSVP в Telegram", extraSection: "Додаткова секція сайту", multilang: "Додаткова мова", gallery: "Фото/відео галерея", customAnimation: "Кастомна анімація", deployHelp: "Допомога з доменом/деплоєм", privacyPage: "Приватний доступ / privacy page", fastSite: "Терміновий сайт",
        extraFlow: "Додатковий сценарій бота", sheets: "Інтеграція з Google Sheets", adminPanel: "Проста адмін-панель", payments: "Налаштування оплати", reminders: "Нагадування/сповіщення", analytics: "Базова аналітика", deployBot: "Допомога з деплоєм бота", fastBot: "Терміновий бот"
      }
    },
    custom: { eyebrow: "Конфіденційні custom-проєкти", title: "Є особиста ідея, сюрприз або незвична бізнес-задача?", text: "Опишіть ціль. Я акуратно оціню обсяг, захищу матеріали та запропоную безпечний production plan.", button: "Обговорити custom-проєкт" },
    portfolio: {
      eyebrow: "Портфоліо", title: "Концепти портфоліо за напрямами.", note: "Реальні роботи можна додати сюди пізніше.", all: "Усі", tag: "Концепт",
      items: [
        ["aiVideo", "AI Wedding Story", "Cinematic love story з персонажами, музикою та ніжною візуальною подачею."],
        ["aiVideo", "Product Visual Reel", "Яскравий AI-промо ролик для запуску, reels і реклами."],
        ["aiSong", "Birthday AI Song", "Персональна пісня з іменами, спогадами та AI-вокалом."],
        ["aiSong", "Wedding First Dance Song", "Емоційна пісня-сюрприз для весільного моменту."],
        ["websites", "Wedding Invitation Website", "Мобільне запрошення з RSVP-формою та відповідями в Telegram."],
        ["websites", "Premium Service Landing", "Преміальний лендинг з офером, секціями, формою та готовим дизайном."],
        ["bots", "Lead Request Bot", "Telegram-бот, який збирає заявки та надсилає структурований бриф власнику."],
        ["bots", "Mini App Calculator", "Компактний Telegram mini app для форм, розрахунків або вибору послуги."]
      ]
    },
    process: {
      eyebrow: "Як це працює", title: "Зрозумілий процес від емоційної ідеї до готового digital-результату.",
      steps: [
        ["Ви надсилаєте ідею", "Опишіть подію, ціль, аудиторію, референси, дедлайн і що має статися після запуску."],
        ["Фіксуємо обсяг і ціну", "Я відділяю маленькі правки від великих переробок, щоб проєкт був чесним і передбачуваним."],
        ["Починається виробництво", "Створюю візуали, пісню, екрани сайту, логіку бота або flow mini app залежно від послуги."],
        ["Ви отримуєте результат", "Файли, посилання або launch-ready setup зі зрозумілими наступними кроками."]
      ]
    },
    faq: {
      eyebrow: "FAQ", title: "Важливі деталі перед стартом.",
      items: [
        ["Проєкти конфіденційні?", "Так. Особисті історії, матеріали, референси та бізнес-ідеї обробляються уважно. Для чутливих проєктів можна узгодити NDA-style формулювання."],
        ["Що таке AI-пісня?", "Це оригінальна пісня з персональним текстом і AI-вокалом. Такий формат підходить як подарунок на весілля, день народження, річницю, корпоратив або сюрприз."],
        ["Що вважається маленькою правкою?", "Виправлення тексту, таймінгу, субтитрів, маленькі візуальні/аудіо коригування. Переробка сцени, зміна концепту або більша частина проєкту оцінюються окремо."],
        ["Ви робите живу професійну озвучку?", "Жива озвучка лише за індивідуальною оцінкою. У стандартних пакетах використовується AI-озвучка, щоб ціна та строки залишались реалістичними."],
        ["Що таке комерційне використання?", "Клієнт може використовувати фінальний результат для бізнесу, соцмереж, реклами або просування, якщо його матеріали й референси не порушують права третіх осіб."],
        ["Сайт-запрошення може збирати відповіді гостей?", "Так. RSVP-анкета може надсилати підтвердження гостей і коментарі прямо в Telegram-бот або чат клієнта."],
        ["Можна зробити будь-якого Telegram-бота?", "Можна зробити прості та середні за складністю боти, автоматизації та mini apps. Складні системи, оплати, бази даних і адмінки оцінюються окремо."]
      ]
    },
    form: {
      name: "Ім'я", email: "Email", messenger: "Telegram / WhatsApp", projectLanguage: "Мова проєкту", service: "Напрям послуги", package: "Оберіть пакет", addons: "Додаткові послуги", idea: "Ідея / опис проєкту", occasion: "Подія / бізнес-ціль", references: "Посилання на референси або нотатки", deadline: "Дедлайн", budget: "Бюджет", total: "Попередня сума", confirm: "Я розумію, що фінальна ціна може змінитися після обговорення обсягу проєкту", submit: "Надіслати заявку",
      required: "Будь ласка, заповніть обов'язкові поля та підтвердьте примітку про ціну.", sending: "Надсилаю заявку...", tokenMissing: "Telegram Bot Token або Chat ID не заповнені. Додайте їх у script.js перед відправкою заявок.", error: "Заявку не надіслано. Перевірте налаштування Telegram і спробуйте ще раз.", networkError: "Заявку не надіслано. Браузер не зміг підключитися до Telegram API. Перевірте інтернет, токен і обмеження хостингу.", success: "Заявку успішно надіслано. Дякую!"
    },
    bot: { title: "Нова заявка Mult emotion", next: "Наступний крок: відповісти клієнту, підтвердити обсяг, дедлайн і матеріали до старту." },
    footer: { tagline: "Creative AI, сайти та Telegram-інструменти для емоційних digital-проєктів.", services: "Послуги", packages: "Пакети", packageLink: "Відео / Пісні / Сайти / Боти", contact: "Контакти", rights: "Усі права захищені." }
  }
};

let currentLang = localStorage.getItem("multEmotionLang") || "ru";
let activeCategory = localStorage.getItem("multEmotionCategory") || "aiVideo";
let activePortfolio = "all";

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function t(path) {
  return path.split(".").reduce((value, key) => value?.[key], translations[currentLang]) || path;
}

function money(value) {
  return `$${value}`;
}

function currentCategoryData() {
  return priceData[activeCategory];
}

function packageLabel(packageId) {
  if (packageId === "custom") {
    return translations[currentLang].packages.customOption;
  }
  const item = translations[currentLang].packages.items[packageId];
  const price = Object.values(priceData).flatMap((category) => category.packages).find((pkg) => pkg.id === packageId)?.price;
  return item ? `${item.name} — ${money(price)}` : packageId;
}

function renderStaticTranslations() {
  $$("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.documentElement.lang = currentLang === "ua" ? "uk" : currentLang;
}

function renderCategoryTabs() {
  const markup = serviceOrder.map((category) => {
    const data = translations[currentLang].categories[category];
    return `
      <button class="category-tab ${category === activeCategory ? "active" : ""}" type="button" data-category="${category}">
        <strong>${data.emoji} ${data.label}</strong>
        <span>${data.short}</span>
      </button>
    `;
  }).join("");
  $("#packageTabs").innerHTML = markup;
}

function renderServices() {
  $("#servicesGrid").innerHTML = translations[currentLang].services.items.map(([icon, title, text]) => `
    <article class="card">
      <div class="card-icon">${icon}</div>
      <h3>${title}</h3>
      <p>${text}</p>
    </article>
  `).join("");
}

function renderPackages() {
  const items = translations[currentLang].packages.items;
  $("#packagesGrid").innerHTML = currentCategoryData().packages.map((pkg, index) => {
    const item = items[pkg.id];
    return `
      <article class="package-card ${index === 1 ? "featured" : ""}">
        <h3>${item.name}</h3>
        <p>${item.subtitle}</p>
        <div class="price">${money(pkg.price)}</div>
        <ul>${item.features.map((feature) => `<li>${feature}</li>`).join("")}</ul>
        <button class="btn btn-primary" type="button" data-select-category="${activeCategory}" data-select-package="${pkg.id}">${translations[currentLang].packages.select}</button>
      </article>
    `;
  }).join("");
}

function renderAddons() {
  const labels = translations[currentLang].addons.labels;
  $("#addonsGrid").innerHTML = currentCategoryData().addons.map((addon) => `
    <article class="addon-card">
      <p>${labels[addon.id]}</p>
      <strong class="addon-pill">${money(addon.price)}</strong>
    </article>
  `).join("");

  $("#formAddons").innerHTML = currentCategoryData().addons.map((addon) => `
    <label class="check-row">
      <input type="checkbox" name="addons" value="${addon.id}" data-price="${addon.price}">
      <span>${labels[addon.id]} — ${money(addon.price)}</span>
    </label>
  `).join("");
}

function renderPortfolioTabs() {
  const allLabel = translations[currentLang].portfolio.all;
  const tabs = [
    `<button class="category-tab portfolio-filter ${activePortfolio === "all" ? "active" : ""}" type="button" data-portfolio="all"><strong>${allLabel}</strong><span>Mult emotion</span></button>`,
    ...serviceOrder.map((category) => {
      const data = translations[currentLang].categories[category];
      return `<button class="category-tab portfolio-filter ${activePortfolio === category ? "active" : ""}" type="button" data-portfolio="${category}"><strong>${data.emoji} ${data.label}</strong><span>${data.short}</span></button>`;
    })
  ];
  $("#portfolioTabs").innerHTML = tabs.join("");
}

function renderPortfolio() {
  const gradients = [
    "radial-gradient(circle at 24% 22%, #ff2dc8, transparent 30%), radial-gradient(circle at 80% 34%, #b7ff2a, transparent 28%), linear-gradient(135deg, #27113f, #0c1028)",
    "radial-gradient(circle at 70% 20%, #18b7ff, transparent 33%), radial-gradient(circle at 22% 78%, #ff2dc8, transparent 34%), linear-gradient(135deg, #12123a, #06070d)",
    "radial-gradient(circle at 50% 26%, #b7ff2a, transparent 30%), radial-gradient(circle at 70% 82%, #8f4dff, transparent 34%), linear-gradient(135deg, #101010, #18253f)",
    "radial-gradient(circle at 24% 26%, #ffb82e, transparent 31%), radial-gradient(circle at 76% 66%, #18b7ff, transparent 34%), linear-gradient(135deg, #260820, #111735)",
    "radial-gradient(circle at 30% 30%, #18b7ff, transparent 30%), radial-gradient(circle at 80% 70%, #b7ff2a, transparent 34%), linear-gradient(135deg, #071020, #260c3f)",
    "radial-gradient(circle at 30% 70%, #ff2dc8, transparent 30%), radial-gradient(circle at 75% 24%, #8f4dff, transparent 34%), linear-gradient(135deg, #160b24, #06121a)",
    "radial-gradient(circle at 30% 30%, #b7ff2a, transparent 30%), radial-gradient(circle at 72% 74%, #18b7ff, transparent 34%), linear-gradient(135deg, #061612, #24135a)",
    "radial-gradient(circle at 30% 70%, #ff2dc8, transparent 30%), radial-gradient(circle at 75% 24%, #b7ff2a, transparent 34%), linear-gradient(135deg, #111111, #072b35)"
  ];
  const items = translations[currentLang].portfolio.items.filter(([category]) => activePortfolio === "all" || category === activePortfolio);
  $("#portfolioGrid").innerHTML = items.map(([category, title, text], index) => `
    <article class="portfolio-card orb-card" style="--art: ${gradients[index % gradients.length]}">
      <div class="orb-preview" aria-hidden="true">
        <span class="orb-circle"></span>
        <span class="orb-circle"></span>
        <span class="orb-circle"></span>
        <span class="orb-circle">${translations[currentLang].categories[category].emoji}</span>
        <div class="preview-screen">
          <i></i><i></i><i></i>
        </div>
      </div>
      <div class="portfolio-copy">
        <span>${translations[currentLang].portfolio.tag} · ${translations[currentLang].categories[category].label}</span>
        <h3>${title}</h3>
        <p>${text}</p>
      </div>
      <div class="portfolio-action">
        <button class="portfolio-open" type="button">${translations[currentLang].packages.select}</button>
        <span>⌄</span>
      </div>
    </article>
  `).join("");
}

function renderProcess() {
  $("#processGrid").innerHTML = translations[currentLang].process.steps.map(([title, text], index) => `
    <article class="process-card">
      <div class="step-number">${index + 1}</div>
      <h3>${title}</h3>
      <p>${text}</p>
    </article>
  `).join("");
}

function renderFaq() {
  $("#faqList").innerHTML = translations[currentLang].faq.items.map(([question, answer]) => `
    <article class="faq-item">
      <button class="faq-question" type="button">
        <span>${question}</span>
        <span>+</span>
      </button>
      <p class="faq-answer">${answer}</p>
    </article>
  `).join("");
}

function renderSelects() {
  const serviceSelect = $("#serviceSelect");
  const packageSelect = $("#packageSelect");
  const selectedPackage = packageSelect.value;

  serviceSelect.innerHTML = serviceOrder.map((category) => {
    const data = translations[currentLang].categories[category];
    return `<option value="${category}">${data.emoji} ${data.label}</option>`;
  }).join("");
  serviceSelect.value = activeCategory;

  packageSelect.innerHTML = [
    ...currentCategoryData().packages.map((pkg) => `<option value="${pkg.id}">${packageLabel(pkg.id)}</option>`),
    `<option value="custom">${translations[currentLang].packages.customOption}</option>`
  ].join("");

  if ([...packageSelect.options].some((option) => option.value === selectedPackage)) {
    packageSelect.value = selectedPackage;
  }
}

function renderAll() {
  renderStaticTranslations();
  renderCategoryTabs();
  renderServices();
  renderPackages();
  renderAddons();
  renderPortfolioTabs();
  renderPortfolio();
  renderProcess();
  renderFaq();
  renderSelects();
  updateTotal();
  $$(".lang-btn").forEach((button) => button.classList.toggle("active", button.dataset.lang === currentLang));
  decorateButtons();
}

function packagePrice(packageId) {
  return currentCategoryData().packages.find((pkg) => pkg.id === packageId)?.price || 0;
}

function selectedAddonLabels() {
  const labels = translations[currentLang].addons.labels;
  return $$("input[name='addons']:checked").map((checkbox) => `${labels[checkbox.value]} — ${money(Number(checkbox.dataset.price))}`);
}

function updateTotal() {
  const packageId = $("#packageSelect")?.value || currentCategoryData().packages[0].id;
  const addonsTotal = $$("input[name='addons']:checked").reduce((sum, checkbox) => sum + Number(checkbox.dataset.price), 0);
  const packageTotal = packagePrice(packageId);

  if (packageId === "custom") {
    $("#totalPrice").textContent = addonsTotal ? `${money(addonsTotal)} + ${translations[currentLang].packages.customOption}` : translations[currentLang].packages.customOption;
    return;
  }

  $("#totalPrice").textContent = money(packageTotal + addonsTotal);
}

function buildOrderPayload(form) {
  const data = new FormData(form);
  const service = translations[currentLang].categories[data.get("service")];
  return {
    source: "Mult emotion website",
    pageLanguage: currentLang,
    service: {
      id: data.get("service"),
      label: service.label
    },
    package: {
      id: data.get("package"),
      label: packageLabel(data.get("package"))
    },
    addons: selectedAddonLabels(),
    estimatedTotal: $("#totalPrice").textContent,
    client: {
      name: data.get("name"),
      email: data.get("email"),
      messenger: data.get("messenger")
    },
    projectLanguage: data.get("projectLanguage"),
    occasion: data.get("occasion"),
    references: data.get("references"),
    deadline: data.get("deadline"),
    budget: data.get("budget"),
    idea: data.get("idea"),
    botTitle: translations[currentLang].bot.title,
    nextStep: translations[currentLang].bot.next,
    submittedAt: new Date().toISOString()
  };
}

function setStatus(message, type = "") {
  const status = $("#formStatus");
  status.textContent = message;
  status.className = `form-status ${type}`.trim();
}

function decorateButtons() {
  $$(".btn").forEach((button) => {
    const label = button.textContent.replace(/^✦\s*/, "").trim();
    button.textContent = "";

    const symbol = document.createElement("span");
    symbol.className = "btn-symbol";
    symbol.textContent = "✦";

    const word = document.createElement("span");
    word.className = "btn-word";
    word.textContent = label;

    button.append(symbol, word);
  });
}

async function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;

  if (!form.checkValidity()) {
    form.reportValidity();
    setStatus(translations[currentLang].form.required, "error");
    return;
  }

  setStatus(translations[currentLang].form.sending);

  try {
    const response = await fetch("/api/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(buildOrderPayload(form))
    });
    const result = await response.json().catch(() => null);

    if (!response.ok) {
      const telegramMessage = result?.error || result?.description || `Request error: ${response.status}`;
      throw new Error(telegramMessage);
    }

    form.reset();
    activeCategory = "aiVideo";
    localStorage.setItem("multEmotionCategory", activeCategory);
    renderAll();
    setStatus(translations[currentLang].form.success, "success");
  } catch (error) {
    console.error(error);
    const message = error instanceof TypeError
      ? translations[currentLang].form.networkError
      : `${translations[currentLang].form.error} ${error.message}`;
    setStatus(message, "error");
  }
}

function setActiveCategory(category) {
  activeCategory = category;
  localStorage.setItem("multEmotionCategory", activeCategory);
  renderCategoryTabs();
  renderPackages();
  renderAddons();
  renderSelects();
  updateTotal();
  decorateButtons();
}

function setupEvents() {
  $(".menu-toggle").addEventListener("click", (event) => {
    const isOpen = $("#mainNav").classList.toggle("open");
    event.currentTarget.setAttribute("aria-expanded", String(isOpen));
  });

  $("#mainNav").addEventListener("click", () => {
    $("#mainNav").classList.remove("open");
    $(".menu-toggle").setAttribute("aria-expanded", "false");
  });

  document.addEventListener("click", (event) => {
    const packageButton = event.target.closest("[data-select-package]");
    const categoryButton = event.target.closest("[data-category]");
    const customButton = event.target.closest("[data-action='custom-project']");
    const portfolioButton = event.target.closest("[data-portfolio]");
    const faqButton = event.target.closest(".faq-question");

    if (categoryButton) {
      setActiveCategory(categoryButton.dataset.category);
    }

    if (packageButton) {
      setActiveCategory(packageButton.dataset.selectCategory);
      $("#packageSelect").value = packageButton.dataset.selectPackage;
      updateTotal();
      $("#order").scrollIntoView({ behavior: "smooth" });
    }

    if (customButton) {
      $("#packageSelect").value = "custom";
      updateTotal();
      $("#order").scrollIntoView({ behavior: "smooth" });
      $("textarea[name='idea']").focus({ preventScroll: true });
    }

    if (portfolioButton) {
      activePortfolio = portfolioButton.dataset.portfolio;
      renderPortfolioTabs();
      renderPortfolio();
    }

    if (faqButton) {
      const item = faqButton.closest(".faq-item");
      item.classList.toggle("open");
      faqButton.querySelector("span:last-child").textContent = item.classList.contains("open") ? "−" : "+";
    }
  });

  $$(".lang-btn").forEach((button) => {
    button.addEventListener("click", () => {
      currentLang = button.dataset.lang;
      localStorage.setItem("multEmotionLang", currentLang);
      renderAll();
    });
  });

  $("#serviceSelect").addEventListener("change", (event) => {
    setActiveCategory(event.target.value);
  });

  $("#orderForm").addEventListener("change", (event) => {
    if (event.target.matches("#packageSelect, input[name='addons']")) {
      updateTotal();
    }
  });

  $("#orderForm").addEventListener("submit", handleSubmit);
}

function setupRevealAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  $$(".reveal").forEach((element) => observer.observe(element));
}

function setupButtonParticles() {
  const canvas = $("#particles");
  if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const ctx = canvas.getContext("2d", { alpha: true });
  const particles = [];
  const shapes = ["circle", "square", "diamond", "triangle", "cross", "heart"];
  let activeTarget = null;
  let frame = 0;
  let dpr = window.devicePixelRatio || 1;

  function resizeCanvas() {
    dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function random(min, max) {
    return min + Math.random() * (max - min);
  }

  function drawShape(particle) {
    ctx.save();
    ctx.translate(particle.x, particle.y);
    ctx.rotate(particle.rotation);
    ctx.globalAlpha = Math.max(0, particle.life);
    ctx.fillStyle = `hsl(${particle.hue} 100% 66%)`;
    ctx.shadowBlur = 14;
    ctx.shadowColor = `hsl(${particle.hue} 100% 66%)`;
    ctx.beginPath();

    const size = particle.size;
    if (particle.shape === "circle") {
      ctx.arc(0, 0, size, 0, Math.PI * 2);
    } else if (particle.shape === "square") {
      ctx.rect(-size, -size, size * 2, size * 2);
    } else if (particle.shape === "diamond") {
      ctx.moveTo(0, -size);
      ctx.lineTo(size, 0);
      ctx.lineTo(0, size);
      ctx.lineTo(-size, 0);
      ctx.closePath();
    } else if (particle.shape === "triangle") {
      ctx.moveTo(0, -size);
      ctx.lineTo(size, size);
      ctx.lineTo(-size, size);
      ctx.closePath();
    } else if (particle.shape === "cross") {
      ctx.rect(-size * 1.2, -size * 0.3, size * 2.4, size * 0.6);
      ctx.rect(-size * 0.3, -size * 1.2, size * 0.6, size * 2.4);
    } else {
      ctx.moveTo(0, size * 0.75);
      ctx.bezierCurveTo(size, -size * 0.35, size * 1.5, -size * 1.05, 0, -size * 1.5);
      ctx.bezierCurveTo(-size * 1.5, -size * 1.05, -size, -size * 0.35, 0, size * 0.75);
      ctx.closePath();
    }

    ctx.fill();
    ctx.restore();
  }

  function spawn(x, y, burst = false) {
    const hue = random(0, 360);
    const angle = random(0, Math.PI * 2);
    const speed = burst ? random(2.2, 6.8) : random(0.3, 1.2);
    particles.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - (burst ? 1.2 : 0.5),
      gravity: burst ? 0.08 : 0.025,
      life: burst ? 1 : random(0.45, 0.85),
      fade: burst ? random(0.012, 0.024) : random(0.008, 0.014),
      size: burst ? random(3, 8) : random(2, 5),
      hue,
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      rotation: random(0, Math.PI * 2),
      spin: random(-0.08, 0.08)
    });
  }

  function targetPoint(target) {
    const rect = target.getBoundingClientRect();
    const angle = random(0, Math.PI * 2);
    const radius = Math.max(rect.width, rect.height) * random(0.28, 0.58);
    return {
      x: rect.left + rect.width / 2 + Math.cos(angle) * radius,
      y: rect.top + rect.height / 2 + Math.sin(angle) * radius * 0.45
    };
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
    if (activeTarget && frame++ % 3 === 0) {
      const point = targetPoint(activeTarget);
      spawn(point.x, point.y, false);
    }

    let index = 0;
    while (index < particles.length) {
      const particle = particles[index];
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.vy += particle.gravity;
      particle.rotation += particle.spin;
      particle.life -= particle.fade;

      if (particle.life > 0) {
        drawShape(particle);
        index += 1;
      } else {
        particles.splice(index, 1);
      }
    }

    requestAnimationFrame(animate);
  }

  document.addEventListener("pointerover", (event) => {
    const target = event.target.closest(".btn, .category-tab, .portfolio-open");
    if (target) activeTarget = target;
  });

  document.addEventListener("pointerout", (event) => {
    if (activeTarget && event.target.closest(".btn, .category-tab, .portfolio-open") === activeTarget) {
      activeTarget = null;
    }
  });

  document.addEventListener("click", (event) => {
    const target = event.target.closest(".btn, .category-tab, .portfolio-open");
    if (!target) return;
    const rect = target.getBoundingClientRect();
    const x = event.clientX || rect.left + rect.width / 2;
    const y = event.clientY || rect.top + rect.height / 2;
    for (let i = 0; i < 42; i += 1) {
      spawn(x, y, true);
    }
  });

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
  requestAnimationFrame(animate);
}

document.addEventListener("DOMContentLoaded", () => {
  $("#year").textContent = new Date().getFullYear();
  renderAll();
  setupEvents();
  setupRevealAnimations();
  setupButtonParticles();
});
