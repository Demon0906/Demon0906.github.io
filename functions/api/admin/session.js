import { getAccessEmail, isPasswordAuthorized, json, requireAdmin } from "./_auth.js";

export async function onRequestGet(context) {
  const forbidden = requireAdmin(context.request, context.env);
  if (forbidden) return forbidden;

  const email = getAccessEmail(context.request);
  return json({
    ok: true,
    email: email || "ADMIN_PASSWORD",
    mode: email ? "access" : "password",
    passwordAuthorized: isPasswordAuthorized(context.request, context.env),
  });
}
