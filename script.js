const translations = {
  zh: {
    navMobile: "手机摄影",
    navCamera: "相机摄影",
    navAbout: "关于",
    navContact: "联系",
    tocMobile: "手机",
    tocMobilePortrait: "手机人像",
    tocMobileNature: "手机自然",
    tocCamera: "相机",
    tocCameraPortrait: "相机人像",
    tocCameraNature: "相机自然",
    tocCameraTravel: "相机旅游",
    heroEyebrow: "Portfolio / 手机与相机",
    heroCopy: "把日常随身记录和相机创作整理成两个清晰的作品集。",
    heroMobile: "手机摄影",
    heroCamera: "相机摄影",
    metricCollections: "摄影作品集",
    metricCategories: "细分分类",
    metricLanguages: "语言版本",
    mobileEyebrow: "Mobile Photography",
    mobileTitle: "手机摄影",
    mobileCopy: "更轻、更快的日常观察，适合记录人物与自然光下的细节。",
    cameraEyebrow: "Camera Photography",
    cameraTitle: "相机摄影",
    cameraCopy: "更完整的创作系列，分为人像、自然与旅游三个方向。",
    aboutTitle: "关于我",
    aboutCopy: "这里可以写你的摄影风格、常驻城市、器材偏好、接拍范围或项目经历。页面已经按手机摄影与相机摄影分好结构，后续只需要替换照片与作品说明。",
    contactTitle: "联系与合作",
    mobilePortrait: "人像",
    mobileNature: "自然",
    cameraPortrait: "人像",
    cameraNature: "自然",
    cameraTravel: "旅游",
  },
  en: {
    navMobile: "Mobile",
    navCamera: "Camera",
    navAbout: "About",
    navContact: "Contact",
    tocMobile: "Mobile",
    tocMobilePortrait: "Mobile Portrait",
    tocMobileNature: "Mobile Nature",
    tocCamera: "Camera",
    tocCameraPortrait: "Camera Portrait",
    tocCameraNature: "Camera Nature",
    tocCameraTravel: "Camera Travel",
    heroEyebrow: "Portfolio / Mobile & Camera",
    heroCopy: "Two clear collections for everyday mobile moments and camera-based work.",
    heroMobile: "Mobile Work",
    heroCamera: "Camera Work",
    metricCollections: "Photo collections",
    metricCategories: "Subcategories",
    metricLanguages: "Languages",
    mobileEyebrow: "Mobile Photography",
    mobileTitle: "Mobile Photography",
    mobileCopy: "Lighter, faster observations for portraits and natural details in daily life.",
    cameraEyebrow: "Camera Photography",
    cameraTitle: "Camera Photography",
    cameraCopy: "A fuller creative archive organized into portrait, nature, and travel.",
    aboutTitle: "About Me",
    aboutCopy: "Use this area for your style, base city, gear, booking scope, or project history. The page is already structured around mobile and camera photography, so you can focus on replacing images and captions.",
    contactTitle: "Contact",
    mobilePortrait: "Portrait",
    mobileNature: "Nature",
    cameraPortrait: "Portrait",
    cameraNature: "Nature",
    cameraTravel: "Travel",
  },
  ja: {
    navMobile: "スマホ写真",
    navCamera: "カメラ写真",
    navAbout: "紹介",
    navContact: "連絡先",
    tocMobile: "スマホ",
    tocMobilePortrait: "スマホ人物",
    tocMobileNature: "スマホ自然",
    tocCamera: "カメラ",
    tocCameraPortrait: "カメラ人物",
    tocCameraNature: "カメラ自然",
    tocCameraTravel: "カメラ旅",
    heroEyebrow: "Portfolio / スマホとカメラ",
    heroCopy: "日常の記録とカメラ作品を、見やすい二つのコレクションに整理しました。",
    heroMobile: "スマホ写真",
    heroCamera: "カメラ写真",
    metricCollections: "写真コレクション",
    metricCategories: "カテゴリー",
    metricLanguages: "言語",
    mobileEyebrow: "Mobile Photography",
    mobileTitle: "スマホ写真",
    mobileCopy: "身軽で素早い日常の観察。人物や自然光の細部を記録します。",
    cameraEyebrow: "Camera Photography",
    cameraTitle: "カメラ写真",
    cameraCopy: "人物、自然、旅の三つに分けた、より完成度の高い作品群です。",
    aboutTitle: "自己紹介",
    aboutCopy: "ここには撮影スタイル、拠点、機材、撮影依頼の範囲、プロジェクト経歴などを書けます。ページはスマホ写真とカメラ写真に分かれているので、写真と説明を差し替えるだけで使えます。",
    contactTitle: "連絡先",
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
                <strong>${localized(photo.title)}</strong>
                <p>${localized(photo.meta)}</p>
              </span>
            </button>
            <div class="collection-label">
              <span>${t(photo.labelKey)}</span>
            </div>
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

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

document.addEventListener("click", (event) => {
  const card = event.target.closest(".photo-card");
  if (card) {
    openLightbox(card.dataset.photoId);
  }
});

lightboxClose.addEventListener("click", () => lightbox.close());

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.close();
  }
});

applyLanguage(currentLanguage);
