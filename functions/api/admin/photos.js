import { json, requireAdmin } from "./_auth.js";

export async function onRequestGet(context) {
  const forbidden = requireAdmin(context.request);
  if (forbidden) return forbidden;

  return json({
    ok: true,
    message: "后台照片接口已启用。绑定 R2 与 D1 后，这里会返回照片列表。",
    photos: [],
  });
}

export async function onRequestPost(context) {
  const forbidden = requireAdmin(context.request);
  if (forbidden) return forbidden;

  const formData = await context.request.formData();
  const files = formData.getAll("photos").filter((file) => typeof file === "object" && file.name);

  if (!files.length) {
    return json({ ok: false, message: "请至少选择一张照片。" }, 400);
  }

  const hasStorage = context.env.PHOTO_BUCKET && context.env.PORTFOLIO_DB;
  if (!hasStorage) {
    return json(
      {
        ok: false,
        message: "后台已收到请求，但尚未绑定 R2 bucket 与 D1 database。",
        next: "请在 Cloudflare Pages 的 Settings > Bindings 中绑定 PHOTO_BUCKET 和 PORTFOLIO_DB。",
        received: files.map((file) => ({
          name: file.name,
          size: file.size,
          type: file.type,
        })),
      },
      501,
    );
  }

  return json({
    ok: true,
    message: "存储绑定已存在。下一步可接入真实上传、缩略图生成和数据库写入逻辑。",
    received: files.length,
  });
}
