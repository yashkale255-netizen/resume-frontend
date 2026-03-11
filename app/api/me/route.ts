import { cookies } from "next/headers";
import { jwtVerify } from "jose";

export async function GET() {
  const token = cookies().get("tokenCookie")?.value;

  if (!token) {
    return Response.json({ user: null });
  }
  const secret = new TextEncoder().encode(process.env.JWTSECRET);
  const { payload } = await jwtVerify(token, secret);

  return Response.json({ user: payload });
}