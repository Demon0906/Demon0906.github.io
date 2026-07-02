const ALLOWED_EMAIL = "763525586@qq.com";

export function getAccessEmail(request) {
  return (
    request.headers.get("Cf-Access-Authenticated-User-Email") ||
    request.headers.get("X-Admin-Email") ||
    ""
  ).toLowerCase();
}

export function isPasswordAuthorized(request, env = {}) {
  const configuredPassword = env.ADMIN_PASSWORD || "";
  const providedPassword = request.headers.get("X-Admin-Password") || "";
  return Boolean(configuredPassword && providedPassword && providedPassword === configuredPassword);
}

export function requireAdmin(request, env = {}) {
  const email = getAccessEmail(request);
  if (email === ALLOWED_EMAIL || isPasswordAuthorized(request, env)) {
    return null;
  }

  if (!env.ADMIN_PASSWORD) {
    return new Response(
      JSON.stringify({
        ok: false,
        message: "后台尚未配置 ADMIN_PASSWORD，请先在 Cloudflare Pages 的变量和密钥中添加。",
      }),
      {
        status: 503,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      },
    );
  }
  return new Response(
    JSON.stringify({
      ok: false,
      message: "密码不正确，或未通过授权邮箱登录。",
    }),
    {
      status: 403,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    },
  );
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
