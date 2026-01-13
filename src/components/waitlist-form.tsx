"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type WaitlistState =
  | { status: "idle"; message?: string }
  | { status: "loading"; message?: string }
  | { status: "success"; message: string }
  | { status: "error"; message: string }

export function WaitlistForm({ angle }: { angle?: string }) {
  const [state, setState] = React.useState<WaitlistState>({ status: "idle" })
  const [email, setEmail] = React.useState("")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const nextEmail = email.trim()
    if (!nextEmail) {
      setState({ status: "error", message: "Entre un email valide" })
      return
    }

    setState({ status: "loading" })

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email: nextEmail, angle: angle ?? "unknown" }),
      })

      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean
        message?: string
      }

      if (!res.ok) {
        setState({
          status: "error",
          message: data.message ?? "Impossible pour le moment, réessaie plus tard",
        })
        return
      }

      setEmail("")
      setState({
        status: "success",
        message: data.message ?? "C’est noté, on te tient au courant",
      })
    } catch {
      setState({
        status: "error",
        message: "Problème de connexion, réessaie",
      })
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full flex-col gap-3">
      <div className="flex w-full flex-col gap-3 sm:flex-row">
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="email"
          autoComplete="email"
          placeholder="ton@email.com"
          aria-label="Email"
          required
        />
        <Button type="submit" className="sm:w-[180px]" disabled={state.status === "loading"}>
          {state.status === "loading" ? "Envoi..." : "Rejoindre la waitlist"}
        </Button>
      </div>
      <p
        className="text-muted-foreground text-sm"
        role={state.status === "error" ? "alert" : undefined}
      >
        {state.status === "success" && <span className="text-foreground">✅ </span>}
        {state.status === "error" && <span className="text-foreground">⚠️ </span>}
        {state.message ?? "Pas de spam. 1 email au lancement, c’est tout"}
      </p>
    </form>
  )
}

