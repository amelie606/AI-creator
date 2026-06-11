const TELEGRAM_BOT_TOKEN = "8950411356:AAH_2_08pZmn8iiy8aZWHfzyTSjlTWFkxEY"; // Insert your Telegram Bot Token here.
const TELEGRAM_CHAT_ID = "-1005053711365"; // Insert your Telegram Chat ID here.

const packagePrices = {
  basic: 55,
  standard: 220,
  premium: 420,
  custom: 0
};

const addons = [
  { id: "extra30", price: 50 },
  { id: "extra60", price: 100 },
  { id: "character", price: 25 },
  { id: "scene", price: 35 },
  { id: "script", price: 50 },
  { id: "storyboard", price: 70 },
  { id: "voiceover", price: 60 },
  { id: "subtitles", price: 20 },
  { id: "fourK", price: 50 },
  { id: "fast", price: 100 },
  { id: "rights", price: 80 },
  { id: "revision", price: 20 }
];

const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      packages: "Packages",
      portfolio: "Portfolio",
      process: "Process",
      faq: "FAQ",
      order: "Order",
      cta: "Order now"
    },
    hero: {
      eyebrow: "From idea to final video",
      title: "Cinematic AI animation, characters and visual worlds for brands and stories.",
      text: "I create cinematic AI videos, 3D cartoon-style stories, animated characters and complete visual production from your idea.",
      choose: "Choose package",
      custom: "Custom project",
      services: "View services",
      visualTitle: "AI Animation Engine",
      capabilities: ["AI Animation", "3D Characters", "Voiceover", "Storytelling", "Commercial Videos", "Social Media Content"]
    },
    services: {
      eyebrow: "What I can create",
      title: "AI production for ads, stories, characters and social content.",
      items: [
        ["🎬", "AI Animated Videos", "Short and polished animated videos for brands, creators and personal stories."],
        ["🧊", "3D Cartoon Stories", "Cinematic 3D cartoon-style animation with a modern animated movie look."],
        ["🧑‍🚀", "AI Characters", "Unique characters, consistent visual direction and expressive scenes."],
        ["⚡", "Commercials & Ads", "Bright promo videos, product launches and attention-grabbing ad creatives."],
        ["🎵", "Music Videos", "Visual mood, rhythm, story scenes and animated worlds for tracks."],
        ["💞", "Wedding / Love Stories", "Emotional romantic videos, family-friendly animation and keepsake stories."],
        ["📱", "Social Media Reels", "Vertical clips for TikTok, Instagram, YouTube Shorts and campaigns."],
        ["🧠", "Storyboards & Prompts", "Prompts, shot lists, scene planning and art direction for production."],
        ["🎙️", "Voiceover & Sound Design", "Voiceover planning, subtitles, music, sound effects and final polish."],
        ["🌌", "Visual Concepts", "Creative directions, moodboards and cinematic style systems for your idea."]
      ]
    },
    packages: {
      eyebrow: "Packages",
      title: "Clear starting points for your AI video.",
      select: "Select package",
      items: {
        basic: {
          name: "Basic",
          subtitle: "Short AI Clip",
          features: ["15-30 seconds AI animated video", "1 scene", "1-2 characters", "Basic editing", "Music / sound effects", "Prompt creation", "2 revisions", "Delivery: 2 days"]
        },
        standard: {
          name: "Standard",
          subtitle: "Animated Story Video",
          features: ["Up to 90 seconds AI animated video", "Up to 5 scenes", "Up to 4-6 characters", "Voiceover", "Music & sound effects", "Subtitles", "Polished editing", "3 revisions", "Delivery: 5 days"]
        },
        premium: {
          name: "Premium",
          subtitle: "Full AI Animated Story",
          features: ["Up to 3 minutes AI animated story", "Up to 10 scenes", "Up to 8-10 characters", "Script adaptation", "Scene planning", "Voiceover", "Music & sound design", "Subtitles", "Final editing", "5 revisions", "Delivery: 7 days"]
        }
      }
    },
    addons: {
      eyebrow: "Add-ons",
      title: "Upgrade the production when your story needs more.",
      labels: {
        extra30: "Extra 30 seconds",
        extra60: "Extra 60 seconds",
        character: "Extra character",
        scene: "Extra scene",
        script: "Script writing",
        storyboard: "Storyboard / shot list",
        voiceover: "Professional voiceover",
        subtitles: "Subtitles",
        fourK: "4K delivery",
        fast: "Fast delivery",
        rights: "Commercial rights",
        revision: "Extra revision"
      }
    },
    custom: {
      eyebrow: "Custom Project",
      title: "Need something unique?",
      text: "Tell me your idea and I will create a custom AI production plan for you.",
      button: "Plan custom project"
    },
    portfolio: {
      eyebrow: "Portfolio",
      title: "Video preview concepts for future real cases.",
      note: "Real works can be added here later.",
      tag: "Video preview",
      items: [
        ["AI Wedding Story", "A tender cinematic story with romantic scenes and custom characters."],
        ["3D Character Trailer", "A bright character reveal with action beats and a premium trailer rhythm."],
        ["Product Commercial", "A punchy product spot with glossy visuals and social-first pacing."],
        ["Cartoon Music Video", "A colorful animated world matched to the mood and rhythm of a track."],
        ["Social Media Reel", "A fast vertical creative built for hooks, retention and brand recognition."],
        ["Cinematic Love Story", "A polished emotional short with voiceover, music and visual storytelling."]
      ]
    },
    process: {
      eyebrow: "How it works",
      title: "A clean process from rough idea to polished final video.",
      steps: [
        ["You send an idea", "Share your story, goal, references, audience and preferred style."],
        ["I create concept, prompts and visual direction", "I shape the scenes, characters, tone, prompts and production plan."],
        ["I generate and edit the video", "The visuals, voiceover, music, subtitles and edit come together."],
        ["You receive final polished video", "You get the final file ready for publishing, presenting or gifting."]
      ]
    },
    faq: {
      eyebrow: "FAQ",
      title: "Answers before we start creating.",
      items: [
        ["What do you need from me to start?", "A short idea, goal, preferred style, references if you have them, deadline and the format you need."],
        ["Can you create characters from references?", "Yes. References help define the look, mood and details, while the final result remains an original AI-created visual direction."],
        ["Can you make a video in my language?", "Yes. The project can include voiceover, subtitles and on-screen text in different languages."],
        ["Is the animation fully custom?", "The concept, prompts, scenes, edit and direction are built for your project. Exact results depend on AI generation and production limits."],
        ["Can I order a longer video?", "Yes. Longer formats can be planned as a custom project or extended with add-ons."],
        ["Do you provide commercial rights?", "Commercial usage can be added to the project. We will confirm the exact terms before production."],
        ["Can you create content for TikTok, Instagram, YouTube?", "Yes. I can create vertical reels, shorts, ad creatives and platform-ready versions."]
      ]
    },
    form: {
      name: "Name",
      email: "Email",
      messenger: "Telegram / WhatsApp",
      projectLanguage: "Language of project",
      projectType: "Project type",
      package: "Select package",
      addons: "Add-ons",
      idea: "Project idea / description",
      references: "References link",
      deadline: "Deadline",
      budget: "Budget",
      total: "Estimated total",
      confirm: "I understand that final price may change after discussing the project",
      submit: "Send request",
      required: "Please fill in all required fields and confirm the price note.",
      sending: "Sending request...",
      tokenMissing: "Telegram Bot Token or Chat ID is not filled in. Add them in script.js before sending requests.",
      error: "Request was not sent. Please check the Telegram settings and try again.",
      networkError: "Request was not sent. Browser could not reach Telegram API. Check internet, token and hosting restrictions.",
      success: "Request sent successfully. Thank you!",
      projectTypes: ["AI animated video", "3D cartoon story", "Commercial / ad", "Social media content", "Music video", "Wedding / love story", "Custom project"],
      packages: { basic: "Basic — Short AI Clip", standard: "Standard — Animated Story Video", premium: "Premium — Full AI Animated Story", custom: "Custom project" }
    },
    footer: {
      tagline: "Cinematic AI animation from idea to final video.",
      services: "Services",
      packages: "Packages",
      contact: "Contact",
      rights: "All rights reserved."
    }
  },
  ru: {
    nav: { home: "Главная", services: "Услуги", packages: "Пакеты", portfolio: "Портфолио", process: "Процесс", faq: "FAQ", order: "Заявка", cta: "Заказать" },
    hero: {
      eyebrow: "От идеи до финального видео",
      title: "Cinematic AI-видео, 3D-анимация, персонажи и визуальные миры под ключ.",
      text: "Создаю cinematic AI-видео, 3D-анимацию, персонажей, рекламные ролики и визуальные истории под ключ.",
      choose: "Выбрать пакет",
      custom: "Индивидуальный проект",
      services: "Смотреть услуги",
      visualTitle: "AI Animation Engine",
      capabilities: ["AI-анимация", "3D-персонажи", "Озвучка", "Сторителлинг", "Рекламные видео", "Контент для соцсетей"]
    },
    services: {
      eyebrow: "Что я могу создать",
      title: "AI-продакшн для рекламы, историй, персонажей и соцсетей.",
      items: [
        ["🎬", "AI-анимационные видео", "Короткие и отполированные анимационные ролики для брендов, авторов и личных историй."],
        ["🧊", "3D cartoon stories", "Cinematic 3D cartoon-style animation с современным видом анимационного кино."],
        ["🧑‍🚀", "AI-персонажи", "Уникальные персонажи, единое визуальное направление и выразительные сцены."],
        ["⚡", "Реклама и креативы", "Яркие промо, запуски продуктов и ролики, которые цепляют внимание."],
        ["🎵", "Музыкальные видео", "Визуальный стиль, ритм, сюжетные сцены и анимационные миры для треков."],
        ["💞", "Wedding / Love Stories", "Эмоциональные романтические видео и family-friendly 3D animated style."],
        ["📱", "Reels для соцсетей", "Вертикальные клипы для TikTok, Instagram, YouTube Shorts и кампаний."],
        ["🧠", "Сториборды и промты", "Промты, shot list, план сцен и арт-дирекшн для продакшна."],
        ["🎙️", "Озвучка и звук", "План озвучки, субтитры, музыка, эффекты и финальная полировка."],
        ["🌌", "Визуальные концепты", "Креативные направления, мудборды и cinematic style system под вашу идею."]
      ]
    },
    packages: {
      eyebrow: "Пакеты",
      title: "Понятные стартовые варианты для вашего AI-видео.",
      select: "Выбрать пакет",
      items: {
        basic: { name: "Basic", subtitle: "Short AI Clip", features: ["15-30 секунд AI-анимации", "1 сцена", "1-2 персонажа", "Базовый монтаж", "Музыка / звуковые эффекты", "Создание промтов", "2 правки", "Срок: 2 дня"] },
        standard: { name: "Standard", subtitle: "Animated Story Video", features: ["До 90 секунд AI-анимации", "До 5 сцен", "До 4-6 персонажей", "Озвучка", "Музыка и звуковые эффекты", "Субтитры", "Полированный монтаж", "3 правки", "Срок: 5 дней"] },
        premium: { name: "Premium", subtitle: "Full AI Animated Story", features: ["До 3 минут AI animated story", "До 10 сцен", "До 8-10 персонажей", "Адаптация сценария", "Планирование сцен", "Озвучка", "Музыка и саунд-дизайн", "Субтитры", "Финальный монтаж", "5 правок", "Срок: 7 дней"] }
      }
    },
    addons: {
      eyebrow: "Дополнительные услуги",
      title: "Усильте продакшн, если истории нужно больше.",
      labels: {
        extra30: "Дополнительные 30 секунд", extra60: "Дополнительные 60 секунд", character: "Дополнительный персонаж", scene: "Дополнительная сцена", script: "Написание сценария", storyboard: "Сториборд / shot list", voiceover: "Профессиональная озвучка", subtitles: "Субтитры", fourK: "4K-версия", fast: "Срочная доставка", rights: "Коммерческие права", revision: "Дополнительная правка"
      }
    },
    custom: { eyebrow: "Индивидуальный проект", title: "Нужно что-то уникальное?", text: "Расскажите идею, и я создам индивидуальный план AI-продакшна под ваш проект.", button: "Обсудить проект" },
    portfolio: {
      eyebrow: "Портфолио", title: "Концепты превью для будущих реальных работ.", note: "Реальные работы можно добавить сюда позже.", tag: "Video preview",
      items: [
        ["AI Wedding Story", "Нежная cinematic-история с романтичными сценами и кастомными персонажами."],
        ["3D Character Trailer", "Яркое раскрытие персонажа с динамикой трейлера и премиальным ритмом."],
        ["Product Commercial", "Энергичный продуктовый ролик с глянцевыми визуалами для соцсетей."],
        ["Cartoon Music Video", "Цветной анимационный мир под настроение и ритм трека."],
        ["Social Media Reel", "Быстрый вертикальный креатив для hook, retention и узнаваемости."],
        ["Cinematic Love Story", "Эмоциональный короткий фильм с озвучкой, музыкой и визуальным сторителлингом."]
      ]
    },
    process: {
      eyebrow: "Как это работает", title: "Чистый процесс от сырой идеи до отполированного видео.",
      steps: [
        ["Вы отправляете идею", "Расскажите историю, цель, референсы, аудиторию и желаемый стиль."],
        ["Я создаю концепт, промты и визуальное направление", "Формирую сцены, персонажей, тон, промты и production plan."],
        ["Я генерирую и монтирую видео", "Визуалы, озвучка, музыка, субтитры и монтаж собираются в цельный ролик."],
        ["Вы получаете финальное видео", "Готовый файл для публикации, презентации, рекламы или подарка."]
      ]
    },
    faq: {
      eyebrow: "FAQ", title: "Ответы перед стартом работы.",
      items: [
        ["Что нужно от меня для старта?", "Короткая идея, цель, желаемый стиль, референсы, если есть, дедлайн и нужный формат."],
        ["Можно создать персонажей по референсам?", "Да. Референсы помогают определить образ, настроение и детали, а финальный результат остается оригинальным AI-визуалом."],
        ["Можно сделать видео на моем языке?", "Да. Проект может включать озвучку, субтитры и текст на экране на разных языках."],
        ["Анимация полностью кастомная?", "Концепт, промты, сцены, монтаж и направление создаются под проект. Точный результат зависит от возможностей AI-генерации и продакшна."],
        ["Можно заказать более длинное видео?", "Да. Длинные форматы можно оформить как custom project или расширить с помощью add-ons."],
        ["Вы предоставляете коммерческие права?", "Коммерческое использование можно добавить к проекту. Точные условия подтверждаются перед производством."],
        ["Можно создать контент для TikTok, Instagram, YouTube?", "Да. Я могу создать вертикальные reels, shorts, рекламные креативы и версии под платформы."]
      ]
    },
    form: {
      name: "Имя", email: "Email", messenger: "Telegram / WhatsApp", projectLanguage: "Язык проекта", projectType: "Тип проекта", package: "Выберите пакет", addons: "Дополнительные услуги", idea: "Идея / описание проекта", references: "Ссылка на референсы", deadline: "Дедлайн", budget: "Бюджет", total: "Предварительная сумма", confirm: "Я понимаю, что финальная цена может измениться после обсуждения проекта", submit: "Отправить заявку",
      required: "Пожалуйста, заполните обязательные поля и подтвердите примечание о цене.", sending: "Отправляю заявку...", tokenMissing: "Telegram Bot Token или Chat ID не заполнены. Добавьте их в script.js перед отправкой заявок.", error: "Заявка не отправилась. Проверьте настройки Telegram и попробуйте снова.", networkError: "Заявка не отправилась. Браузер не смог подключиться к Telegram API. Проверьте интернет, токен и ограничения хостинга.", success: "Заявка успешно отправлена. Спасибо!",
      projectTypes: ["AI-анимационное видео", "3D cartoon story", "Реклама / креатив", "Контент для соцсетей", "Музыкальное видео", "Wedding / love story", "Индивидуальный проект"],
      packages: { basic: "Basic — Short AI Clip", standard: "Standard — Animated Story Video", premium: "Premium — Full AI Animated Story", custom: "Индивидуальный проект" }
    },
    footer: { tagline: "Cinematic AI-анимация от идеи до финального видео.", services: "Услуги", packages: "Пакеты", contact: "Контакты", rights: "Все права защищены." }
  },
  ua: {
    nav: { home: "Головна", services: "Послуги", packages: "Пакети", portfolio: "Портфоліо", process: "Процес", faq: "FAQ", order: "Заявка", cta: "Замовити" },
    hero: {
      eyebrow: "Від ідеї до фінального відео",
      title: "Cinematic AI-відео, 3D-анімація, персонажі та візуальні світи під ключ.",
      text: "Створюю cinematic AI-відео, 3D-анімацію, персонажів, рекламні ролики та візуальні історії під ключ.",
      choose: "Обрати пакет",
      custom: "Індивідуальний проєкт",
      services: "Дивитися послуги",
      visualTitle: "AI Animation Engine",
      capabilities: ["AI-анімація", "3D-персонажі", "Озвучка", "Сторітелінг", "Рекламні відео", "Контент для соцмереж"]
    },
    services: {
      eyebrow: "Що я можу створити",
      title: "AI-продакшн для реклами, історій, персонажів і соцмереж.",
      items: [
        ["🎬", "AI-анімаційні відео", "Короткі й відполіровані анімаційні ролики для брендів, авторів та особистих історій."],
        ["🧊", "3D cartoon stories", "Cinematic 3D cartoon-style animation із сучасним виглядом анімаційного кіно."],
        ["🧑‍🚀", "AI-персонажі", "Унікальні персонажі, єдиний візуальний напрям і виразні сцени."],
        ["⚡", "Реклама та креативи", "Яскраві промо, запуски продуктів і ролики, що привертають увагу."],
        ["🎵", "Музичні відео", "Візуальний стиль, ритм, сюжетні сцени й анімаційні світи для треків."],
        ["💞", "Wedding / Love Stories", "Емоційні романтичні відео та family-friendly 3D animated style."],
        ["📱", "Reels для соцмереж", "Вертикальні кліпи для TikTok, Instagram, YouTube Shorts і кампаній."],
        ["🧠", "Сторіборди та промти", "Промти, shot list, план сцен і артдирекшн для продакшну."],
        ["🎙️", "Озвучка та звук", "План озвучки, субтитри, музика, ефекти й фінальне полірування."],
        ["🌌", "Візуальні концепти", "Креативні напрями, мудборди та cinematic style system під вашу ідею."]
      ]
    },
    packages: {
      eyebrow: "Пакети",
      title: "Зрозумілі стартові варіанти для вашого AI-відео.",
      select: "Обрати пакет",
      items: {
        basic: { name: "Basic", subtitle: "Short AI Clip", features: ["15-30 секунд AI-анімації", "1 сцена", "1-2 персонажі", "Базовий монтаж", "Музика / звукові ефекти", "Створення промтів", "2 правки", "Термін: 2 дні"] },
        standard: { name: "Standard", subtitle: "Animated Story Video", features: ["До 90 секунд AI-анімації", "До 5 сцен", "До 4-6 персонажів", "Озвучка", "Музика та звукові ефекти", "Субтитри", "Відполірований монтаж", "3 правки", "Термін: 5 днів"] },
        premium: { name: "Premium", subtitle: "Full AI Animated Story", features: ["До 3 хвилин AI animated story", "До 10 сцен", "До 8-10 персонажів", "Адаптація сценарію", "Планування сцен", "Озвучка", "Музика та саунд-дизайн", "Субтитри", "Фінальний монтаж", "5 правок", "Термін: 7 днів"] }
      }
    },
    addons: {
      eyebrow: "Додаткові послуги",
      title: "Підсиліть продакшн, якщо історії потрібно більше.",
      labels: {
        extra30: "Додаткові 30 секунд", extra60: "Додаткові 60 секунд", character: "Додатковий персонаж", scene: "Додаткова сцена", script: "Написання сценарію", storyboard: "Сторіборд / shot list", voiceover: "Професійна озвучка", subtitles: "Субтитри", fourK: "4K-версія", fast: "Швидка доставка", rights: "Комерційні права", revision: "Додаткова правка"
      }
    },
    custom: { eyebrow: "Індивідуальний проєкт", title: "Потрібно щось унікальне?", text: "Розкажіть ідею, і я створю індивідуальний AI production plan для вашого проєкту.", button: "Обговорити проєкт" },
    portfolio: {
      eyebrow: "Портфоліо", title: "Концепти превʼю для майбутніх реальних робіт.", note: "Реальні роботи можна додати сюди пізніше.", tag: "Video preview",
      items: [
        ["AI Wedding Story", "Ніжна cinematic-історія з романтичними сценами та кастомними персонажами."],
        ["3D Character Trailer", "Яскраве представлення персонажа з динамікою трейлера та преміальним ритмом."],
        ["Product Commercial", "Енергійний продуктовий ролик із глянцевими візуалами для соцмереж."],
        ["Cartoon Music Video", "Кольоровий анімаційний світ під настрій і ритм треку."],
        ["Social Media Reel", "Швидкий вертикальний креатив для hook, retention і впізнаваності."],
        ["Cinematic Love Story", "Емоційний короткий фільм з озвучкою, музикою та візуальним сторітелінгом."]
      ]
    },
    process: {
      eyebrow: "Як це працює", title: "Чіткий процес від сирої ідеї до відполірованого відео.",
      steps: [
        ["Ви надсилаєте ідею", "Опишіть історію, ціль, референси, аудиторію та бажаний стиль."],
        ["Я створюю концепт, промти й візуальний напрям", "Формую сцени, персонажів, тон, промти та production plan."],
        ["Я генерую та монтую відео", "Візуали, озвучка, музика, субтитри й монтаж складаються в цілісний ролик."],
        ["Ви отримуєте фінальне відео", "Готовий файл для публікації, презентації, реклами або подарунка."]
      ]
    },
    faq: {
      eyebrow: "FAQ", title: "Відповіді перед стартом роботи.",
      items: [
        ["Що потрібно від мене для старту?", "Коротка ідея, ціль, бажаний стиль, референси, якщо є, дедлайн і потрібний формат."],
        ["Чи можна створити персонажів за референсами?", "Так. Референси допомагають визначити образ, настрій і деталі, а фінальний результат лишається оригінальним AI-візуалом."],
        ["Чи можна зробити відео моєю мовою?", "Так. Проєкт може включати озвучку, субтитри й текст на екрані різними мовами."],
        ["Анімація повністю кастомна?", "Концепт, промти, сцени, монтаж і напрям створюються під проєкт. Точний результат залежить від можливостей AI-генерації та продакшну."],
        ["Чи можна замовити довше відео?", "Так. Довгі формати можна оформити як custom project або розширити за допомогою add-ons."],
        ["Ви надаєте комерційні права?", "Комерційне використання можна додати до проєкту. Точні умови підтверджуються перед виробництвом."],
        ["Чи можна створити контент для TikTok, Instagram, YouTube?", "Так. Я можу створити вертикальні reels, shorts, рекламні креативи та версії під платформи."]
      ]
    },
    form: {
      name: "Імʼя", email: "Email", messenger: "Telegram / WhatsApp", projectLanguage: "Мова проєкту", projectType: "Тип проєкту", package: "Оберіть пакет", addons: "Додаткові послуги", idea: "Ідея / опис проєкту", references: "Посилання на референси", deadline: "Дедлайн", budget: "Бюджет", total: "Попередня сума", confirm: "Я розумію, що фінальна ціна може змінитися після обговорення проєкту", submit: "Надіслати заявку",
      required: "Будь ласка, заповніть обовʼязкові поля та підтвердьте примітку про ціну.", sending: "Надсилаю заявку...", tokenMissing: "Telegram Bot Token або Chat ID не заповнені. Додайте їх у script.js перед відправкою заявок.", error: "Заявку не надіслано. Перевірте налаштування Telegram і спробуйте ще раз.", networkError: "Заявку не надіслано. Браузер не зміг підключитися до Telegram API. Перевірте інтернет, токен і обмеження хостингу.", success: "Заявку успішно надіслано. Дякую!",
      projectTypes: ["AI-анімаційне відео", "3D cartoon story", "Реклама / креатив", "Контент для соцмереж", "Музичне відео", "Wedding / love story", "Індивідуальний проєкт"],
      packages: { basic: "Basic — Short AI Clip", standard: "Standard — Animated Story Video", premium: "Premium — Full AI Animated Story", custom: "Індивідуальний проєкт" }
    },
    footer: { tagline: "Cinematic AI-анімація від ідеї до фінального відео.", services: "Послуги", packages: "Пакети", contact: "Контакти", rights: "Усі права захищені." }
  }
};

let currentLang = localStorage.getItem("aiCreatorLang") || "en";

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function t(path) {
  return path.split(".").reduce((value, key) => value?.[key], translations[currentLang]) || path;
}

function money(value) {
  return `$${value}`;
}

function renderStaticTranslations() {
  $$("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.documentElement.lang = currentLang === "ua" ? "uk" : currentLang;
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
  const data = translations[currentLang].packages.items;
  $("#packagesGrid").innerHTML = Object.entries(data).map(([id, item]) => `
    <article class="package-card ${id === "standard" ? "featured" : ""}">
      <h3>${item.name}</h3>
      <p>${item.subtitle}</p>
      <div class="price">${money(packagePrices[id])}</div>
      <ul>${item.features.map((feature) => `<li>${feature}</li>`).join("")}</ul>
      <button class="btn btn-primary" type="button" data-select-package="${id}">${translations[currentLang].packages.select}</button>
    </article>
  `).join("");
}

function renderAddons() {
  const labels = translations[currentLang].addons.labels;
  $("#addonsGrid").innerHTML = addons.map((addon) => `
    <article class="addon-card">
      <p>${labels[addon.id]}</p>
      <strong class="addon-pill">${money(addon.price)}</strong>
    </article>
  `).join("");

  $("#formAddons").innerHTML = addons.map((addon) => `
    <label class="check-row">
      <input type="checkbox" name="addons" value="${addon.id}" data-price="${addon.price}">
      <span>${labels[addon.id]} — ${money(addon.price)}</span>
    </label>
  `).join("");
}

function renderPortfolio() {
  const gradients = [
    "radial-gradient(circle at 24% 22%, #ff2dc8, transparent 30%), radial-gradient(circle at 80% 34%, #b7ff2a, transparent 28%), linear-gradient(135deg, #27113f, #0c1028)",
    "radial-gradient(circle at 70% 20%, #18b7ff, transparent 33%), radial-gradient(circle at 22% 78%, #ff2dc8, transparent 34%), linear-gradient(135deg, #12123a, #06070d)",
    "radial-gradient(circle at 50% 26%, #b7ff2a, transparent 30%), radial-gradient(circle at 70% 82%, #8f4dff, transparent 34%), linear-gradient(135deg, #101010, #18253f)",
    "radial-gradient(circle at 24% 26%, #ffb82e, transparent 31%), radial-gradient(circle at 76% 66%, #18b7ff, transparent 34%), linear-gradient(135deg, #260820, #111735)",
    "radial-gradient(circle at 30% 30%, #18b7ff, transparent 30%), radial-gradient(circle at 80% 70%, #b7ff2a, transparent 34%), linear-gradient(135deg, #071020, #260c3f)",
    "radial-gradient(circle at 30% 70%, #ff2dc8, transparent 30%), radial-gradient(circle at 75% 24%, #8f4dff, transparent 34%), linear-gradient(135deg, #160b24, #06121a)"
  ];

  $("#portfolioGrid").innerHTML = translations[currentLang].portfolio.items.map(([title, text], index) => `
    <article class="portfolio-card" style="--art: ${gradients[index]}">
      <div class="play-dot">▶</div>
      <span>${translations[currentLang].portfolio.tag}</span>
      <h3>${title}</h3>
      <p>${text}</p>
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
  const typeSelect = $("#projectType");
  const packageSelect = $("#packageSelect");
  const selectedType = typeSelect.value;
  const selectedPackage = packageSelect.value || "basic";

  typeSelect.innerHTML = translations[currentLang].form.projectTypes
    .map((type) => `<option value="${type}">${type}</option>`)
    .join("");

  packageSelect.innerHTML = Object.entries(translations[currentLang].form.packages)
    .map(([id, label]) => `<option value="${id}">${label}</option>`)
    .join("");

  if ([...typeSelect.options].some((option) => option.value === selectedType)) {
    typeSelect.value = selectedType;
  }
  packageSelect.value = selectedPackage;
}

function renderAll() {
  renderStaticTranslations();
  renderServices();
  renderPackages();
  renderAddons();
  renderPortfolio();
  renderProcess();
  renderFaq();
  renderSelects();
  updateTotal();
  $$(".lang-btn").forEach((button) => button.classList.toggle("active", button.dataset.lang === currentLang));
}

function updateTotal() {
  const packageId = $("#packageSelect")?.value || "basic";
  const packageTotal = packagePrices[packageId] || 0;
  const addonsTotal = $$("input[name='addons']:checked").reduce((sum, checkbox) => sum + Number(checkbox.dataset.price), 0);
  $("#totalPrice").textContent = money(packageTotal + addonsTotal);
}

function selectedAddonLabels() {
  const labels = translations[currentLang].addons.labels;
  return $$("input[name='addons']:checked").map((checkbox) => `${labels[checkbox.value]} — ${money(Number(checkbox.dataset.price))}`);
}

function buildTelegramMessage(form) {
  const data = new FormData(form);
  const selectedPackageId = data.get("package");
  const selectedPackageLabel = translations[currentLang].form.packages[selectedPackageId];
  const total = $("#totalPrice").textContent;
  const addonText = selectedAddonLabels().join("\n") || "None";

  return [
    "New AI Project Request",
    "",
    `Name: ${data.get("name")}`,
    `Email: ${data.get("email")}`,
    `Telegram / WhatsApp: ${data.get("messenger")}`,
    `Language: ${data.get("projectLanguage")}`,
    `Project type: ${data.get("projectType")}`,
    `Selected package: ${selectedPackageLabel}`,
    `Add-ons:\n${addonText}`,
    `Project idea: ${data.get("idea")}`,
    `References: ${data.get("references") || "Not provided"}`,
    `Deadline: ${data.get("deadline") || "Not provided"}`,
    `Budget: ${data.get("budget") || "Not provided"}`,
    `Estimated total: ${total}`,
    `Page language: ${currentLang.toUpperCase()}`
  ].join("\n");
}

function setStatus(message, type = "") {
  const status = $("#formStatus");
  status.textContent = message;
  status.className = `form-status ${type}`.trim();
}

async function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;

  if (!form.checkValidity()) {
    form.reportValidity();
    setStatus(translations[currentLang].form.required, "error");
    return;
  }

  if (
    TELEGRAM_BOT_TOKEN === "PASTE_YOUR_BOT_TOKEN_HERE" ||
    TELEGRAM_CHAT_ID === "PASTE_YOUR_CHAT_ID_HERE" ||
    !TELEGRAM_BOT_TOKEN ||
    !TELEGRAM_CHAT_ID
  ) {
    console.warn("Telegram Bot Token or Chat ID is missing. Add values in script.js.");
    setStatus(translations[currentLang].form.tokenMissing, "error");
    return;
  }

  setStatus(translations[currentLang].form.sending);

  try {
    const body = new URLSearchParams({
      chat_id: TELEGRAM_CHAT_ID,
      text: buildTelegramMessage(form)
    });

    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      body
    });
    const result = await response.json().catch(() => null);

    if (!response.ok) {
      const telegramMessage = result?.description || `Telegram API error: ${response.status}`;
      throw new Error(telegramMessage);
    }

    form.reset();
    $("#packageSelect").value = "basic";
    updateTotal();
    setStatus(translations[currentLang].form.success, "success");
  } catch (error) {
    console.error(error);
    const message = error instanceof TypeError
      ? translations[currentLang].form.networkError
      : `${translations[currentLang].form.error} ${error.message}`;
    setStatus(message, "error");
  }
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
    const customButton = event.target.closest("[data-action='custom-project']");
    const faqButton = event.target.closest(".faq-question");

    if (packageButton) {
      $("#packageSelect").value = packageButton.dataset.selectPackage;
      updateTotal();
      $("#order").scrollIntoView({ behavior: "smooth" });
    }

    if (customButton) {
      $("#packageSelect").value = "custom";
      const customType = translations[currentLang].form.projectTypes.at(-1);
      $("#projectType").value = customType;
      updateTotal();
      $("#order").scrollIntoView({ behavior: "smooth" });
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
      localStorage.setItem("aiCreatorLang", currentLang);
      renderAll();
    });
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

document.addEventListener("DOMContentLoaded", () => {
  $("#year").textContent = new Date().getFullYear();
  renderAll();
  setupEvents();
  setupRevealAnimations();
});
