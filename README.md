# Demon Atelier

个人摄影主页。页面包含首页视觉区、人像摄影、自然风光、城市印象、日常生活、摄影故事等板块，每个板块下方以独立项目形式展示摄影集，并保留预约问卷、联系方式、灯箱预览、三语言切换、移动端适配和关于信息。

## 更新照片

照片数据由 `scripts/generate-gallery-data.mjs` 自动扫描 `assets/photos/` 生成，不需要手动编辑 `gallery-data.js`。

1. 把原图放到 `assets/photos/` 对应分类文件夹。
2. 把缩略图放到 `assets/thumbs/` 的相同路径，文件名统一为 `.jpg`。
3. 运行：

```bash
npm run generate:gallery
```

4. 提交并推送到 GitHub，Cloudflare Pages 会自动部署。

示例：

```text
assets/photos/自然风光/樱花/DSC00156.JPG
assets/thumbs/自然风光/樱花/DSC00156.jpg
```

如果新增文件夹，例如：

```text
assets/photos/自然风光/银杏/
```

生成脚本会自动把它作为新的摄影集加入网页。

人像摄影支持二级结构：

```text
assets/photos/人像摄影/模特展/Mio/
assets/photos/人像摄影/Live（手机）/Nero/
```

文件夹名会作为模特或项目名称。照片文件名可以写拍摄信息，例如：

```text
模特：Mio；拍摄时间：2026.5；拍摄地点：东京涉谷.jpg
```

## 修改个人信息

- `script.js` 中的 `translations` 可以修改中文、英文、日语页面文案。
- 预约问卷在 `index.html` 的 `#booking-modal` 中维护，提交后显示页面确认提示。
- 社交媒体图标链接在 `index.html` 的 `.social-links` 中维护，后续把 `href="#"` 改成真实主页即可。
- `styles.css` 中的 `--accent` 可以调整主色。

## Cloudflare Pages 构建设置

如果希望每次上传照片到 GitHub 后，Cloudflare 自动重新生成作品集数据，请在 Cloudflare Pages 项目的构建设置中填写：

```text
Build command: npm run build
Build output directory: .
```

如果暂时不改 Cloudflare 设置，也可以在本地运行 `npm run generate:gallery` 后再提交。

## 本地预览

在仓库目录运行：

```bash
npm run generate:gallery
python3 -m http.server 8000
```

然后访问 `http://localhost:8000`。
