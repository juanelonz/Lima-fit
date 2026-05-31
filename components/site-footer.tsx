import { Logo } from "@/components/logo"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <Logo wordClassName="text-background" />
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-background/60">
            Reformers de Pilates, diseñados y fabricados en CABA para todo el pais.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-10 gap-y-3 text-sm">
          <a href="#specs" className="text-background/70 hover:text-background">
            Especificaciones
          </a>
          <a href="#contact" className="text-background/70 hover:text-background">
            Contacto
          </a>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-sm text-background/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} lima. Todos los derechos reservados.</p>
          <p>Equipo de Pilates · lima.fit</p>
        </div>
      </div>
    </footer>
  )
}
