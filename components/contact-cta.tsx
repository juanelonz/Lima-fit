import { Button } from "@/components/ui/button"
import { Mail, Phone } from "lucide-react"
import { LimaMark } from "@/components/logo"

export function ContactCta() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="flex flex-col items-center text-center">
          <LimaMark className="size-10 text-lime" />
          <h2 className="mt-6 max-w-2xl text-balance font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            ¿Listo para equipar tu estudio con lima?
          </h2>
          <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Cuéntanos sobre tu espacio y cuántos reformers necesitas. Prepararemos
            una cotización y te guiaremos por las opciones.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90"
            >
              <a href="mailto:hello@lima.fit">
                <Mail className="size-4" />
                hello@lima.fit
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-foreground/15"
            >
              <a href="tel:+10000000000">
                <Phone className="size-4" />
                +54 (11) 3265-4520
              </a>
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            O visítanos en{" "}
            <a
              href="https://lima.fit"
              className="font-medium text-foreground underline underline-offset-4"
            >
              lima.fit
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
