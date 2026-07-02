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

## 5. 后台管理与权限

站点已预留后台页面：

- 后台地址：`/admin.html`
- 管理 API：`/api/admin/photos`
- 授权邮箱：`763525586@qq.com`

后台应通过 Cloudflare Access 保护，而不是自己在网页里写密码。

### 5.1 配置 Cloudflare Access

1. 打开 Cloudflare Dashboard。
2. 进入 `Zero Trust`。
3. 进入 `Access` -> `Applications`。
4. 点击 `Add an application`。
5. 选择 `Self-hosted`。
6. Application domain 填写你的正式域名后台路径，例如：
   - `aoruoqin.com/admin.html`
   - 如需保护 API，可再添加 `aoruoqin.com/api/admin/*`
7. Policy 设置：
   - Action: `Allow`
   - Include: `Emails`
   - Email: `763525586@qq.com`
8. 保存后，只有这个邮箱通过验证后才能打开后台。

Cloudflare Access 会把登录邮箱写入请求头 `Cf-Access-Authenticated-User-Email`。当前 Functions 已根据这个邮箱做二次校验，不匹配会返回 403。

### 5.2 创建 R2 存储桶

1. 进入 Cloudflare Dashboard -> `R2`。
2. 创建 bucket，建议命名为 `demon-photos`。
3. 在 Pages 项目里进入 `Settings` -> `Bindings`。
4. 添加 R2 binding：
   - Variable name: `PHOTO_BUCKET`
   - Bucket: `demon-photos`

后续照片原图、缩略图、带水印预览图都会放在这里。

### 5.3 创建 D1 数据库

1. 进入 Cloudflare Dashboard -> `D1`。
2. 创建 database，建议命名为 `demon_portfolio`。
3. 在 Pages 项目里进入 `Settings` -> `Bindings`。
4. 添加 D1 binding：
   - Variable name: `PORTFOLIO_DB`
   - Database: `demon_portfolio`

后续作品集信息、照片标题、拍摄时间、地点、排序、公开状态都会写入 D1。

### 5.4 当前后台状态

当前版本已经完成：

- `/admin.html` 中文后台界面。
- 文件选择与本地预览。
- `/api/admin/photos` 权限校验。
- 未绑定 R2/D1 时会提示下一步配置。
- 前台照片展示层增加轻水印。

下一步需要在绑定 R2/D1 后，实现真实上传、缩略图生成和数据库写入。
