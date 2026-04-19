import { cookies } from "next/headers";
import { jwtVerify } from "jose";

export async function GET() {
  const token = cookies().get("_vercel_jwt")?.value;

  if (!token) {
    return Response.json({ user: null }, { status: 200 });
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWTSECRET);
    const { payload } = await jwtVerify(token, secret);
    return Response.json({ user: payload }, { status: 200 });
  } catch (error) {
    console.error("/api/me JWT verify error:", error);
    return Response.json({ user: null }, { status: 401 });
  }
}