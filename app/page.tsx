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
  className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold py-2 px-4 rounded-full hover:bg-[#20ba5a] transition-colors"
>
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 11.966.01c3.178.001 6.165 1.24 8.413 3.488 2.248 2.248 3.487 5.236 3.487 8.414 0 6.562-5.338 11.901-11.91 11.901-2.005-.001-3.975-.51-5.728-1.479L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.003-2.637-1.03-5.114-2.916-7-.001-.001-.001-.001-.002-.001-1.885-1.884-4.39-2.923-7.025-2.924C6.012 1.165 1.59 5.589 1.587 11.03c0 1.691.443 3.344 1.284 4.79l-.999 3.648 3.733-.979z"/>
  </svg>
</a>

        <ContactCta />
      </main>
      <SiteFooter />
    </div>
  )
}
