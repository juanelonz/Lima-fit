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
          className="fixed right-4 bottom-6 z-50 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-slate-900/20 transition-colors hover:bg-[#20ba5a]"
        >
          <svg
            className="w-8 h-8 fill-current"
            viewBox="0 0 448 512"
            aria-hidden="true"
          >
            <path d="M380.9 97.1C339 55.2 281.4 32 220.3 32 99.6 32 0 131.6 0 252.3c0 44.6 12.7 88.2 36.9 125.2L0 480l106.1-27.8c34.4 18.8 73.2 28.6 113.8 28.6 120.7 0 220.3-99.6 220.3-220.3 0-61-23.2-118.6-65.3-160.4zm-45.3 241c-4.2 11.8-24.6 22.3-43.8 29.9-18.4 7.4-31.8 7.8-46.8 4.6-13.2-2.9-25.6-8.6-38.1-15.4-14.9-8.1-28-18.7-39.2-30.8-11.3-12.1-20.2-25.9-26.7-40.8-6.4-14.9-9.7-30.8-9.7-47.4 0-28.9 11.3-56.1 31.8-76.5 20.5-20.5 47.6-31.8 76.5-31.8 28.9 0 56.1 11.3 76.5 31.8 20.5 20.5 31.8 47.6 31.8 76.5 0 17.4-3.3 34.2-9.7 50.1zM318.3 217.2c-4.5-2.2-26.5-13-30.6-14.4-4.1-1.4-7.1-2.1-10.1 2.1-3 4.2-11.6 14.4-14.2 17.3-2.6 2.9-5.3 3.2-9.8 1-4.5-2.2-17.1-6.3-32.6-19.6-15.4-13.3-25.4-29.1-28.4-33.2-3-4.1-.3-6.3 2-8.5 2.1-2.1 4.7-5.4 7.1-8.3 2.4-2.9 3.2-5 4.8-8.2 1.5-3.2.8-6-0.4-8.2-1.2-2.2-10.1-24.4-13.8-33.4-3.6-8.9-7.3-7.7-10.1-7.8-2.6-.1-5.5-.1-8.4-.1-2.9 0-7.6 1.1-11.6 5.5-4 4.4-15.2 14.9-15.2 36.3 0 21.4 15.7 41.9 17.9 44.8 2.1 2.9 30.7 46.9 74.4 64 43.7 17.1 50.2 15.2 59.3 14.2 9.1-1 28.7-11.7 33-23 4.3-11.4 4.3-21.2 3-23.2-1.3-2-4.7-3.2-9.2-5.3z" />
          </svg>
        </a>

        <ContactCta />
      </main>
      <SiteFooter />
    </div>
  )
}
