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
        <ContactCta />
      </main>
      <SiteFooter />
    </div>
  )
}
