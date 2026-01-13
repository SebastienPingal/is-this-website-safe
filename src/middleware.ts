import { NextResponse, type NextRequest } from "next/server"

const COOKIE_KEY = "webscore_angle_v1"
const ANGLES = ["cyber", "ux", "social"] as const
type AngleId = (typeof ANGLES)[number]

function isAngleId(value: unknown): value is AngleId {
  return value === "cyber" || value === "ux" || value === "social"
}

function pickRandomAngle(): AngleId {
  const idx = Math.floor(Math.random() * ANGLES.length)
  return ANGLES[idx] ?? "cyber"
}

export function middleware(req: NextRequest) {
  const existing = req.cookies.get(COOKIE_KEY)?.value

  if (isAngleId(existing)) {
    const res = NextResponse.next()
    res.headers.set("x-webscore-mw", `hit; angle=${existing}`)
    return res
  }

  const res = NextResponse.next()
  const chosen = pickRandomAngle()
  res.cookies.set(COOKIE_KEY, chosen, {
    path: "/",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30,
  })
  res.headers.set("x-webscore-mw", `set; angle=${chosen}`)
  return res
}

export const config = {
  matcher: ["/:path*"],
}

