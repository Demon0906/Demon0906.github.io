import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const PHOTOS_DIR = path.join(ROOT, "assets", "photos");
const OUTPUT = path.join(ROOT, "gallery-data.js");

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);

const sectionOrder = ["portrait", "nature", "city", "daily", "stories"];

const sectionConfig = {
  人像摄影: {
    id: "portrait",
    titleKey: "portraitTitle",
    introKey: "portraitIntro",
  },
  自然风光: {
    id: "nature",
    titleKey: "natureTitle",
    introKey: "natureIntro",
  },
  城市印象: {
    id: "city",
    titleKey: "cityTitle",
    introKey: "cityIntro",
  },
  日常生活: {
    id: "daily",
    titleKey: "dailyTitle",
    introKey: "dailyIntro",
  },
  摄影故事: {
    id: "stories",
    titleKey: "storiesTitle",
    introKey: "storiesIntro",
  },
};

const collectionMeta = {
  "人像摄影/模特展": {
    id: "portrait-model-show",
    collection: "model-show",
    date: "Portrait",
    place: { zh: "人像摄影", en: "Portrait", ja: "人物写真" },
    title: { zh: "模特展", en: "Model Exhibition", ja: "モデル展" },
    summary: {
      zh: "以更完整的主题方式呈现人物状态：姿态、衣着、场景与光线共同构成一组可被凝视的肖像叙事。",
      en: "A curated portrait chapter where posture, styling, setting, and light form a fuller visual narrative.",
      ja: "姿勢、装い、場所、光が重なり合い、人物の存在感をひとつの物語として見せる章。",
    },
    href: "portrait.html?collection=model-show",
  },
  "人像摄影/Live（手机）": {
    id: "portrait-live",
    collection: "live",
    date: "Portrait",
    place: { zh: "现场人像", en: "Live Portrait", ja: "ライブポートレート" },
    title: { zh: "Live（手机）", en: "Live Mobile", ja: "Live（スマホ）" },
    summary: {
      zh: "保留拍摄现场最直接的光线、表情与行动轨迹，让人物在真实环境里自然显影。",
      en: "Portraits shaped by available light, candid movement, and the atmosphere of the place.",
      ja: "その場の光、表情、動きの余韻を残し、実際の環境の中で人物を自然に浮かび上がらせる章。",
    },
    href: "portrait.html?collection=live",
  },
};

const projectMeta = {
  "自然风光/枫叶": {
    id: "nature-maple",
    title: { zh: "枫叶", en: "Maple Leaves", ja: "紅葉" },
    date: "Nature",
    place: { zh: "自然风光", en: "Nature", ja: "自然風景" },
    summary: {
      zh: "深秋的颜色从叶脉里慢慢透出，枝叶像一层被风翻动的薄纸。",
      en: "Late-autumn color rising through the veins of leaves, like thin pages moved by wind.",
      ja: "晩秋の色が葉脈から滲み出し、風にめくられる薄い紙のように重なる。",
    },
  },
  "自然风光/樱花": {
    id: "nature-sakura",
    title: { zh: "樱花", en: "Sakura", ja: "桜" },
    date: "Nature",
    place: { zh: "自然风光", en: "Nature", ja: "自然風景" },
    summary: {
      zh: "花影、浅色天空和短暂的春光，组成一组柔软而易逝的记忆。",
      en: "Blossoms, pale skies, and brief spring light become a soft, vanishing memory.",
      ja: "花影、淡い空、短い春の光が、柔らかく儚い記憶になる。",
    },
  },
  "自然风光/海边": {
    id: "nature-sea",
    title: { zh: "海边", en: "Coast", ja: "海辺" },
    date: "2025-2026",
    place: { zh: "日本海岸", en: "Japanese Coast", ja: "日本の海岸" },
    summary: {
      zh: "海面把风、云和远处的地平线收进同一层蓝色，安静而辽阔。",
      en: "The sea gathers wind, clouds, and horizon into one quiet field of blue.",
      ja: "海は風、雲、遠い水平線をひとつの静かな青に収める。",
    },
  },
  "自然风光/玫瑰": {
    id: "nature-rose",
    title: { zh: "玫瑰", en: "Roses", ja: "薔薇" },
    date: "Nature",
    place: { zh: "花卉记录", en: "Floral Study", ja: "花の記録" },
    summary: {
      zh: "花瓣的边缘、色彩的过渡和靠近时的细节，让植物拥有近似肖像的表情。",
      en: "Petal edges, color transitions, and close details give flowers an almost portrait-like expression.",
      ja: "花弁の縁、色の移ろい、近づいた細部が、花に肖像のような表情を与える。",
    },
  },
  "自然风光/植物展": {
    id: "nature-flower-show",
    title: { zh: "植物展", en: "Botanical Study", ja: "植物展" },
    date: "Nature",
    place: { zh: "植物现场", en: "Botanical Scene", ja: "植物の展示" },
    summary: {
      zh: "叶片、花序与展场光线彼此叠合，让植物呈现出近乎静物画的秩序。",
      en: "Leaves, blossoms, and exhibition light overlap into a quiet still-life order.",
      ja: "葉、花序、展示空間の光が重なり、静物画のような秩序を見せる。",
    },
  },
  城市印象: {
    id: "city-impressions",
    title: { zh: "城市印象", en: "City Impressions", ja: "都市印象" },
    date: "2024-2026",
    place: { zh: "上海 / 香港 / 利兹 / 东京", en: "Shanghai / Hong Kong / Leeds / Tokyo", ja: "上海 / 香港 / リーズ / 東京" },
    summary: {
      zh: "街道、窗光、夜色与建筑立面，在旅行途中留下城市的表情。",
      en: "Streets, window light, night color, and facades hold the expression of each city.",
      ja: "街路、窓明かり、夜の色、建築の断片が都市の表情を残す。",
    },
  },
  "日常生活/猫咪写真": {
    id: "daily-cats",
    title: { zh: "猫咪写真", en: "Cat Portraits", ja: "猫写真" },
    date: "2025.06",
    place: { zh: "日常生活", en: "Daily Life", ja: "日常生活" },
    summary: {
      zh: "把日常里轻轻发生的可爱瞬间保存下来，像一页不必用力解释的生活注脚。",
      en: "Small charming moments from daily life, kept like quiet footnotes to ordinary days.",
      ja: "日常にそっと現れる愛らしい瞬間を、静かな注釈のように残す。",
    },
  },
  "日常生活/手机摄影": {
    id: "daily-phone",
    title: { zh: "手机随拍", en: "Phone Notes", ja: "スマホ日記" },
    date: "Daily",
    place: { zh: "手机摄影", en: "Mobile Photography", ja: "スマホ写真" },
    summary: {
      zh: "用随身镜头记录生活里突然出现的色彩、光线和小小场景。",
      en: "Small scenes, colors, and light gathered with the camera always nearby.",
      ja: "いつも手元にあるカメラで、日常に現れる色、光、小さな場面を残す。",
    },
  },
  "日常生活/光影展": {
    id: "daily-light-show",
    title: { zh: "光影展", en: "Light Notes", ja: "光の記録" },
    date: "2023-2025",
    place: { zh: "日常生活", en: "Daily Life", ja: "日常生活" },
    summary: {
      zh: "窗影、墙面和路过的光，把普通空间切成安静的几何与余温。",
      en: "Window shadows, walls, and passing light turn ordinary rooms into quiet geometry.",
      ja: "窓影、壁、通り過ぎる光が、日常の空間を静かな幾何へ変える。",
    },
  },
  摄影故事: {
    id: "story-light-notes",
    title: { zh: "熊大：一只小熊的远方", en: "Bear Da: A Small Companion", ja: "熊大：小さな旅の友" },
    date: "Journal",
    place: { zh: "摄影故事", en: "Photo Story", ja: "写真ストーリー" },
    summary: {
      zh: "一只陪伴二十多年的小熊，把笑容、旅途和时间里柔软的部分一起带到镜头前。",
      en: "A companion of more than twenty years, carrying smiles, journeys, and the tender residue of time.",
      ja: "二十年以上寄り添う小さな熊が、笑顔と旅、時間の柔らかな記憶を運んでくる。",
    },
    story: {
      kicker: "A small companion",
      title: "熊大：被时间带去远方的笑容",
      paragraphs: [
        "它最早叫快乐熊。这个名字朴素，却像一枚准确的注脚：二十多年过去，它的笑容仍然明亮，像从童年延续到现在的一束小光，轻轻一照，许多疲惫都会安静下来。",
        "后来，它有了新的名字，叫熊大。名字改变了，陪伴的质地却没有改变。它去过很多地方，挤进行李箱，经过车站、房间、海边和远方，在一次次出发与归来之间，成为生活里最稳定也最柔软的坐标。",
        "拍摄熊大时，我想记录的不是一件玩偶，而是一段被时间慢慢磨亮的关系。那些毛绒上的痕迹、始终扬起的嘴角，以及被带往不同地方的身影，都在提醒我：快乐不一定宏大，它有时只是一个熟悉的表情，安静地陪你走过很久。",
      ],
    },
  },
};

const groupDescriptions = {
  kakiloki: "清冷、从容，也带一点电影感。她适合在开阔的风景与城市边界中被拍摄，轮廓会被自然光托得很安静。",
  Mio: "甜美与松弛感很自然地并存，适合明亮街景、咖啡馆和带有日常呼吸感的画面。",
  Nero: "气质干净利落，眼神和姿态都有很强的画面支点，适合街道、树影和更克制的色调。",
  Celia: "明亮、轻盈，带有很好的叙事亲和力，适合游园、花色与更有生命力的场景。",
  美丽酥酥: "柔软、亲切，也有很好的画面适应力；适合用明亮背景和轻盈色彩保留人物的甜感。",
};

function compareName(a, b) {
  return a.localeCompare(b, "zh-Hans-CN", { numeric: true, sensitivity: "base" });
}

function isVisible(name) {
  return !name.startsWith(".");
}

function isImage(name) {
  return IMAGE_EXTENSIONS.has(path.extname(name).toLowerCase());
}

function listEntries(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).filter((entry) => isVisible(entry.name));
}

function listDirs(dir) {
  return listEntries(dir)
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort(compareName);
}

function listImages(dir) {
  return listEntries(dir)
    .filter((entry) => entry.isFile() && isImage(entry.name))
    .map((entry) => toAssetPath(path.join(dir, entry.name)))
    .sort(compareName);
}

function toAssetPath(filePath) {
  return path.relative(ROOT, filePath).split(path.sep).join("/");
}

function slug(input) {
  const ascii = input
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
  if (ascii) return ascii;
  return Buffer.from(input).toString("hex").slice(0, 12);
}

function textTitle(name) {
  return { zh: name, en: name, ja: name };
}

function fallbackProject(sectionName, projectName, photos) {
  const key = projectName ? `${sectionName}/${projectName}` : sectionName;
  const fields = extractDominantPhotoInfo(photos);
  return {
    id: `${sectionConfig[sectionName]?.id || slug(sectionName)}-${slug(projectName || "series")}`,
    title: textTitle(projectName || sectionName),
    date: fields["拍摄时间"] || "Selected Series",
    place: { zh: fields["拍摄地点"] || fields["拍摄城市"] || sectionName, en: sectionName, ja: sectionName },
    summary: {
      zh: summaryFor(sectionName, projectName || sectionName),
      en: summaryFor(sectionName, projectName || sectionName),
      ja: summaryFor(sectionName, projectName || sectionName),
    },
    ...(projectMeta[key] || projectMeta[sectionName] || {}),
  };
}

function summaryFor(sectionName, projectName) {
  const map = {
    人像摄影: `围绕 ${projectName} 展开的一组影像，保留人物在光线、空间与情绪之间的细微变化。`,
    自然风光: `${projectName} 里的颜色、风与季节痕迹，被整理成一组适合慢慢观看的自然切片。`,
    城市印象: `${projectName} 里的街道、建筑与光线，构成旅途中关于城市的记忆。`,
    日常生活: `${projectName} 记录了日常里不经意出现的温柔、灵动和轻盈片刻。`,
    摄影故事: `${projectName} 从一次拍摄现场出发，把图片和文字整理成一段可以阅读的影像故事。`,
  };
  return map[sectionName] || `${projectName} 的影像记录。`;
}

function extractDominantPhotoInfo(photos) {
  const fields = {};
  for (const photo of photos) {
    const filename = decodeURIComponent(photo.split("/").pop() || "").replace(/\.[^.]+$/, "");
    filename
      .split(/[；;]/)
      .map((part) => part.trim())
      .filter(Boolean)
      .forEach((part) => {
        const [key, ...value] = part.split(/[：:]/);
        if (value.length && !fields[key.trim()]) fields[key.trim()] = value.join(":").trim();
      });
  }
  return fields;
}

function buildPortraitCollections() {
  const portraitDir = path.join(PHOTOS_DIR, "人像摄影");
  return listDirs(portraitDir)
    .map((collectionName) => {
      const dir = path.join(portraitDir, collectionName);
      const key = `人像摄影/${collectionName}`;
      const meta = collectionMeta[key] || {
        id: `portrait-${slug(collectionName)}`,
        collection: slug(collectionName),
        title: textTitle(collectionName),
        date: "Portrait",
        place: { zh: "人像摄影", en: "Portrait", ja: "人物写真" },
        summary: {
          zh: summaryFor("人像摄影", collectionName),
          en: summaryFor("人像摄影", collectionName),
          ja: summaryFor("人像摄影", collectionName),
        },
        href: `portrait.html?collection=${slug(collectionName)}`,
      };
      const groups = listDirs(dir)
        .map((groupName) => {
          const groupPhotos = listImages(path.join(dir, groupName));
          if (!groupPhotos.length) return null;
          return {
            id: `${meta.collection}-${slug(groupName)}`,
            title: groupName,
            description: groupDescriptions[groupName] || summaryFor("人像摄影", groupName),
            photos: groupPhotos,
          };
        })
        .filter(Boolean);
      const photos = listImages(dir);
      return {
        ...meta,
        photos: photos.length ? photos : groups.flatMap((group) => group.photos.slice(0, 1)),
        groups,
      };
    })
    .filter((collection) => collection.photos.length || collection.groups.length);
}

function buildFlatSection(sectionName) {
  const dir = path.join(PHOTOS_DIR, sectionName);
  const childDirs = listDirs(dir);
  const directPhotos = listImages(dir);

  if (!childDirs.length) {
    if (!directPhotos.length) return [];
    const meta = fallbackProject(sectionName, "", directPhotos);
    return [{ ...meta, photos: directPhotos }];
  }

  const projects = childDirs
    .map((projectName) => {
      const photos = listImages(path.join(dir, projectName));
      if (!photos.length) return null;
      const meta = fallbackProject(sectionName, projectName, photos);
      return { ...meta, photos };
    })
    .filter(Boolean);

  if (directPhotos.length) {
    const meta = fallbackProject(sectionName, "", directPhotos);
    projects.unshift({ ...meta, photos: directPhotos });
  }

  return projects;
}

function buildData() {
  const portraitCollectionList = buildPortraitCollections();
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

  const sitePortfolioSections = Object.entries(sectionConfig)
    .map(([sectionName, config]) => {
      const projects = sectionName === "人像摄影" ? portraitCollectionList : buildFlatSection(sectionName);
      return { ...config, projects };
    })
    .filter((section) => section.projects.length)
    .sort((a, b) => sectionOrder.indexOf(a.id) - sectionOrder.indexOf(b.id));

  return { portraitCollectionList, portraitProjects, sitePortfolioSections };
}

function serialize(value) {
  return JSON.stringify(value, null, 2).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
}

const { portraitCollectionList, portraitProjects, sitePortfolioSections } = buildData();

const output = `// This file is generated by scripts/generate-gallery-data.mjs.
// Edit folders under assets/photos, then run: npm run generate:gallery

const localImage = (path) => encodeURI(path);
const thumbImage = (path) =>
  encodeURI(path.replace(/^assets\\/photos\\//, "assets/thumbs/").replace(/\\.[^.]+$/, ".jpg"));

function photoInfoFromPath(path) {
  const filename = decodeURIComponent(path.split("/").pop() || "").replace(/\\.[^.]+$/, "");
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
  const title = fields["模特"] || fields["模特名"] || fields["主题"] || fields["拍摄地点"] || fields["拍摄城市"] || (hasInfo ? "影像记录" : "照片记录");
  const meta = [fields["拍摄时间"], fields["拍摄地点"] || fields["拍摄城市"]].filter(Boolean).join(" · ");
  const caption = hasInfo
    ? Object.entries(fields)
        .map(([key, value]) => \`\${key}: \${value}\`)
        .join(" / ")
    : filename;
  return { title, meta, caption, fields };
}

const portraitCollectionList = ${serialize(portraitCollectionList)};

const portraitProjects = ${serialize(portraitProjects)};

const sitePortfolioSections = ${serialize(sitePortfolioSections)};

window.localImage = localImage;
window.thumbImage = thumbImage;
window.photoInfoFromPath = photoInfoFromPath;
window.sitePortfolioSections = sitePortfolioSections;
window.portraitCollections = portraitCollectionList;
window.portraitProjects = portraitProjects;
`;

fs.writeFileSync(OUTPUT, output);
console.log(`Generated gallery-data.js with ${sitePortfolioSections.length} sections.`);
