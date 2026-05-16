# Demon Photography

一个适合 GitHub Pages 的个人摄影主页模板。页面包含首页视觉区、相机优先的作品集、自动横向滚动分类、按时间地点整理的照片集、预约拍摄表单、灯箱预览、三语言切换、移动端作品目录、关于与联系方式。

## 替换照片

1. 把照片放到 `assets/photos/`。
2. 打开 `script.js`，把 `collections` 里的 `src` 改成你的图片路径，例如 `assets/photos/tokyo-night.jpg`。
3. 修改 `title`、`meta` 和 `alt`。`title` 与 `meta` 已支持中文、英文、日语三种写法。
4. 作品集按 `portfolioGroups` 管理，可在相机摄影或手机摄影下继续增加分类、时间、地点和照片。

## 修改个人信息

- `script.js` 中的 `translations` 可以修改中文、英文、日语页面文案。
- `script.js` 顶部的 `contactEmail` 控制预约表单发送到哪个邮箱。
- `index.html` 中的 `Demon Photography` 可以直接替换。
- `styles.css` 中的 `--accent` 可以调整主色。

## 本地预览

直接打开 `index.html` 即可，也可以在仓库目录运行：

```bash
python3 -m http.server 8000
```

然后访问 `http://localhost:8000`。
