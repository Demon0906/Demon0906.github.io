# Demon Photography

一个适合 GitHub Pages 的个人摄影主页模板。页面包含首页视觉区、人像摄影、自然风光、旅游记忆、摄影故事四大板块，每个板块下方以独立项目形式展示摄影集，并保留弹窗预约问卷、分类联系方式、灯箱预览、三语言切换、移动端作品目录、关于信息。

## 替换照片

1. 把照片放到 `assets/photos/`。
2. 打开 `script.js`，把 `collections` 里的 `src` 改成你的图片路径，例如 `assets/photos/tokyo-night.jpg`。
3. 修改 `title`、`meta` 和 `alt`。`title` 与 `meta` 已支持中文、英文、日语三种写法。
4. 作品集按 `portfolioSections` 管理，可在人像摄影、自然风光、旅游记忆、摄影故事下继续增加独立项目。

## 修改个人信息

- `script.js` 中的 `translations` 可以修改中文、英文、日语页面文案。
- 预约问卷在 `index.html` 的 `#booking-modal` 中维护，提交后显示页面确认提示。
- 社交媒体图标链接在 `index.html` 的 `.social-links` 中维护，后续把 `href="#"` 改成真实主页即可。
- `index.html` 中的 `Demon Photography` 可以直接替换。
- `styles.css` 中的 `--accent` 可以调整主色。

## 本地预览

直接打开 `index.html` 即可，也可以在仓库目录运行：

```bash
python3 -m http.server 8000
```

然后访问 `http://localhost:8000`。
