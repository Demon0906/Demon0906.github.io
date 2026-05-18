# Cloudflare Pages 部署说明

这个站点是静态摄影网站，适合使用 Cloudflare Pages + Cloudflare DNS 部署。

## 1. 接入 Cloudflare Pages

1. 打开 [Cloudflare Dashboard](https://dash.cloudflare.com/)。
2. 进入 `Workers & Pages` -> `Create application` -> `Pages`。
3. 选择 `Connect to Git`，授权并选择 GitHub 仓库 `Demon0906/demon.github.io`。
4. 构建设置：
   - Framework preset: `None`
   - Build command: 留空
   - Build output directory: `.`
5. 点击部署。部署完成后会得到一个 `*.pages.dev` 访问地址。

## 2. 绑定自定义域名

1. 在 Pages 项目中进入 `Custom domains`。
2. 添加你的域名，例如 `example.com` 或 `www.example.com`。
3. 如果域名还没有接入 Cloudflare，需要在域名注册商后台把 Nameserver 改成 Cloudflare 提供的两个 Nameserver。
4. Cloudflare 会自动创建或提示创建 DNS 记录：
   - 根域名通常使用 Cloudflare 的 CNAME flattening 指向 Pages 项目。
   - `www` 可添加 CNAME 指向 Pages 项目地址。

## 3. 推荐设置

1. `SSL/TLS` 设置为 `Full`。
2. `Speed` 中开启 `Brotli`。
3. 保留项目根目录的 `_headers` 文件，Cloudflare Pages 会按它缓存图片和静态文件。

## 4. 图片加载策略

当前站点已使用：

- `assets/thumbs`：首页、作品集卡片和列表页优先加载缩略图。
- `assets/photos`：点击照片打开大图时再加载高清原图。

以后新增照片时，请把原图放入 `assets/photos`，并为同路径照片准备缩略图到 `assets/thumbs`，文件名统一为 `.jpg`。例如：

- 原图：`assets/photos/自然风光/枫叶/DSC08494.JPG`
- 缩略图：`assets/thumbs/自然风光/枫叶/DSC08494.jpg`
