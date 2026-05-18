const localImage = (path) => encodeURI(path);
const thumbImage = (path) =>
  encodeURI(path.replace(/^assets\/photos\//, "assets/thumbs/").replace(/\.[^.]+$/, ".jpg"));

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
  const title = fields["模特"] || fields["模特名"] || fields["主题"] || fields["拍摄地点"] || (hasInfo ? "影像记录" : "照片记录");
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
      zh: "以更完整的主题方式呈现人物状态：姿态、衣着、场景与光线共同构成一组可被凝视的肖像叙事。",
      en: "A curated portrait chapter where posture, styling, setting, and light form a fuller visual narrative.",
      ja: "姿勢、装い、場所、光が重なり合い、人物の存在感をひとつの物語として見せる章。",
    },
    href: "portrait.html?collection=model-show",
    photos: [
      "assets/photos/人像摄影/模特展/模特：Celia；拍摄时间：2026.3；拍摄地点：上海迪士尼.jpg",
      "assets/photos/人像摄影/模特展/模特：Mio；拍摄时间：2026.5；拍摄地点：日本 横滨.jpg",
      "assets/photos/人像摄影/模特展/模特：Nero；拍摄地点：东京上野；拍摄时间：2026.4.jpg",
      "assets/photos/人像摄影/模特展/模特：kakiloki；拍摄地点：日本 台场；拍摄时间：2026.5.JPG",
      "assets/photos/人像摄影/模特展/模特：美丽酥酥；拍摄时间：2026.1；拍摄地点：北京.jpg",
    ],
    groups: [
      {
        id: "model-show-kakiloki",
        title: "kakiloki",
        description: "清冷、从容，也带一点电影感。她适合在开阔的风景与城市边界中被拍摄，轮廓会被自然光托得很安静。",
        photos: [
          "assets/photos/人像摄影/模特展/kakiloki/模特：kakiloki；拍摄地点：日本 台场；拍摄时间：2026.5.JPG",
          "assets/photos/人像摄影/模特展/kakiloki/模特：kakiloki；拍摄时间：2026.5；拍摄地点：东京 台场.JPG",
          "assets/photos/人像摄影/模特展/kakiloki/模特：kaliloki；拍摄时间：2026.4；拍摄地点：日本 富士山.JPG",
          "assets/photos/人像摄影/模特展/kakiloki/模特：kakiloki；拍摄地点：2026.4；拍摄时间：日本富士山.jpg",
        ],
      },
      {
        id: "model-show-mio",
        title: "Mio",
        description: "甜美与松弛感很自然地并存，适合明亮街景、咖啡馆和带有日常呼吸感的画面。",
        photos: [
          "assets/photos/人像摄影/模特展/Mio/拍摄时间：20626.5；模特：Mio；拍摄地点：日本横滨.jpg",
          "assets/photos/人像摄影/模特展/Mio/模特：Mio；拍摄时间：2026.4；拍摄地点：日本富士山.jpg",
          "assets/photos/人像摄影/模特展/Mio/模特：Mio；拍摄时间：2026.5、拍摄地点：日本 横滨；.jpg",
          "assets/photos/人像摄影/模特展/Mio/模特：Mio；拍摄时间：2026.5；拍摄地点：日本横滨.jpg",
        ],
      },
      {
        id: "model-show-nero",
        title: "Nero",
        description: "气质干净利落，眼神和姿态都有很强的画面支点，适合街道、树影和更克制的色调。",
        photos: ["assets/photos/人像摄影/模特展/Nero/模特：Nero；拍摄地点：东京上野；拍摄时间：2026.4.jpg"],
      },
      {
        id: "model-show-celia",
        title: "Celia",
        description: "明亮、轻盈，带有很好的叙事亲和力，适合游园、花色与更有生命力的场景。",
        photos: [
          "assets/photos/人像摄影/模特展/Celia/模特：Celia；拍摄时间：2026.3；拍摄地点：上海迪士尼.jpg",
          "assets/photos/人像摄影/模特展/Celia/模特：Celia；拍摄地点：上海迪士尼；拍摄时间：2026.3.jpg",
        ],
      },
      {
        id: "model-show-susu",
        title: "美丽酥酥",
        description: "柔软、亲切，也有很好的画面适应力；适合用明亮背景和轻盈色彩保留人物的甜感。",
        photos: [
          "assets/photos/人像摄影/模特展/美丽酥酥/模特：美丽酥酥；拍摄时间：2026.1；拍摄地点：北京.jpg",
          "assets/photos/人像摄影/模特展/美丽酥酥/模特名：美丽酥酥；拍摄时间：2026.2；拍摄地点：上海.jpg",
        ],
      },
    ],
  },
  {
    id: "portrait-live",
    collection: "live",
    title: { zh: "Live（手机）", en: "Live Mobile", ja: "Live（スマホ）" },
    date: "Portrait",
    place: { zh: "现场人像", en: "Live Portrait", ja: "ライブポートレート" },
    summary: {
      zh: "保留拍摄现场最直接的光线、表情与行动轨迹，让人物在真实环境里自然显影。",
      en: "Portraits shaped by available light, candid movement, and the atmosphere of the place.",
      ja: "その場の光、表情、動きの余韻を残し、実際の環境の中で人物を自然に浮かび上がらせる章。",
    },
    href: "portrait.html?collection=live",
    photos: [
      "assets/photos/人像摄影/Live（手机）/模特：Mio；拍摄时间：2026.5；拍摄地点：东京涉谷.jpg",
      "assets/photos/人像摄影/Live（手机）/模特：Nero；拍摄时间：2025.5；拍摄地点：东京涉谷.jpg",
      "assets/photos/人像摄影/Live（手机）/模特：kakiloki；拍摄时间：2026.4；拍摄地点：日本 富士山.jpg",
      "assets/photos/人像摄影/Live（手机）/模特：美丽酥酥；拍摄时间：2026.2；拍摄地点：上海.jpg",
    ],
    groups: [
      {
        id: "live-kakiloki",
        title: "kakiloki",
        description: "在日落、海边和城市天际线之间，她的侧影更接近一段安静的短片。",
        photos: [
          "assets/photos/人像摄影/Live（手机）/kakiloki/模特：kakiloki；拍摄时间：2026.4；拍摄地点：日本 富士山.jpg",
          "assets/photos/人像摄影/Live（手机）/kakiloki/模特：kakiloki；拍摄时间：2026.4；拍摄地点：日本富士山.jpg",
          "assets/photos/人像摄影/Live（手机）/kakiloki/模特：kakiloki；拍摄时间：2026.5；拍摄地点：东京台场.jpg",
        ],
      },
      {
        id: "live-mio",
        title: "Mio",
        description: "她适合被放在真实的街道与室内光里，表情轻盈，画面有自然的亲近感。",
        photos: [
          "assets/photos/人像摄影/Live（手机）/Mio/拍摄时间：2026.5；模特：Mio；拍摄地点：东京涉谷.jpg",
          "assets/photos/人像摄影/Live（手机）/Mio/模特：Mio；拍摄地点：东京涉谷；拍摄时间：2026.5.jpg",
          "assets/photos/人像摄影/Live（手机）/Mio/模特：Mio；拍摄时间：2026.5；拍摄地点：东京涉谷.jpg",
        ],
      },
      {
        id: "live-nero",
        title: "Nero",
        description: "夜色和街道会让他的气质更锋利，画面里带着清晰的方向感。",
        photos: [
          "assets/photos/人像摄影/Live（手机）/Nero/模特：Nero；拍摄地点：东京涉谷；拍摄时间：2026.4.jpg",
          "assets/photos/人像摄影/Live（手机）/Nero/模特：Nero；拍摄时间：2025.5；拍摄地点：东京涉谷.jpg",
          "assets/photos/人像摄影/Live（手机）/模特：Nero；拍摄时间：2025.5；拍摄地点：东京涉谷.jpg",
        ],
      },
      {
        id: "live-susu",
        title: "美丽酥酥",
        description: "柔和、自然，适合被放在松弛的环境里，以更轻的方式保留当下情绪。",
        photos: [
          "assets/photos/人像摄影/Live（手机）/美丽酥酥/模特：美丽酥酥；拍摄时间：2026.2；拍摄地点：上海.jpg",
          "assets/photos/人像摄影/Live（手机）/模特：美丽酥酥；拍摄时间：2026.2；拍摄地点：上海.jpg",
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
        summary: { zh: "深秋的颜色从叶脉里慢慢透出，枝叶像一层被风翻动的薄纸。", en: "Late-autumn color rising through the veins of leaves, like thin pages moved by wind.", ja: "晩秋の色が葉脈から滲み出し、風にめくられる薄い紙のように重なる。" },
        photos: [
          "assets/photos/自然风光/枫叶/DSC07786.JPG",
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
        summary: { zh: "花影、浅色天空和短暂的春光，组成一组柔软而易逝的记忆。", en: "Blossoms, pale skies, and brief spring light become a soft, vanishing memory.", ja: "花影、淡い空、短い春の光が、柔らかく儚い記憶になる。" },
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
        summary: { zh: "海面把风、云和远处的地平线收进同一层蓝色，安静而辽阔。", en: "The sea gathers wind, clouds, and horizon into one quiet field of blue.", ja: "海は風、雲、遠い水平線をひとつの静かな青に収める。" },
        photos: [
          "assets/photos/自然风光/海边/拍摄地点：东京 台场；拍摄时间：2026.5.jpg",
          "assets/photos/自然风光/海边/拍摄地点：日本 三浦半岛；拍摄时间：2026.5.JPG",
          "assets/photos/自然风光/海边/拍摄地点：日本 小田原；拍摄时间：2025.12.JPG",
          "assets/photos/自然风光/海边/拍摄地点：日本 横须贺；拍摄时间：2025.11.JPG",
          "assets/photos/自然风光/海边/拍摄地点：日本 清水县；拍摄时间：2025.11.JPG",
          "assets/photos/自然风光/海边/拍摄地点：日本 镰仓；拍摄时间：2025.10.JPG",
          "assets/photos/自然风光/海边/拍摄时间：2025.12；拍摄地点：日本 小田原.JPG",
          "assets/photos/自然风光/海边/拍摄时间：2026.5；拍摄地点：日本 三浦半岛.JPG",
        ],
      },
      {
        id: "nature-rose",
        title: { zh: "玫瑰", en: "Roses", ja: "薔薇" },
        date: "Nature",
        place: { zh: "花卉记录", en: "Floral Study", ja: "花の記録" },
        summary: { zh: "花瓣的边缘、色彩的过渡和靠近时的细节，让植物拥有近似肖像的表情。", en: "Petal edges, color transitions, and close details give flowers an almost portrait-like expression.", ja: "花弁の縁、色の移ろい、近づいた細部が、花に肖像のような表情を与える。" },
        photos: [
          "assets/photos/自然风光/玫瑰/DSC00360.JPG",
          "assets/photos/自然风光/玫瑰/DSC00361.JPG",
          "assets/photos/自然风光/玫瑰/DSC00365.JPG",
          "assets/photos/自然风光/玫瑰/DSC00367.JPG",
          "assets/photos/自然风光/玫瑰/DSC00657.JPG",
          "assets/photos/自然风光/玫瑰/DSC00866.JPG",
          "assets/photos/自然风光/玫瑰/DSC00947.JPG",
        ],
      },
      {
        id: "nature-flower-show",
        title: { zh: "植物展", en: "Botanical Study", ja: "植物展" },
        date: "Nature",
        place: { zh: "植物现场", en: "Botanical Scene", ja: "植物の展示" },
        summary: { zh: "叶片、花序与展场光线彼此叠合，让植物呈现出近乎静物画的秩序。", en: "Leaves, blossoms, and exhibition light overlap into a quiet still-life order.", ja: "葉、花序、展示空間の光が重なり、静物画のような秩序を見せる。" },
        photos: [
          "assets/photos/自然风光/植物展/DSC00354.JPG",
          "assets/photos/自然风光/植物展/DSC01017.JPG",
          "assets/photos/自然风光/植物展/DSC01073.JPG",
          "assets/photos/自然风光/植物展/DSC01075.JPG",
          "assets/photos/自然风光/植物展/DSC01086.JPG",
          "assets/photos/自然风光/植物展/DSC01134.JPG",
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
        summary: { zh: "街道、窗光、夜色与建筑立面，在旅行途中留下城市的表情。", en: "Streets, window light, night color, and facades hold the expression of each city.", ja: "街路、窓明かり、夜の色、建築の断片が都市の表情を残す。" },
        photos: [
          "assets/photos/城市印象/拍摄时间：2024.4；拍摄城市：上海.JPG",
          "assets/photos/城市印象/拍摄城市：香港；拍摄时间：2023.5.JPG",
          "assets/photos/城市印象/拍摄城市：英国 利兹；拍摄时间：2025.1.JPG",
          "assets/photos/城市印象/拍摄城市：东京；拍摄时间：2025.10.jpg",
          "assets/photos/城市印象/拍摄时间：2025.10；拍摄城市：东京.jpg",
          "assets/photos/城市印象/拍摄时间：2026.1；拍摄地点：北京.JPG",
          "assets/photos/城市印象/拍摄时间：2026.4；拍摄地点：日本 富士山.jpg",
        ],
      },
    ],
  },
  {
    id: "stories",
    titleKey: "storiesTitle",
    introKey: "storiesIntro",
    projects: [
      {
        id: "story-light-notes",
        title: { zh: "熊大：一只小熊的远方", en: "Bear Da: A Small Companion", ja: "熊大：小さな旅の友" },
        date: "Journal",
        place: { zh: "摄影故事", en: "Photo Story", ja: "写真ストーリー" },
        summary: { zh: "一只陪伴二十多年的小熊，把笑容、旅途和时间里柔软的部分一起带到镜头前。", en: "A companion of more than twenty years, carrying smiles, journeys, and the tender residue of time.", ja: "二十年以上寄り添う小さな熊が、笑顔と旅、時間の柔らかな記憶を運んでくる。" },
        story: {
          kicker: "A small companion",
          title: "熊大：被时间带去远方的笑容",
          paragraphs: [
            "它最早叫快乐熊。这个名字朴素，却像一枚准确的注脚：二十多年过去，它的笑容仍然明亮，像从童年延续到现在的一束小光，轻轻一照，许多疲惫都会安静下来。",
            "后来，它有了新的名字，叫熊大。名字改变了，陪伴的质地却没有改变。它去过很多地方，挤进行李箱，经过车站、房间、海边和远方，在一次次出发与归来之间，成为生活里最稳定也最柔软的坐标。",
            "拍摄熊大时，我想记录的不是一件玩偶，而是一段被时间慢慢磨亮的关系。那些毛绒上的痕迹、始终扬起的嘴角，以及被带往不同地方的身影，都在提醒我：快乐不一定宏大，它有时只是一个熟悉的表情，安静地陪你走过很久。",
          ],
        },
        photos: [
          "assets/photos/摄影故事/095f7496a02454f6fcdfc1f8febda101.jpg",
          "assets/photos/摄影故事/1f626f17ee2bb2ea44f3ee88b44e0e19.jpg",
          "assets/photos/摄影故事/1f72afc7fa63715dd658615cf33bffcd.jpg",
          "assets/photos/摄影故事/c8060bfa415a2078475de2a803d9a523.jpg",
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
        summary: { zh: "把日常里轻轻发生的可爱瞬间保存下来，像一页不必用力解释的生活注脚。", en: "Small charming moments from daily life, kept like quiet footnotes to ordinary days.", ja: "日常にそっと現れる愛らしい瞬間を、静かな注釈のように残す。" },
        photos: [
          "assets/photos/日常生活/猫咪写真/DSC06090.JPG",
          "assets/photos/日常生活/猫咪写真/DSC06092.JPG",
          "assets/photos/日常生活/猫咪写真/DSC06114.JPG",
          "assets/photos/日常生活/猫咪写真/DSC06128.JPG",
          "assets/photos/日常生活/猫咪写真/DSC06129.JPG",
          "assets/photos/日常生活/猫咪写真/DSC06130.JPG",
          "assets/photos/日常生活/猫咪写真/DSC06139.JPG",
          "assets/photos/日常生活/猫咪写真/DSC06143.JPG",
        ],
      },
      {
        id: "daily-phone",
        title: { zh: "手机随拍", en: "Phone Notes", ja: "スマホ日記" },
        date: "Daily",
        place: { zh: "手机摄影", en: "Mobile Photography", ja: "スマホ写真" },
        summary: { zh: "用随身镜头记录生活里突然出现的色彩、光线和小小场景。", en: "Small scenes, colors, and light gathered with the camera always nearby.", ja: "いつも手元にあるカメラで、日常に現れる色、光、小さな場面を残す。" },
        photos: [
          "assets/photos/日常生活/手机摄影/366cd020217abeb9d6e501b3047b341b.jpg",
          "assets/photos/日常生活/手机摄影/78bb5bd3b5448d4fe033bd90b59962d5.jpg",
          "assets/photos/日常生活/手机摄影/9b43d1e84121451e9745769a375f1714.jpg",
        ],
      },
      {
        id: "daily-light-show",
        title: { zh: "光影展", en: "Light Notes", ja: "光の記録" },
        date: "2023-2025",
        place: { zh: "日常生活", en: "Daily Life", ja: "日常生活" },
        summary: { zh: "窗影、墙面和路过的光，把普通空间切成安静的几何与余温。", en: "Window shadows, walls, and passing light turn ordinary rooms into quiet geometry.", ja: "窓影、壁、通り過ぎる光が、日常の空間を静かな幾何へ変える。" },
        photos: [
          "assets/photos/日常生活/光影展/拍摄地点：上海；拍摄时间：2025.8.JPG",
          "assets/photos/日常生活/光影展/拍摄地点：杭州；拍摄时间：20424.9.JPG",
          "assets/photos/日常生活/光影展/拍摄地点：苏州 虞山；拍摄时间：2024.6.JPG",
          "assets/photos/日常生活/光影展/拍摄地点：苏州 虞山；拍摄时间：204.6.JPG",
          "assets/photos/日常生活/光影展/拍摄地点：苏州；拍摄时间：2023.JPG",
          "assets/photos/日常生活/光影展/拍摄时间：2025.8；拍摄地点：上海.JPG",
        ],
      },
    ],
  },
];

const sectionOrder = ["portrait", "nature", "city", "daily", "stories"];
sitePortfolioSections.sort((a, b) => sectionOrder.indexOf(a.id) - sectionOrder.indexOf(b.id));

window.localImage = localImage;
window.thumbImage = thumbImage;
window.photoInfoFromPath = photoInfoFromPath;
window.sitePortfolioSections = sitePortfolioSections;
window.portraitCollections = portraitCollectionList;
window.portraitProjects = portraitProjects;
