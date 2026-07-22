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
            data="/AS-RF1.A.svg"
            type="image/svg+xml"
            aria-label="Plano BOM AS-RF1.A"
            className="h-full min-h-[70vh] w-full"
          >
            <p className="p-6 text-sm text-muted-foreground">
              No se pudo cargar el plano. Descargalo desde el enlace directo: {" "}
              <a
                href="/AS-RF1.A.svg"
                className="underline underline-offset-4"
              >
                AS-RF1.A.svg
              </a>
            </p>
          </object>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
