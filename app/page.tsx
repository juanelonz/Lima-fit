import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Specs } from "@/components/specs"
import { ContactCta } from "@/components/contact-cta"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Specs />
        <a
          href="https://wa.me/541132654520"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
          className="fixed right-4 bottom-6 z-50 inline-flex h-16 w-16 items-center justify-center rounded-full shadow-xl shadow-slate-900/20 transition-opacity hover:opacity-95"
        >
          <img
            src="/whatsapp-logo.svg"
            alt="WhatsApp"
            className="h-12 w-12"
          />
        </a>

        <ContactCta />
      </main>
      <SiteFooter />
    </div>
  )
}
