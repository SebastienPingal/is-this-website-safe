export type AngleId = "cyber" | "ux" | "social"

export const ANGLES: AngleId[] = ["cyber", "ux", "social"]

export const ANGLE_CONTENT: Record<
  AngleId,
  { label: string; title: string; description: string }
> = {
  cyber: {
    label: "🛡️ Anti-arnaque",
    title: "Le Waze du Web",
    description:
      "Sois alerté en temps réel par la communauté quand un site paraît suspect ou trompeur",
  },
  ux: {
    label: "⚡ Qualité",
    title: "Fini les sites lents et bourrés de popups",
    description: "Note-les en 1 clic et aide le web à devenir plus propre",
  },
  social: {
    label: "🤝 Communauté",
    title: "Ton avis compte enfin sur chaque URL",
    description:
      "Rejoins une communauté qui note les sites et partage des retours courts et utiles",
  },
}

export function isAngleId(value: unknown): value is AngleId {
  return value === "cyber" || value === "ux" || value === "social"
}

