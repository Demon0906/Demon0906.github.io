# Demon Photography

一个适合 GitHub Pages 的个人摄影主页模板。页面包含首页视觉区、作品筛选、灯箱预览、专题展示、关于与联系区。

## 替换照片

1. 把照片放到 `assets/photos/`。
2. 打开 `script.js`，把 `photos` 数组里的 `src` 改成你的图片路径，例如 `assets/photos/tokyo-night.jpg`。
3. 修改 `title`、`category`、`meta` 和 `alt`。

## 修改个人信息

- `index.html` 中的 `Demon Photography`、关于文案和联系方式都可以直接替换。
- `styles.css` 中的 `--accent` 可以调整主色。

## 本地预览

直接打开 `index.html` 即可，也可以在仓库目录运行：

```bash
python3 -m http.server 8000
```

然后访问 `http://localhost:8000`。
