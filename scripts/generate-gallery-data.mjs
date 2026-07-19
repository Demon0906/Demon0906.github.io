import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const ROOT = process.cwd();
const PHOTOS_DIR = path.join(ROOT, "assets", "photos");
const OUTPUT = path.join(ROOT, "gallery-data.js");

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);

const sectionOrder = ["portrait", "nature", "architecture", "city", "daily", "stories"];
const portraitCollectionOrder = ["相机人像", "手机人像"];

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
  人文建筑: {
    id: "architecture",
    titleKey: "architectureTitle",
    introKey: "architectureIntro",
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
  "人像摄影/相机人像": {
    id: "portrait-camera",
    collection: "camera",
    date: "Portrait",
    place: { zh: "相机人像", en: "Camera Portrait", ja: "カメラ人物" },
    title: { zh: "相机人像", en: "Camera Portraits", ja: "カメラ人物" },
    featuredCover: "assets/photos/人像摄影/相机人像/kakiloki/模特：kakiloki；拍摄地点：日本 台场；拍摄时间：2026.5.JPG",
    summary: {
      zh: "以相机记录人物、姿态与光线的关系，让肖像成为一页可以停留阅读的影像章节。",
      en: "Camera portraits shaped by posture, light, and the quiet distance between figure and space.",
      ja: "人物、姿勢、光の関係をカメラで残し、ゆっくり読める肖像の章にする。",
    },
    href: "portrait.html?collection=camera",
  },
  "人像摄影/手机人像": {
    id: "portrait-mobile",
    collection: "mobile",
    date: "Portrait",
    place: { zh: "手机人像", en: "Mobile Portrait", ja: "スマホ人物" },
    title: { zh: "手机人像", en: "Mobile Portraits", ja: "スマホ人物" },
    summary: {
      zh: "用随身镜头靠近现场，把表情、行动和日常光线里稍纵即逝的真实留下。",
      en: "Mobile portraits kept close to the scene, preserving gestures, expressions, and available light.",
      ja: "身近なレンズで現場に近づき、表情、動き、その場の光を残す。",
    },
    href: "portrait.html?collection=mobile",
  },
};

const projectMeta = {
  "自然风光/枫叶": {
    id: "nature-maple",
    title: { zh: "植物 / 风光", en: "Botanical Light", ja: "植物と風景" },
    date: "Nature",
    place: { zh: "自然风光", en: "Nature", ja: "自然風景" },
    featuredCover: "assets/photos/自然风光/枫叶/DSC04549.JPG",
    summary: {
      zh: "植物、叶脉与风景里的光线被慢慢收集，像一页被季节轻轻翻动的自然手稿。",
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
      zh: "花影、浅色天空和短暂的春光，组成一组柔软而易逝的春日章节。",
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
      zh: "海面把风、云和远处的地平线收进同一层蓝色，像一本安静展开的远方。",
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
  "自然风光/绣球花": {
    id: "nature-hydrangea",
    title: { zh: "绣球花", en: "Hydrangea Notes", ja: "紫陽花" },
    date: "Nature",
    place: { zh: "植物现场", en: "Botanical Scene", ja: "植物の展示" },
    summary: {
      zh: "绣球在湿润空气里慢慢换色，花团像季节留下的柔软注脚。",
      en: "Hydrangeas shifting color in humid air, like soft notes left by the season.",
      ja: "湿った空気の中で色を変える紫陽花が、季節の柔らかな注釈になる。",
    },
  },
  人文建筑: {
    id: "architecture-human-structures",
    title: { zh: "人文建筑", en: "Built Memory", ja: "建築の記憶" },
    date: "Built Space",
    place: { zh: "建筑与人文", en: "Architecture", ja: "建築" },
    summary: {
      zh: "建筑不是静止的背景，它保存人的尺度、时间的痕迹和光经过空间时留下的秩序。",
      en: "Architecture is not a still backdrop; it keeps human scale, traces of time, and the order of light.",
      ja: "建築は静かな背景ではなく、人の尺度、時間の痕跡、光の秩序を残す場所。",
    },
  },
  城市印象: {
    id: "city-impressions",
    title: { zh: "城市印象", en: "City Impressions", ja: "都市印象" },
    date: "2024-2026",
    place: { zh: "上海 / 香港 / 利兹 / 东京", en: "Shanghai / Hong Kong / Leeds / Tokyo", ja: "上海 / 香港 / リーズ / 東京" },
    summary: {
      zh: "街道、窗光、夜色与建筑立面，留下城市短暂而清晰的表情。",
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
      zh: "日常里轻轻发生的可爱瞬间，像一页不必用力解释的生活旁白。",
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
      zh: "随身镜头收下突然出现的色彩、光线和小小场景，形成更私人的影像札记。",
      en: "Small scenes, colors, and light gathered with the camera always nearby.",
      ja: "いつも手元にあるカメラで、日常に現れる色、光、小さな場面を残す。",
    },
  },
  "日常生活/光影展": {
    id: "daily-light-show",
    title: { zh: "光影 / 生命 / 随拍", en: "Light / Life / Notes", ja: "光 / 生活 / 随写" },
    date: "2023-2025",
    place: { zh: "日常生活", en: "Daily Life", ja: "日常生活" },
    featuredCover: "assets/photos/日常生活/猫咪写真/DSC06128.JPG",
    summary: {
      zh: "窗影、墙面和路过的光，把普通空间切成安静的几何与余温。",
      en: "Window shadows, walls, and passing light turn ordinary rooms into quiet geometry.",
      ja: "窓影、壁、通り過ぎる光が、日常の空間を静かな幾何へ変える。",
    },
  },
  "摄影故事/小熊摄影故事": {
    id: "story-light-notes",
    title: { zh: "熊大：一只小熊的远方", en: "Bear Da: A Small Companion", ja: "熊大：小さな旅の友" },
    date: "Journal",
    place: { zh: "摄影故事", en: "Photo Story", ja: "写真ストーリー" },
    featuredCover: "assets/photos/摄影故事/小熊摄影故事/1f626f17ee2bb2ea44f3ee88b44e0e19.jpg",
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
  "摄影故事/毕业季摄影故事": {
    id: "story-graduation-season",
    title: { zh: "毕业季：把告别留在光里", en: "Graduation Season", ja: "卒業の季節" },
    date: "Journal",
    place: { zh: "摄影故事", en: "Photo Story", ja: "写真ストーリー" },
    summary: {
      zh: "毕业不是一个突然结束的句号，而是一段在镜头前被慢慢整理的告别。",
      en: "Graduation is not an abrupt ending, but a farewell slowly arranged in front of the lens.",
      ja: "卒業は突然の終わりではなく、レンズの前でゆっくり整えられる別れ。",
    },
    story: {
      kicker: "A season of leaving",
      title: "毕业季：把告别留在光里",
      paragraphs: [
        "毕业季的照片总带着一种微妙的双重性：一边是明亮的笑容，一边是即将离开的预感。那些校门、树影、走廊和熟悉的角落，在镜头里突然变得比平时更清晰。",
        "我希望这组照片不只是纪念某一天，而是保存一段时间的气味。衣服被风吹动的瞬间，朋友之间不自觉靠近的姿态，回头看校园时停顿的一秒，都是告别真正发生的地方。",
        "拍毕业照时，最重要的不是把人拍得多正式，而是让照片在多年之后还能带回当时的心情：年轻、期待、舍不得，也终于准备好走向下一段路。",
      ],
    },
  },
};

const groupDescriptions = {
  kakiloki: "清冷、从容，也带一点电影感。她适合在开阔的风景与城市边界中被拍摄，轮廓会被自然光托得很安静。",
  Mio: "甜美与松弛感很自然地并存，适合明亮街景、咖啡馆和带有日常呼吸感的画面。",
  Nero: "气质干净利落，眼神和姿态都有很强的画面支点，适合街道、树影和更克制的色调。",
  Celia: "明亮、轻盈，带有很好的叙事亲和力，适合游园、花色与更有生命力的场景。",
  CheriJanie: "自然、明亮，也带一点轻盈的日常感；适合在街景、花影和柔和光线里呈现松弛的现场气息。",
  LMH: "清爽、明朗，站在浅草寺这样的传统街景里有很自然的少年感；适合用干净的构图保留人物和城市记忆之间的距离。",
  momo: "柔和、亲近，笑容和姿态都有轻盈的日常感；适合在芝公园、浅草寺一类有生活气息的地点里拍出温暖的叙事。",
  闻轩: "气质安静而有存在感，适合东京塔、赤羽桥与六本木这样的城市线条；画面可以在克制的色彩里保留清晰的情绪。",
  一口榴莲派: "一口榴莲派的镜头气质明亮而松弛，适合在自然光与日常场景里呈现亲近、柔和的肖像感。轻微的动作、眼神和衣着细节，会让画面保留一种有记忆点的故事性。",
  LI: "简洁、清透，适合被放在更开放的肖像档案里观看；画面重点落在人物轮廓、自然表情和当下的光线上。",
  Model: "更像一组开放的肖像档案，保留不同人物在不同场景里的轮廓、情绪和光线。",
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
  const seen = new Set();
  return listEntries(dir)
    .filter((entry) => entry.isFile() && isImage(entry.name))
    .map((entry) => path.join(dir, entry.name))
    .filter((filePath) => {
      const hash = crypto.createHash("sha1").update(fs.readFileSync(filePath)).digest("hex");
      if (seen.has(hash)) return false;
      seen.add(hash);
      return true;
    })
    .map((filePath) => toAssetPath(filePath))
    .sort(compareName);
}

function toAssetPath(filePath) {
  return path.relative(ROOT, filePath).split(path.sep).join("/");
}

function thumbPathFor(assetPath) {
  const thumbPath = assetPath.replace(/^assets\/photos\//, "assets/thumbs/").replace(/\.[^.]+$/, ".jpg");
  return fs.existsSync(path.join(ROOT, ...thumbPath.split("/"))) ? thumbPath : assetPath;
}

function collectPhotoPaths(value, paths = new Set()) {
  if (typeof value === "string") {
    if (value.startsWith("assets/photos/")) paths.add(value);
    return paths;
  }
  if (Array.isArray(value)) {
    value.forEach((item) => collectPhotoPaths(item, paths));
    return paths;
  }
  if (!value || typeof value !== "object") return paths;
  Object.values(value).forEach((item) => collectPhotoPaths(item, paths));
  return paths;
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
    人像摄影: `围绕 ${projectName} 展开的人物章节，保留光线、空间与情绪之间的细微变化。`,
    自然风光: `${projectName} 里的颜色、风与季节痕迹，被整理成一组适合慢慢观看的自然手稿。`,
    人文建筑: `${projectName} 记录建筑、街区与人的尺度，让空间里的光和时间成为画面的一部分。`,
    城市印象: `${projectName} 里的街道、建筑与光线，构成旅途中关于城市的影像注脚。`,
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
    .sort((a, b) => {
      const ai = portraitCollectionOrder.indexOf(a);
      const bi = portraitCollectionOrder.indexOf(b);
      if (ai !== -1 || bi !== -1) return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
      return compareName(a, b);
    })
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
  const sectionId = sectionConfig[sectionName]?.id || slug(sectionName);
  const childDirs = listDirs(dir);
  const directPhotos = listImages(dir);

  if (!childDirs.length) {
    if (!directPhotos.length) return [];
    const meta = fallbackProject(sectionName, "", directPhotos);
    return [{ ...meta, href: meta.href || `gallery.html?section=${sectionId}&project=${meta.id}`, photos: directPhotos }];
  }

  const projects = childDirs
    .map((projectName) => {
      const photos = listImages(path.join(dir, projectName));
      if (!photos.length) return null;
      const meta = fallbackProject(sectionName, projectName, photos);
      return { ...meta, href: meta.href || `gallery.html?section=${sectionId}&project=${meta.id}`, photos };
    })
    .filter(Boolean);

  if (directPhotos.length) {
    const meta = fallbackProject(sectionName, "", directPhotos);
    projects.unshift({ ...meta, href: meta.href || `gallery.html?section=${sectionId}&project=${meta.id}`, photos: directPhotos });
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
const thumbnailMap = Object.fromEntries(
  Array.from(collectPhotoPaths({ portraitCollectionList, portraitProjects, sitePortfolioSections })).map((photoPath) => [
    photoPath,
    thumbPathFor(photoPath),
  ]),
);

const output = `// This file is generated by scripts/generate-gallery-data.mjs.
// Edit folders under assets/photos, then run: npm run generate:gallery

const localImage = (path) => encodeURI(path);
const thumbnailMap = ${serialize(thumbnailMap)};
const thumbImage = (path) => encodeURI(thumbnailMap[path] || path);

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
