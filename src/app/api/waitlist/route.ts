export async function POST(req: Request) {
  const body = (await req.json().catch(() => ({}))) as {
    email?: unknown
    angle?: unknown
  }
  const email = typeof body.email === "string" ? body.email.trim() : ""
  const angle = typeof body.angle === "string" ? body.angle.trim() : "unknown"

  if (!email || !email.includes("@") || email.length > 254) {
    return Response.json(
      { ok: false, message: "Email invalide" },
      { status: 400 }
    )
  }

  return Response.json(
    { ok: true, message: "Merci, tu es sur la liste", angle },
    { status: 200 }
  )
}

