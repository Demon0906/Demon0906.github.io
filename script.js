const translations = {
  zh: {
    navPortfolio: "作品集",
    navBooking: "预约拍摄",
    navAbout: "关于",
    navModels: "认识模特",
    aboutMenuMe: "关于我",
    aboutMenuPricing: "价格咨询",
    aboutMenuBusiness: "商务合作",
    heroEyebrow: "Portrait / Nature / Travel / Journal",
    heroCopy: "以摄影项目的方式整理人像、自然、旅行和摄影故事，让每一组作品都成为独立的影像档案。",
    heroPortfolio: "浏览作品集",
    heroBooking: "预约拍摄",
    privacyNote: "本网页所有照片均由作者本人拍摄，人像照片已经模特本人同意，未经许可不得下载与转发，请尊重影像隐私与版权。",
    privacyToast: "作品仅供在线预览，请勿保存或截图传播。",
    openProject: "浏览作品",
    projectLabel: "摄影集",
    locationLabel: "地点",
    dateLabel: "时间",
    portraitTitle: "人像摄影",
    portraitIntro: "关于人物、情绪、光线和空间关系的摄影项目。",
    natureTitle: "自然风光",
    natureIntro: "记录山林、海岸、植物与天气变化中的安静时刻。",
    travelTitle: "旅游记忆",
    travelIntro: "把一次行走整理成影像日记：地点、路线与偶遇。",
    storiesTitle: "摄影故事",
    storiesIntro: "摄影主题、技巧分析和拍摄现场笔记。",
    aboutTitle: "关于我",
    aboutCopy: "我关注自然光、情绪和现场感，希望照片保留真实的温度。可预约个人写真、旅行记录、自然主题拍摄，也可以根据你的想法定制拍摄内容。",
    aboutDetailCta: "查看详细介绍",
    contactEyebrow: "Contact",
    contactTitle: "联系方式",
    contactEmail: "邮箱",
    contactPhone: "联系电话",
    contactSocial: "社交媒体",
    wechatSame: "微信同",
  },
  en: {
    navPortfolio: "Portfolio",
    navBooking: "Book",
    navAbout: "About",
    navModels: "Models",
    aboutMenuMe: "About Me",
    aboutMenuPricing: "Pricing",
    aboutMenuBusiness: "Commercial Work",
    heroEyebrow: "Portrait / Nature / Travel / Journal",
    heroCopy: "Portraits, landscapes, travel memories, and photography stories are organized as independent visual projects.",
    heroPortfolio: "View Portfolio",
    heroBooking: "Book a Session",
    privacyNote: "All photos on this website were taken by the author. Portrait images are published with model consent. Downloading or reposting without permission is prohibited. Please respect image privacy and copyright.",
    privacyToast: "Images are for online preview only. Please do not save or redistribute screenshots.",
    openProject: "View Series",
    projectLabel: "Project",
    locationLabel: "Place",
    dateLabel: "Date",
    portraitTitle: "Portrait Photography",
    portraitIntro: "Projects about people, emotion, light, and the relationship between body and space.",
    natureTitle: "Nature & Landscape",
    natureIntro: "Quiet moments in mountains, forests, coasts, plants, and changing weather.",
    travelTitle: "Travel Memories",
    travelIntro: "A visual diary of places, routes, and unexpected encounters.",
    storiesTitle: "Photo Stories",
    storiesIntro: "Photography themes, technique notes, and field journals.",
    aboutTitle: "About Me",
    aboutCopy: "I focus on natural light, emotion, and a sense of place. Portraits, travel records, nature sessions, and custom ideas are all welcome.",
    aboutDetailCta: "Read Full Profile",
    contactEyebrow: "Contact",
    contactTitle: "Contact",
    contactEmail: "Email",
    contactPhone: "Phone",
    contactSocial: "Social Media",
    wechatSame: "WeChat available",
  },
  ja: {
    navPortfolio: "作品集",
    navBooking: "撮影予約",
    navAbout: "紹介",
    navModels: "モデル",
    aboutMenuMe: "自己紹介",
    aboutMenuPricing: "料金相談",
    aboutMenuBusiness: "商業撮影",
    heroEyebrow: "Portrait / Nature / Travel / Journal",
    heroCopy: "人物、自然、旅の記憶、写真ストーリーを独立したプロジェクトとして整理しています。",
    heroPortfolio: "作品集を見る",
    heroBooking: "撮影予約",
    privacyNote: "本サイトの写真はすべて作者本人が撮影したものです。人物写真はモデル本人の同意を得て掲載しています。許可なく保存・転載しないでください。写真のプライバシーと著作権を尊重してください。",
    privacyToast: "作品はオンラインプレビュー専用です。保存やスクリーンショットの再配布はご遠慮ください。",
    openProject: "作品を見る",
    projectLabel: "写真集",
    locationLabel: "場所",
    dateLabel: "日付",
    portraitTitle: "人物写真",
    portraitIntro: "人物、感情、光、空間との関係を扱う写真プロジェクトです。",
    natureTitle: "自然風景",
    natureIntro: "山、森、海岸、植物、天候の変化の中にある静かな瞬間を記録します。",
    travelTitle: "旅の記憶",
    travelIntro: "場所、ルート、偶然の出会いを視覚的な日記として残します。",
    storiesTitle: "写真ストーリー",
    storiesIntro: "撮影テーマ、技術分析、現場での記録をまとめます。",
    aboutTitle: "自己紹介",
    aboutCopy: "自然光、感情、その場の空気を大切にしています。ポートレート、旅の記録、自然テーマの撮影、オリジナルの相談も可能です。",
    aboutDetailCta: "詳しい紹介を見る",
    contactEyebrow: "Contact",
    contactTitle: "連絡先",
    contactEmail: "メール",
    contactPhone: "電話",
    contactSocial: "SNS",
    wechatSame: "WeChat可",
  },
};

const portfolioSections = [
  {
    id: "portrait",
    titleKey: "portraitTitle",
    introKey: "portraitIntro",
    projects: [
      {
        id: "portrait-window-light",
        title: { zh: "窗边光线", en: "Window Light", ja: "窓辺の光" },
        date: "2026.03",
        place: { zh: "东京 / 室内自然光", en: "Tokyo / Window light", ja: "東京 / 自然光" },
        summary: { zh: "一组关于柔光、人像轮廓和安静情绪的拍摄。", en: "Soft light, quiet emotion, and portrait silhouettes.", ja: "柔らかい光、静かな感情、人物の輪郭を扱う撮影。" },
        cover: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1400&q=82",
        photos: [
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1200&q=82",
          "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=82",
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=82",
        ],
      },
      {
        id: "portrait-evening-corner",
        title: { zh: "傍晚街角", en: "Evening Corner", ja: "夕方の街角" },
        date: "2026.01",
        place: { zh: "大阪 / 城市人像", en: "Osaka / City portrait", ja: "大阪 / 街ポートレート" },
        summary: { zh: "利用街角、玻璃反射和傍晚余光完成的人像项目。", en: "Street corners, glass reflections, and evening light.", ja: "街角、ガラスの反射、夕方の光を使ったポートレート。" },
        cover: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=1400&q=82",
        photos: [
          "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=1200&q=82",
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=82",
          "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&w=1200&q=82",
        ],
      },
    ],
  },
  {
    id: "nature",
    titleKey: "natureTitle",
    introKey: "natureIntro",
    projects: [
      {
        id: "nature-valley-wind",
        title: { zh: "风经过山谷", en: "Valley Wind", ja: "谷を渡る風" },
        date: "2025.11",
        place: { zh: "长野 / 山谷", en: "Nagano / Valley", ja: "長野 / 渓谷" },
        summary: { zh: "山谷、湖泊与云层之间的自然风景记录。", en: "A landscape record of valleys, lakes, and clouds.", ja: "渓谷、湖、雲の間にある自然風景の記録。" },
        cover: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=82",
        photos: [
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=82",
          "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1200&q=82",
          "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=82",
        ],
      },
      {
        id: "nature-after-rain",
        title: { zh: "雨后森林", en: "After Rain", ja: "雨上がりの森" },
        date: "2025.09",
        place: { zh: "箱根 / 森林", en: "Hakone / Forest", ja: "箱根 / 森" },
        summary: { zh: "在湿润空气里观察植物、树干和细碎光线。", en: "Plants, tree trunks, and quiet light in humid air.", ja: "湿った空気の中で植物、木の幹、細かな光を観察する。" },
        cover: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1400&q=82",
        photos: [
          "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=82",
          "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1200&q=82",
          "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=1200&q=82",
        ],
      },
    ],
  },
  {
    id: "travel",
    titleKey: "travelTitle",
    introKey: "travelIntro",
    projects: [
      {
        id: "travel-coastline",
        title: { zh: "海岸线", en: "Coastline", ja: "海岸線" },
        date: "2025.08",
        place: { zh: "冲绳 / 海边", en: "Okinawa / Coast", ja: "沖縄 / 海辺" },
        summary: { zh: "以海边颜色、道路和风为线索整理的旅行记忆。", en: "A travel memory shaped by coastal color, roads, and wind.", ja: "海辺の色、道、風を手がかりにした旅の記憶。" },
        cover: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=82",
        photos: [
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=82",
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=82",
          "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=82",
        ],
      },
      {
        id: "travel-night-walk",
        title: { zh: "夜行城市", en: "Night Walk", ja: "夜の街歩き" },
        date: "2025.06",
        place: { zh: "东京 / 街道", en: "Tokyo / Streets", ja: "東京 / 街" },
        summary: { zh: "把灯牌、雨水、人群和归途整理成夜晚城市项目。", en: "Signs, rain, crowds, and the route home at night.", ja: "看板、雨、人混み、帰り道を夜の街としてまとめる。" },
        cover: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1400&q=82",
        photos: [
          "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=82",
          "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?auto=format&fit=crop&w=1200&q=82",
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=82",
        ],
      },
    ],
  },
  {
    id: "story",
    titleKey: "storiesTitle",
    introKey: "storiesIntro",
    projects: [
      {
        id: "story-negative-space",
        title: { zh: "人像中的留白", en: "Negative Space in Portraits", ja: "ポートレートの余白" },
        date: "Essay",
        place: { zh: "摄影技巧 / 构图", en: "Technique / Composition", ja: "技術 / 構図" },
        summary: { zh: "关于人像摄影中留白、视线和环境关系的短文。", en: "A short essay on space, gaze, and environment in portrait photography.", ja: "ポートレートにおける余白、視線、環境の関係について。" },
        cover: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=82",
        story: {
          zh: "人像不一定要把画面填满。适当的留白能让观看者感受到人物所处的环境，也能给情绪留下空间。拍摄时可以先确定人物眼神方向，再把空白留在视线延伸的一侧。",
          en: "A portrait does not need to fill the frame. Negative space lets the viewer sense the environment and leaves room for emotion. Decide the gaze direction first, then keep space on the side where the gaze travels.",
          ja: "ポートレートは画面をすべて埋める必要はありません。余白は環境と感情を伝えるための空間になります。視線の方向を決め、その先に余白を置くと自然な構図になります。",
        },
        photos: [
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=82",
          "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=1200&q=82",
        ],
      },
      {
        id: "story-travel-rhythm",
        title: { zh: "旅行照片的节奏", en: "Rhythm in Travel Photos", ja: "旅写真のリズム" },
        date: "Essay",
        place: { zh: "摄影故事 / 旅行", en: "Story / Travel", ja: "ストーリー / 旅" },
        summary: { zh: "远景、中景和细节如何组成一次完整旅程。", en: "How wide shots, middle distance, and details form a journey.", ja: "遠景、中景、細部がどのように旅を構成するか。" },
        cover: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1400&q=82",
        story: {
          zh: "旅行摄影像是在做一本视觉日记。远景负责交代地点，中景记录人与空间的关系，细节则让记忆变得具体。把这三种照片交替排列，整组作品会更像一次真正走过的旅程。",
          en: "Travel photography works like a visual diary. Wide frames introduce place, middle distance shows people in space, and details make memory specific. Alternating these types gives a series the rhythm of a real journey.",
          ja: "旅写真は視覚的な日記に近いものです。遠景は場所を伝え、中景は人と空間の関係を記録し、細部は記憶を具体的にします。",
        },
        photos: [
          "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=82",
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=82",
        ],
      },
    ],
  },
];

const languageButtons = document.querySelectorAll(".language-button");
const portfolioMount = document.querySelector("#portfolio-groups");
const portfolioMenuToggle = document.querySelector("#portfolio-menu-toggle");
const portfolioMenu = document.querySelector("#portfolio-menu");
const aboutMenuToggle = document.querySelector("#about-menu-toggle");
const aboutMenu = document.querySelector("#about-menu");
const modelMenuToggle = document.querySelector("#model-menu-toggle");
const modelMenu = document.querySelector("#model-menu");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxTitle = document.querySelector("#lightbox-title");
const lightboxMeta = document.querySelector("#lightbox-meta");
const lightboxClose = document.querySelector(".lightbox-close");
const privacyToast = document.querySelector("#privacy-toast");
let currentLanguage = "zh";
let toastTimer;

function t(key) {
  return translations[currentLanguage][key] || translations.zh[key] || key;
}

function localized(value) {
  if (typeof value === "string") return value;
  return value[currentLanguage] || value.zh;
}

function escapeHtml(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

function getProject(sectionId, projectId) {
  return portfolioSections.find((section) => section.id === sectionId)?.projects.find((project) => project.id === projectId);
}

function renderProjectCard(section, project) {
  const coverImages = project.photos
    .map(
      (src, index) => `
        <img
          class="protected-media"
          src="${src}"
          alt="${escapeHtml(localized(project.title))}"
          loading="lazy"
          draggable="false"
          style="--photo-index: ${index}; --photo-count: ${project.photos.length};"
        >
      `,
    )
    .join("");
  return `
    <button class="project-card" type="button" data-section="${section.id}" data-project="${project.id}" id="${project.id}" aria-label="${escapeHtml(localized(project.title))}">
      <span class="project-cover-stack" aria-hidden="true">${coverImages}</span>
      <span class="project-card-copy">
        <em>${project.date} · ${localized(project.place)}</em>
        <strong>${localized(project.title)}</strong>
        <small>${localized(project.summary)}</small>
        <span class="project-open">${t("openProject")}</span>
      </span>
    </button>
  `;
}

function renderSection(section) {
  return `
    <section class="portfolio-group project-section" id="${section.id}-section" aria-labelledby="${section.id}-title">
      <div class="group-heading">
        <div>
          <p class="eyebrow">${t("projectLabel")}</p>
          <h3 id="${section.id}-title">${t(section.titleKey)}</h3>
        </div>
        <p>${t(section.introKey)}</p>
      </div>
      <div class="project-grid">
        ${section.projects.map((project) => renderProjectCard(section, project)).join("")}
      </div>
    </section>
  `;
}

function getAllProjectLinks() {
  return portfolioSections.flatMap((section) =>
    section.projects.map((project) => ({
      href: `#${project.id}`,
      section,
      project,
    })),
  );
}

function renderPortfolioNavigation() {
  const links = getAllProjectLinks()
    .map(
      ({ href, section, project }) => `
        <a href="${href}" data-section="${section.id}" data-project="${project.id}">
          <span>${t(section.titleKey)}</span>
          <strong>${localized(project.title)}</strong>
        </a>
      `,
    )
    .join("");
  portfolioMenu.innerHTML = links;
}

function renderPortfolio() {
  renderPortfolioNavigation();
  portfolioMount.innerHTML = portfolioSections.map(renderSection).join("");
}

function applyLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language === "zh" ? "zh-CN" : language === "ja" ? "ja" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === language);
  });
  renderPortfolio();
}

function openLightbox(sectionId, projectId, photoIndex) {
  const project = getProject(sectionId, projectId);
  const src = project?.photos[Number(photoIndex)];
  if (!project || !src) return;
  lightboxImage.src = src;
  lightboxImage.alt = localized(project.title);
  lightboxTitle.textContent = localized(project.title);
  lightboxMeta.textContent = `${project.date} / ${localized(project.place)}`;
  lightbox.showModal();
}

function showPrivacyToast() {
  privacyToast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => privacyToast.classList.remove("is-visible"), 2600);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

portfolioMenuToggle.addEventListener("click", () => {
  const isOpen = portfolioMenuToggle.getAttribute("aria-expanded") === "true";
  portfolioMenuToggle.setAttribute("aria-expanded", String(!isOpen));
  portfolioMenu.classList.toggle("is-open", !isOpen);
  aboutMenuToggle.setAttribute("aria-expanded", "false");
  aboutMenu.classList.remove("is-open");
  modelMenuToggle.setAttribute("aria-expanded", "false");
  modelMenu.classList.remove("is-open");
});

aboutMenuToggle.addEventListener("click", () => {
  const isOpen = aboutMenuToggle.getAttribute("aria-expanded") === "true";
  aboutMenuToggle.setAttribute("aria-expanded", String(!isOpen));
  aboutMenu.classList.toggle("is-open", !isOpen);
  portfolioMenuToggle.setAttribute("aria-expanded", "false");
  portfolioMenu.classList.remove("is-open");
  modelMenuToggle.setAttribute("aria-expanded", "false");
  modelMenu.classList.remove("is-open");
});

modelMenuToggle.addEventListener("click", () => {
  const isOpen = modelMenuToggle.getAttribute("aria-expanded") === "true";
  modelMenuToggle.setAttribute("aria-expanded", String(!isOpen));
  modelMenu.classList.toggle("is-open", !isOpen);
  portfolioMenuToggle.setAttribute("aria-expanded", "false");
  portfolioMenu.classList.remove("is-open");
  aboutMenuToggle.setAttribute("aria-expanded", "false");
  aboutMenu.classList.remove("is-open");
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".nav-menu")) {
    portfolioMenuToggle.setAttribute("aria-expanded", "false");
    portfolioMenu.classList.remove("is-open");
    aboutMenuToggle.setAttribute("aria-expanded", "false");
    aboutMenu.classList.remove("is-open");
    modelMenuToggle.setAttribute("aria-expanded", "false");
    modelMenu.classList.remove("is-open");
  }

  const aboutLink = event.target.closest("#about-menu a");
  if (aboutLink) {
    aboutMenuToggle.setAttribute("aria-expanded", "false");
    aboutMenu.classList.remove("is-open");
  }

  const modelLink = event.target.closest("#model-menu a");
  if (modelLink) {
    modelMenuToggle.setAttribute("aria-expanded", "false");
    modelMenu.classList.remove("is-open");
  }

  const portfolioLink = event.target.closest("#portfolio-menu a[data-section]");
  if (portfolioLink) {
    event.preventDefault();
    document.querySelector(portfolioLink.getAttribute("href"))?.scrollIntoView({ behavior: "smooth", block: "start" });
    portfolioMenuToggle.setAttribute("aria-expanded", "false");
    portfolioMenu.classList.remove("is-open");
    return;
  }

  const projectCard = event.target.closest(".project-card");
  if (projectCard) {
    openLightbox(projectCard.dataset.section, projectCard.dataset.project, 0);
    return;
  }
});

document.addEventListener("contextmenu", (event) => {
  if (event.target.closest(".protected-media, .project-card, .lightbox")) {
    event.preventDefault();
    showPrivacyToast();
  }
});

document.addEventListener("dragstart", (event) => {
  if (event.target.closest(".protected-media")) {
    event.preventDefault();
    showPrivacyToast();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "PrintScreen") showPrivacyToast();
});

lightboxClose.addEventListener("click", () => lightbox.close());

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.close();
});

applyLanguage(currentLanguage);
