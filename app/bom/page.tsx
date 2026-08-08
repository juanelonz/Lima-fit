import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "BOM | limafit",
  description: "Lista de materiales del equipo limafit.",
}

export default function BomPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto flex min-h-[calc(100vh-10rem)] max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Documentación técnica
          </p>
          <h1 className="mt-2 text-3xl font-light tracking-tight sm:text-4xl">
            BOM — AS-RF1.A
          </h1>
        </div>

        <div className="min-h-[70vh] flex-1 overflow-hidden rounded-lg border bg-white shadow-sm">
          <object
            data="/SVG%20Armado/AS-RF1.A.svg"
            type="image/svg+xml"
            aria-label="Plano BOM AS-RF1.A"
            className="h-full min-h-[70vh] w-full"
          >
            <p className="p-6 text-sm text-muted-foreground">
              No se pudo cargar el plano. Descargalo desde el enlace directo: {" "}
              <a
                href="/SVG%20Armado/AS-RF1.A.svg"
                className="underline underline-offset-4"
              >
                AS-RF1.A.svg
              </a>
            </p>
          </object>
        </div>

        <section className="space-y-6">
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Diagramas de armado
            </p>
            <h2 className="mt-2 text-2xl font-light tracking-tight sm:text-3xl">
              PASOS 1 a 11 + FIN
            </h2>
            <div className="mt-6 space-y-6">
              {[
                { label: "PASO 1", href: "/SVG%20Armado/PASO1.a.svg" },
                { label: "PASO 2", href: "/SVG%20Armado/PASO%202.svg" },
                { label: "PASO 3", href: "/SVG%20Armado/PASO%203.svg" },
                { label: "PASO 4", href: "/SVG%20Armado/PASO%204.svg" },
                { label: "PASO 5", href: "/SVG%20Armado/PASO%205.svg" },
                { label: "PASO 6", href: "/SVG%20Armado/PASO%206.svg" },
                { label: "PASO 7", href: "/SVG%20Armado/PASO%207.svg" },
                { label: "PASO 8", href: "/SVG%20Armado/PASO%208.svg" },
                { label: "PASO 9", href: "/SVG%20Armado/PASO%209.svg" },
                { label: "PASO 10", href: "/SVG%20Armado/PASO%2010.svg" },
                { label: "PASO 11", href: "/SVG%20Armado/PASO%2011.svg" },
                { label: "FIN", href: "/SVG%20Armado/Fin.svg" },
              ].map((item) => (
                <div key={item.label} className="overflow-hidden rounded-lg border bg-white shadow-sm">
                  <div className="border-b bg-white px-4 py-3">
                    <p className="font-medium text-slate-900">{item.label}</p>
                  </div>
                  <object
                    data={item.href}
                    type="image/svg+xml"
                    aria-label={`Plano ${item.label}`}
                    className="min-h-[36vh] w-full bg-white sm:min-h-[50vh] md:min-h-[60vh]"
                  >
                    <div className="p-4 text-sm text-muted-foreground">
                      No se pudo cargar {item.label}. Descargalo desde {" "}
                      <a href={item.href} className="underline underline-offset-4">
                        {item.label}.svg
                      </a>
                    </div>
                  </object>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
