const ALLOWED_EMAIL = "763525586@qq.com";

export function getAccessEmail(request) {
  return (
    request.headers.get("Cf-Access-Authenticated-User-Email") ||
    request.headers.get("X-Admin-Email") ||
    ""
  ).toLowerCase();
}

export function requireAdmin(request) {
  const email = getAccessEmail(request);
  if (email !== ALLOWED_EMAIL) {
    return new Response(
      JSON.stringify({
        ok: false,
        message: "无权访问后台，请使用授权邮箱登录。",
      }),
      {
        status: 403,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      },
    );
  }
  return null;
}

export function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
