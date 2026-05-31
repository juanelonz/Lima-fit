import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { LimaMark } from "@/components/logo"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground">
            <LimaMark className="size-3.5 text-lime" />
            Equipo de Pilates con diseñado e ingeniería
          </span>

          <h1 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Reformers hechos para rendir, construidos para durar.
          </h1>

          <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
            lima diseña y fabrica reformers de Pilates: perfiles de
            precisión, carro de deslizamiento silencioso y acabados que resisten
            las exigencias diarias de un estudio.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90"
            >
              <a href="#specs">
                Ver especificaciones
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-foreground/15"
            >
              <a href="#contact">Habla con nuestro equipo</a>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-5 -top-5 z-10 hidden rounded-xl bg-lime px-4 py-3 lg:block">
            <p className="font-display text-sm font-semibold leading-tight text-foreground">
              Hecho a mano
              <br />
              en casa
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-secondary">
            <Image
              src="/images/detail-shoulder.jpg"
              alt="Detalle del shoulder rest acolchado y el brazo pivotante de un reformer lima"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Banda de perfil completo a todo lo ancho */}
      <div className="mx-auto max-w-6xl px-6 pb-16">
        <figure className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-secondary sm:aspect-[16/7]">
          <Image
            src="/images/reformer-profile.jpg"
            alt="Perfil lateral completo de un reformer de Pilates lima con estructura blanca y carro negro"
            fill
            className="object-cover"
          />
          <figcaption className="absolute bottom-4 left-4 rounded-full bg-foreground/85 px-4 py-1.5 text-xs font-medium tracking-wide text-background backdrop-blur">
            Reformer lima · Serie Studio
          </figcaption>
        </figure>
      </div>

      <div className="border-y border-border bg-secondary/50">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-8 md:grid-cols-4">
          {[
            { value: "12 pasos", label: "Inspección de calidad" },
            { value: "5 años", label: "Garantía de estructura" },
            { value: "300+", label: "Estudios equipados" },
            { value: "100%", label: "Fabricación propia" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-2xl font-semibold text-foreground">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
