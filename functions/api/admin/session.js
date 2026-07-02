import { getAccessEmail, json, requireAdmin } from "./_auth.js";

export async function onRequestGet(context) {
  const forbidden = requireAdmin(context.request);
  if (forbidden) return forbidden;

  return json({
    ok: true,
    email: getAccessEmail(context.request),
  });
}
