const contactEmail = "763525586@qq.com";

const translations = {
  zh: {
    navPortfolio: "作品集",
    navBooking: "预约拍摄",
    navAbout: "关于",
    tocPortfolio: "作品集",
    tocBooking: "预约",
    tocMobilePortrait: "手机人像",
    tocMobileNature: "手机自然",
    tocCameraPortrait: "相机人像",
    tocCameraNature: "相机自然",
    tocCameraTravel: "相机旅游",
    heroEyebrow: "Portrait / Nature / Travel",
    heroCopy: "以安静、真实、有呼吸感的影像，记录人物、自然和旅途中的光。",
    heroPortfolio: "作品集",
    heroBooking: "预约拍摄",
    metricCollections: "精选作品分类",
    metricLanguages: "语言版本",
    metricReply: "预约信息回复",
    portfolioEyebrow: "Selected Portfolio",
    portfolioTitle: "作品集",
    portfolioCopy: "按照拍摄方式与主题整理，便于快速浏览不同气质的作品。",
    mobileEyebrow: "Mobile",
    mobileTitle: "手机摄影",
    cameraEyebrow: "Camera",
    cameraTitle: "相机摄影",
    aboutTitle: "关于我",
    aboutCopy: "我关注自然光、情绪和现场感，希望照片保留真实的温度。可预约个人写真、旅行记录、自然主题拍摄，也可以根据你的想法定制拍摄内容。",
    bookingEyebrow: "Book a Session",
    bookingTitle: "预约拍摄",
    bookingCopy: "填写你的拍摄需求，提交后会自动整理成邮件，方便我尽快确认档期与方案。",
    contactKicker: "联系方式",
    formName: "姓名",
    formContact: "联系方式",
    formDate: "预约拍摄日期",
    formContent: "拍摄内容",
    formSubmit: "发送预约信息",
    formNote: "提交会打开你的邮件应用，并不会在网页上保存个人信息。",
    mailSubject: "摄影预约咨询",
    mailBodyTitle: "摄影预约信息",
    mobilePortrait: "人像",
    mobileNature: "自然",
    cameraPortrait: "人像",
    cameraNature: "自然",
    cameraTravel: "旅游",
  },
  en: {
    navPortfolio: "Portfolio",
    navBooking: "Book",
    navAbout: "About",
    tocPortfolio: "Portfolio",
    tocBooking: "Book",
    tocMobilePortrait: "Mobile Portrait",
    tocMobileNature: "Mobile Nature",
    tocCameraPortrait: "Camera Portrait",
    tocCameraNature: "Camera Nature",
    tocCameraTravel: "Camera Travel",
    heroEyebrow: "Portrait / Nature / Travel",
    heroCopy: "Quiet, honest images with room to breathe, capturing people, nature, and light on the road.",
    heroPortfolio: "Portfolio",
    heroBooking: "Book a Session",
    metricCollections: "Curated categories",
    metricLanguages: "Languages",
    metricReply: "Booking reply",
    portfolioEyebrow: "Selected Portfolio",
    portfolioTitle: "Portfolio",
    portfolioCopy: "Organized by capture style and subject so different moods are easy to browse.",
    mobileEyebrow: "Mobile",
    mobileTitle: "Mobile Photography",
    cameraEyebrow: "Camera",
    cameraTitle: "Camera Photography",
    aboutTitle: "About Me",
    aboutCopy: "I focus on natural light, emotion, and a sense of place. Portraits, travel records, nature sessions, and custom ideas are all welcome.",
    bookingEyebrow: "Book a Session",
    bookingTitle: "Book a Session",
    bookingCopy: "Send your shoot request as a prepared email so I can confirm availability and direction quickly.",
    contactKicker: "Contact",
    formName: "Name",
    formContact: "Contact",
    formDate: "Preferred date",
    formContent: "Shoot details",
    formSubmit: "Send Request",
    formNote: "Submitting opens your mail app. Personal information is not stored on this website.",
    mailSubject: "Photography booking request",
    mailBodyTitle: "Photography booking request",
    mobilePortrait: "Portrait",
    mobileNature: "Nature",
    cameraPortrait: "Portrait",
    cameraNature: "Nature",
    cameraTravel: "Travel",
  },
  ja: {
    navPortfolio: "作品集",
    navBooking: "撮影予約",
    navAbout: "紹介",
    tocPortfolio: "作品集",
    tocBooking: "予約",
    tocMobilePortrait: "スマホ人物",
    tocMobileNature: "スマホ自然",
    tocCameraPortrait: "カメラ人物",
    tocCameraNature: "カメラ自然",
    tocCameraTravel: "カメラ旅",
    heroEyebrow: "Portrait / Nature / Travel",
    heroCopy: "静かで自然な空気を大切にしながら、人物、自然、旅先の光を記録します。",
    heroPortfolio: "作品集",
    heroBooking: "撮影予約",
    metricCollections: "作品カテゴリー",
    metricLanguages: "言語",
    metricReply: "予約返信",
    portfolioEyebrow: "Selected Portfolio",
    portfolioTitle: "作品集",
    portfolioCopy: "撮影方法とテーマ別に整理し、作品の雰囲気を見つけやすくしています。",
    mobileEyebrow: "Mobile",
    mobileTitle: "スマホ写真",
    cameraEyebrow: "Camera",
    cameraTitle: "カメラ写真",
    aboutTitle: "自己紹介",
    aboutCopy: "自然光、感情、その場の空気を大切にしています。ポートレート、旅の記録、自然テーマの撮影、オリジナルの相談も可能です。",
    bookingEyebrow: "Book a Session",
    bookingTitle: "撮影予約",
    bookingCopy: "撮影内容を入力するとメールとして整理され、日程や内容を確認しやすくなります。",
    contactKicker: "連絡先",
    formName: "お名前",
    formContact: "連絡先",
    formDate: "撮影希望日",
    formContent: "撮影内容",
    formSubmit: "予約内容を送信",
    formNote: "送信するとメールアプリが開きます。このサイトには個人情報を保存しません。",
    mailSubject: "撮影予約の相談",
    mailBodyTitle: "撮影予約情報",
    mobilePortrait: "人物",
    mobileNature: "自然",
    cameraPortrait: "人物",
    cameraNature: "自然",
    cameraTravel: "旅",
  },
};

const collections = [
  {
    mount: "#mobile-gallery",
    items: [
      {
        id: "mobile-portrait",
        labelKey: "mobilePortrait",
        title: { zh: "随身人像", en: "Pocket Portraits", ja: "日常ポートレート" },
        meta: { zh: "手机摄影 / 人像", en: "Mobile / Portrait", ja: "スマホ写真 / 人物" },
        src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1300&q=82",
        alt: "人物站在窗边的柔光人像照片",
      },
      {
        id: "mobile-nature",
        labelKey: "mobileNature",
        title: { zh: "近处的叶影", en: "Nearby Leaves", ja: "近くの葉影" },
        meta: { zh: "手机摄影 / 自然", en: "Mobile / Nature", ja: "スマホ写真 / 自然" },
        src: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1300&q=82",
        alt: "阳光下的绿色植物特写",
      },
    ],
  },
  {
    mount: "#camera-gallery",
    items: [
      {
        id: "camera-portrait",
        labelKey: "cameraPortrait",
        title: { zh: "窗边光线", en: "Window Light", ja: "窓辺の光" },
        meta: { zh: "相机摄影 / 人像", en: "Camera / Portrait", ja: "カメラ写真 / 人物" },
        src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1300&q=82",
        alt: "自然光下的人像照片",
      },
      {
        id: "camera-nature",
        labelKey: "cameraNature",
        title: { zh: "风经过山谷", en: "Valley Wind", ja: "谷を渡る風" },
        meta: { zh: "相机摄影 / 自然", en: "Camera / Nature", ja: "カメラ写真 / 自然" },
        src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=82",
        alt: "山谷、湖泊和云层的自然风景照片",
      },
      {
        id: "camera-travel",
        labelKey: "cameraTravel",
        title: { zh: "海岸线", en: "Coastline", ja: "海岸線" },
        meta: { zh: "相机摄影 / 旅游", en: "Camera / Travel", ja: "カメラ写真 / 旅" },
        src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1300&q=82",
        alt: "蓝色海岸线和沙滩",
      },
    ],
  },
];

const allPhotos = collections.flatMap((collection) => collection.items);
const languageButtons = document.querySelectorAll(".language-button");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxTitle = document.querySelector("#lightbox-title");
const lightboxMeta = document.querySelector("#lightbox-meta");
const lightboxClose = document.querySelector(".lightbox-close");
const bookingForm = document.querySelector("#booking-form");
let currentLanguage = "zh";

function t(key) {
  return translations[currentLanguage][key] || translations.zh[key] || key;
}

function localized(value) {
  if (typeof value === "string") return value;
  return value[currentLanguage] || value.zh;
}

function renderCollections() {
  collections.forEach((collection) => {
    const mount = document.querySelector(collection.mount);
    mount.innerHTML = collection.items
      .map(
        (photo) => `
          <article class="collection-card" id="${photo.id}">
            <button class="photo-card" type="button" data-photo-id="${photo.id}">
              <img src="${photo.src}" alt="${photo.alt}" loading="lazy">
              <span class="photo-info">
                <span class="photo-type">${t(photo.labelKey)}</span>
                <strong>${localized(photo.title)}</strong>
                <p>${localized(photo.meta)}</p>
              </span>
            </button>
          </article>
        `,
      )
      .join("");
  });
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
  renderCollections();
}

function openLightbox(photoId) {
  const photo = allPhotos.find((item) => item.id === photoId);
  if (!photo) return;

  lightboxImage.src = photo.src;
  lightboxImage.alt = photo.alt;
  lightboxTitle.textContent = localized(photo.title);
  lightboxMeta.textContent = localized(photo.meta);
  lightbox.showModal();
}

function buildMailto(formData) {
  const lines = [
    t("mailBodyTitle"),
    "",
    `${t("formName")}: ${formData.get("name")}`,
    `${t("formContact")}: ${formData.get("contact")}`,
    `${t("formDate")}: ${formData.get("date")}`,
    `${t("formContent")}:`,
    formData.get("content"),
  ];

  return `mailto:${contactEmail}?subject=${encodeURIComponent(t("mailSubject"))}&body=${encodeURIComponent(lines.join("\n"))}`;
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

document.addEventListener("click", (event) => {
  const card = event.target.closest(".photo-card");
  if (card) {
    openLightbox(card.dataset.photoId);
  }
});

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!bookingForm.reportValidity()) return;

  window.location.href = buildMailto(new FormData(bookingForm));
});

lightboxClose.addEventListener("click", () => lightbox.close());

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.close();
  }
});

applyLanguage(currentLanguage);
