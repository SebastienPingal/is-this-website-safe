export default async function Home() {
  const angle = await getAngleFromCookie()
  const angleContent = ANGLE_CONTENT[angle]

  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 py-10 sm:py-14">
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-foreground text-background flex size-9 items-center justify-center rounded-lg text-sm font-semibold">
              WS
            </div>
            <div className="flex flex-col">
              <span className="leading-none font-semibold">WebScore</span>
              <span className="text-muted-foreground text-xs">
                Ne naviguez plus à l’aveugle
              </span>
            </div>
          </div>

          <a
            href="#waitlist"
            className="text-muted-foreground hover:text-foreground text-sm underline underline-offset-4"
          >
            Liste d’attente
          </a>
        </header>

        <main className="flex flex-col gap-16">
          <section className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-muted text-muted-foreground inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs">
                  <span className="bg-foreground size-1.5 rounded-full" />
                  Extension navigateur
                </span>
                <span className="bg-muted text-muted-foreground inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs">
                  <span className="bg-foreground size-1.5 rounded-full" />
                  Vote en 1 clic
                </span>
                <span className="bg-muted text-muted-foreground inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs">
                  <span className="bg-foreground size-1.5 rounded-full" />
                  Intelligence collective
                </span>
              </div>

              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Et si chaque site web avait une note donnée par ceux qui le visitent
                vraiment
              </h1>
              <p className="text-muted-foreground max-w-2xl text-pretty text-lg leading-8">
                WebScore est une extension minimaliste qui ajoute une couche de
                confiance et de transparence à chaque URL, directement dans ton
                navigateur
              </p>
            </div>

            <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
              <div className="bg-card flex w-full flex-col gap-6 rounded-xl border p-6 lg:max-w-xl">
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-medium">🚀 Accès anticipé</p>
                  <p className="text-muted-foreground text-sm">
                    Laisse ton email pour être dans les premiers à installer
                    l’extension
                  </p>
                </div>
                <div id="waitlist" className="scroll-mt-24">
                  <WaitlistForm angle={angle} />
                </div>
              </div>

              <div className="flex w-full flex-col gap-6">
                <div className="bg-card flex flex-col gap-2 rounded-xl border p-6">
                  <p className="text-muted-foreground text-xs font-medium">
                    {angleContent.label}
                  </p>
                  <p className="text-base font-semibold">{angleContent.title}</p>
                  <p className="text-muted-foreground text-sm leading-7">
                    {angleContent.description}
                  </p>
                </div>

                <div className="bg-card flex w-full flex-col gap-5 rounded-xl border p-6">
                  <p className="text-sm font-medium">🟢🟠🔴 L’indicateur discret</p>
                  <p className="text-muted-foreground text-sm leading-7">
                    Une petite pastille change de couleur selon la fiabilité du
                    domaine, d’après les votes et les retours réels
                  </p>

                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <span className="size-2 rounded-full bg-emerald-500" />
                      <p className="text-sm">
                        <span className="font-medium">Vert</span> : top, fiable et
                        agréable
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="size-2 rounded-full bg-amber-500" />
                      <p className="text-sm">
                        <span className="font-medium">Orange</span> : mitigé, à
                        surveiller
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="size-2 rounded-full bg-rose-500" />
                      <p className="text-sm">
                        <span className="font-medium">Rouge</span> : à éviter,
                        expérience très mauvaise ou signaux d’arnaque
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold tracking-tight">
                Le problème, aujourd’hui
              </h2>
              <p className="text-muted-foreground max-w-3xl leading-7">
                Le web est devenu une jungle : dropshipping douteux, fake news, pages
                noyées sous la pub, services clients fantômes. On clique sans savoir
                ce qui nous attend
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="bg-card flex flex-col gap-2 rounded-xl border p-6">
                <p className="text-sm font-medium">Temps perdu</p>
                <p className="text-muted-foreground text-sm leading-7">
                  Tu te rends compte trop tard que le contenu est inutilisable
                </p>
              </div>
              <div className="bg-card flex flex-col gap-2 rounded-xl border p-6">
                <p className="text-sm font-medium">Confiance cassée</p>
                <p className="text-muted-foreground text-sm leading-7">
                  Impossible de savoir si un site est fiable avant d’y entrer
                </p>
              </div>
              <div className="bg-card flex flex-col gap-2 rounded-xl border p-6">
                <p className="text-sm font-medium">Aucune mémoire</p>
                <p className="text-muted-foreground text-sm leading-7">
                  Tes expériences restent privées, et les autres refont les mêmes
                  erreurs
                </p>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold tracking-tight">
                La solution : WebScore
              </h2>
              <p className="text-muted-foreground max-w-3xl leading-7">
                Un indicateur de réputation universel : simple, rapide, communautaire
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              <div className="bg-card flex flex-col gap-4 rounded-xl border p-6">
                <p className="text-sm font-medium">1 clic pour voter</p>
                <p className="text-muted-foreground text-sm leading-7">
                  Pouce bleu si c’est clean et utile, pouce rouge si c’est une arnaque
                  ou illisible
                </p>
              </div>
              <div className="bg-card flex flex-col gap-4 rounded-xl border p-6">
                <p className="text-sm font-medium">Résumé instantané</p>
                <p className="text-muted-foreground text-sm leading-7">
                  “Fiable mais trop de pubs”, “Support excellent”, “Désabonnement
                  difficile”
                </p>
              </div>
              <div className="bg-card flex flex-col gap-4 rounded-xl border p-6">
                <p className="text-sm font-medium">Le grand classement</p>
                <p className="text-muted-foreground text-sm leading-7">
                  Top et flop mondial des domaines les plus appréciés, par catégories
                </p>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold tracking-tight">FAQ</h2>
              <p className="text-muted-foreground max-w-3xl leading-7">
                Les réponses aux questions les plus fréquentes
              </p>
            </div>

            <Faq />
          </section>

          <section className="bg-card flex flex-col gap-6 rounded-xl border p-6">
            <h2 className="text-xl font-semibold tracking-tight">
              Prêt à ne plus naviguer à l’aveugle
            </h2>
            <p className="text-muted-foreground max-w-2xl text-sm leading-7">
              WebScore est fait pour te faire gagner du temps et éviter les mauvaises
              surprises. Rejoins la liste d’attente
            </p>
            <WaitlistForm angle={angle} />
          </section>
        </main>

        <footer className="text-muted-foreground flex flex-col gap-2 text-sm">
          <p>© {new Date().getFullYear()} WebScore</p>
          <p>Tu veux être prévenu au lancement ? Inscris-toi à la liste d’attente</p>
        </footer>
      </div>
    </div>
  )
}

import { cookies } from "next/headers"

import { WaitlistForm } from "@/components/waitlist-form"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ANGLE_CONTENT, type AngleId, isAngleId } from "@/lib/angle"

async function getAngleFromCookie(): Promise<AngleId> {
  const cookieStore = await cookies()
  const value = cookieStore.get("webscore_angle_v1")?.value
  if (isAngleId(value)) return value
  return "cyber"
}

function Faq() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Est-ce que WebScore lit mes données personnelles ?</AccordionTrigger>
        <AccordionContent>
          Non. L’objectif est d’être minimaliste : une note par domaine et des retours
          courts, pas une extension intrusive
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Comment éviter les votes trolls ?</AccordionTrigger>
        <AccordionContent>
          On peut combiner plusieurs signaux : historique, fréquence, cohérence, et
          détecter les pics anormaux
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Ça marche sur quels navigateurs ?</AccordionTrigger>
        <AccordionContent>
          Le plan est de viser Chromium (Chrome, Brave, Edge) en premier, puis Firefox
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Quand est-ce que je peux l’installer ?</AccordionTrigger>
        <AccordionContent>
          On ouvre les premiers accès dès qu’une première version est prête. La liste
          d’attente sert à inviter les premiers testeurs
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
