const localImage = (path) => encodeURI(path);

function photoInfoFromPath(path) {
  const filename = decodeURIComponent(path.split("/").pop() || "").replace(/\.[^.]+$/, "");
  const fields = {};
  filename
    .split(/[；;]/)
    .map((part) => part.trim())
    .filter(Boolean)
    .forEach((part) => {
      const [key, ...value] = part.split(/[：:]/);
      if (value.length) fields[key.trim()] = value.join(":").trim();
    });
  const hasInfo = Object.keys(fields).length > 0;
  const title = fields["模特"] || fields["主题"] || fields["拍摄地点"] || (hasInfo ? "影像记录" : "照片记录");
  const meta = [fields["拍摄时间"], fields["拍摄地点"]].filter(Boolean).join(" · ");
  const caption = hasInfo
    ? Object.entries(fields)
        .map(([key, value]) => `${key}: ${value}`)
        .join(" / ")
    : filename;
  return { title, meta, caption, fields };
}

const portraitCollectionList = [
  {
    id: "portrait-model-show",
    collection: "model-show",
    title: { zh: "模特展", en: "Model Exhibition", ja: "モデル展" },
    date: "Portrait",
    place: { zh: "人像摄影", en: "Portrait", ja: "人物写真" },
    summary: {
      zh: "从模特展文件夹中精选封面照片，进入后按每位模特查看完整项目。",
      en: "Selected covers from the model exhibition folder. Open to view each model project.",
      ja: "モデル展フォルダから選んだカバー写真。開くとモデル別に閲覧できます。",
    },
    href: "portrait.html?collection=model-show",
    photos: [
      "assets/photos/人像摄影/模特展/模特：Celia；拍摄时间：2026.3；拍摄地点：上海迪士尼.jpg",
      "assets/photos/人像摄影/模特展/模特：Mio；拍摄时间：2026.5；拍摄地点：日本 横滨.jpg",
      "assets/photos/人像摄影/模特展/模特：Nero；拍摄地点：东京上野；拍摄时间：2026.4.jpg",
      "assets/photos/人像摄影/模特展/模特：kakiloki；拍摄地点：日本 台场；拍摄时间：2026.5.JPG",
    ],
    groups: [
      {
        id: "model-show-kakiloki",
        title: "kakiloki",
        photos: [
          "assets/photos/人像摄影/模特展/kakiloki/模特：kakiloki；拍摄地点：日本 台场；拍摄时间：2026.5.JPG",
          "assets/photos/人像摄影/模特展/kakiloki/模特：kakiloki；拍摄时间：2026.5；拍摄地点：东京 台场.JPG",
          "assets/photos/人像摄影/模特展/kakiloki/模特：kaliloki；拍摄时间：2026.4；拍摄地点：日本 富士山.JPG",
        ],
      },
      {
        id: "model-show-mio",
        title: "Mio",
        photos: [
          "assets/photos/人像摄影/模特展/Mio/426d1ed20259edc0f02a7086d5c96a57.jpg",
          "assets/photos/人像摄影/模特展/Mio/884b86dbf6fc5374edff1e1d50d5775a.jpg",
          "assets/photos/人像摄影/模特展/Mio/c14affcbe5ceb22b238424f390c400d1.jpg",
          "assets/photos/人像摄影/模特展/Mio/c557f1851a6d55502375b7aa0b9a694c.jpg",
        ],
      },
      {
        id: "model-show-nero",
        title: "Nero",
        photos: ["assets/photos/人像摄影/模特展/Nero/模特：Nero；拍摄地点：东京上野；拍摄时间：2026.4.jpg"],
      },
      {
        id: "model-show-celia",
        title: "Celia",
        photos: ["assets/photos/人像摄影/模特展/Celia/模特：Celia；拍摄时间：2026.3；拍摄地点：上海迪士尼.jpg"],
      },
    ],
  },
  {
    id: "portrait-live",
    collection: "live",
    title: { zh: "Live", en: "Live", ja: "Live" },
    date: "Portrait",
    place: { zh: "现场人像", en: "Live Portrait", ja: "ライブポートレート" },
    summary: {
      zh: "以现场感和当下光线为主的人像记录，进入后按模特文件夹浏览。",
      en: "Portraits shaped by live atmosphere and available light, grouped by model.",
      ja: "現場感とその場の光を大切にした人物写真。モデル別に閲覧できます。",
    },
    href: "portrait.html?collection=live",
    photos: [
      "assets/photos/人像摄影/Live/模特：Mio；拍摄时间：2026.5；拍摄地点：东京涉谷.jpg",
      "assets/photos/人像摄影/Live/模特：Nero；拍摄地点：东京涉谷；拍摄时间：2026.4.jpg",
      "assets/photos/人像摄影/Live/模特：kakiloki；拍摄时间：2026.4；拍摄地点：日本 富士山.jpg",
      "assets/photos/人像摄影/Live/模特：美丽酥酥；拍摄时间：2026.2；拍摄地点：上海.jpg",
    ],
    groups: [
      {
        id: "live-kakiloki",
        title: "kakiloki",
        photos: [
          "assets/photos/人像摄影/Live/kakiloki/模特：kakiloki；拍摄时间：2026.4；拍摄地点：日本 富士山.jpg",
          "assets/photos/人像摄影/Live/kakiloki/模特：kakiloki；拍摄时间：2026.4；拍摄地点：日本富士山.jpg",
          "assets/photos/人像摄影/Live/kakiloki/模特：kakiloki；拍摄时间：2026.5；拍摄地点：东京台场.jpg",
        ],
      },
      {
        id: "live-mio",
        title: "Mio",
        photos: [
          "assets/photos/人像摄影/Live/Mio/602002416419b6fe9cb950f2990a8c56.jpg",
          "assets/photos/人像摄影/Live/Mio/7ae1d4e91c5b71d3d6fe6f53c6f1db1a.jpg",
          "assets/photos/人像摄影/Live/Mio/b6b48fcf3b86230126c4e9a51fb7e181.jpg",
        ],
      },
    ],
  },
];

const portraitProjects = portraitCollectionList.flatMap((collection) =>
  collection.groups.map((group) => ({
    id: group.id,
    title: { zh: group.title, en: group.title, ja: group.title },
    date: collection.date,
    place: collection.place,
    summary: collection.summary,
    photos: group.photos,
  })),
);

const sitePortfolioSections = [
  {
    id: "portrait",
    titleKey: "portraitTitle",
    introKey: "portraitIntro",
    projects: portraitCollectionList,
  },
  {
    id: "nature",
    titleKey: "natureTitle",
    introKey: "natureIntro",
    projects: [
      {
        id: "nature-maple",
        title: { zh: "枫叶", en: "Maple Leaves", ja: "紅葉" },
        date: "Nature",
        place: { zh: "自然风光", en: "Nature", ja: "自然風景" },
        summary: { zh: "季节色彩与枝叶结构。", en: "Seasonal color and leaf structure.", ja: "季節の色と葉の構造。" },
        photos: [
          "assets/photos/自然风光/枫叶/DSC08494.JPG",
          "assets/photos/自然风光/枫叶/DSC08517.JPG",
          "assets/photos/自然风光/枫叶/DSC08560.JPG",
          "assets/photos/自然风光/枫叶/DSC08562.JPG",
          "assets/photos/自然风光/枫叶/DSC08572.JPG",
        ],
      },
      {
        id: "nature-sakura",
        title: { zh: "樱花", en: "Sakura", ja: "桜" },
        date: "Nature",
        place: { zh: "自然风光", en: "Nature", ja: "自然風景" },
        summary: { zh: "春日花影与轻盈色调。", en: "Spring blossoms and light tones.", ja: "春の花影と軽やかな色調。" },
        photos: [
          "assets/photos/自然风光/樱花/DSC00156.JPG",
          "assets/photos/自然风光/樱花/DSC00185.JPG",
          "assets/photos/自然风光/樱花/DSC00194.JPG",
          "assets/photos/自然风光/樱花/DSC00200.JPG",
          "assets/photos/自然风光/樱花/DSC00201.JPG",
          "assets/photos/自然风光/樱花/DSC00206.JPG",
        ],
      },
      {
        id: "nature-sea",
        title: { zh: "海边", en: "Coast", ja: "海辺" },
        date: "2025-2026",
        place: { zh: "日本海岸", en: "Japanese Coast", ja: "日本の海岸" },
        summary: { zh: "海岸线、风与远处的地平线。", en: "Coastlines, wind, and distant horizons.", ja: "海岸線、風、遠い水平線。" },
        photos: [
          "assets/photos/自然风光/海边/拍摄地点：日本 三浦半岛；拍摄时间：2026.5.JPG",
          "assets/photos/自然风光/海边/拍摄地点：日本 小田原；拍摄时间：2025.12.JPG",
          "assets/photos/自然风光/海边/拍摄地点：日本 横须贺；拍摄时间：2025.11.JPG",
          "assets/photos/自然风光/海边/拍摄地点：日本 清水县；拍摄时间：2025.11.JPG",
          "assets/photos/自然风光/海边/拍摄地点：日本 镰仓；拍摄时间：2025.10.JPG",
        ],
      },
      {
        id: "nature-rose",
        title: { zh: "玫瑰", en: "Roses", ja: "薔薇" },
        date: "Nature",
        place: { zh: "花卉记录", en: "Floral Study", ja: "花の記録" },
        summary: { zh: "花瓣层次与柔和色彩。", en: "Petal layers and soft color.", ja: "花弁の層と柔らかな色。" },
        photos: [
          "assets/photos/自然风光/玫瑰/DSC00360.JPG",
          "assets/photos/自然风光/玫瑰/DSC00361.JPG",
          "assets/photos/自然风光/玫瑰/DSC00365.JPG",
          "assets/photos/自然风光/玫瑰/DSC00367.JPG",
          "assets/photos/自然风光/玫瑰/DSC00657.JPG",
          "assets/photos/自然风光/玫瑰/DSC00866.JPG",
        ],
      },
      {
        id: "nature-flower-show",
        title: { zh: "花展", en: "Flower Show", ja: "花展" },
        date: "Nature",
        place: { zh: "花卉现场", en: "Flower Scene", ja: "花の展示" },
        summary: { zh: "展场中的花卉、色块与细节。", en: "Flowers, color fields, and details from exhibitions.", ja: "展示空間の花、色面、細部。" },
        photos: [
          "assets/photos/自然风光/花展/DSC00354.JPG",
          "assets/photos/自然风光/花展/DSC01017.JPG",
          "assets/photos/自然风光/花展/DSC01073.JPG",
          "assets/photos/自然风光/花展/DSC01075.JPG",
          "assets/photos/自然风光/花展/DSC01086.JPG",
          "assets/photos/自然风光/花展/DSC01134.JPG",
        ],
      },
    ],
  },
  {
    id: "city",
    titleKey: "cityTitle",
    introKey: "cityIntro",
    projects: [
      {
        id: "city-impressions",
        title: { zh: "城市印象", en: "City Impressions", ja: "都市印象" },
        date: "2024-2025",
        place: { zh: "上海 / 香港 / 利兹", en: "Shanghai / Hong Kong / Leeds", ja: "上海 / 香港 / リーズ" },
        summary: { zh: "城市夜色、街道与旅行中的建筑片段。", en: "City nights, streets, and architectural fragments.", ja: "都市の夜、街路、旅先の建築断片。" },
        photos: [
          "assets/photos/城市印象/上海.JPG",
          "assets/photos/城市印象/香港.JPG",
          "assets/photos/城市印象/英国 利兹.JPG",
        ],
      },
    ],
  },
  {
    id: "daily",
    titleKey: "dailyTitle",
    introKey: "dailyIntro",
    projects: [
      {
        id: "daily-cats",
        title: { zh: "猫咪写真", en: "Cat Portraits", ja: "猫写真" },
        date: "2025.06",
        place: { zh: "日常生活", en: "Daily Life", ja: "日常生活" },
        summary: { zh: "日常空间里的猫咪姿态与表情。", en: "Cat gestures and expressions in daily spaces.", ja: "日常空間の猫の姿と表情。" },
        photos: [
          "assets/photos/日常生活/猫咪写真/DSC06090.JPG",
          "assets/photos/日常生活/猫咪写真/DSC06128.JPG",
          "assets/photos/日常生活/猫咪写真/DSC06129.JPG",
          "assets/photos/日常生活/猫咪写真/DSC06130.JPG",
          "assets/photos/日常生活/猫咪写真/DSC06139.JPG",
          "assets/photos/日常生活/猫咪写真/DSC06143.JPG",
        ],
      },
    ],
  },
];

window.localImage = localImage;
window.photoInfoFromPath = photoInfoFromPath;
window.sitePortfolioSections = sitePortfolioSections;
window.portraitCollections = portraitCollectionList;
window.portraitProjects = portraitProjects;
