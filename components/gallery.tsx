import Image from "next/image"

export function Gallery() {
  return (
    <section id="gallery" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            En detalle
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Cada pieza, pensada y a la vista.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 md:h-[600px] md:grid-cols-4 md:grid-rows-2">
          {/* Toma grande: perfil con caja */}
          <figure className="group relative col-span-2 aspect-[16/11] overflow-hidden rounded-2xl border border-border bg-secondary md:row-span-2 md:aspect-auto md:h-full">
            <Image
              src="/images/reformer-profile-box.jpg"
              alt="Reformer lima con caja de salto negra sobre el carro"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <figcaption className="absolute bottom-4 left-4 rounded-lg bg-lime px-3 py-2">
              <span className="font-display text-sm font-semibold leading-tight text-foreground">
                Sistema modular
                <br />
                con caja de salto
              </span>
            </figcaption>
          </figure>

          {/* Macro del resorte (ancho) */}
          <figure className="group relative col-span-2 aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-secondary md:aspect-auto md:h-full">
            <Image
              src="/images/detail-spring.jpg"
              alt="Detalle macro del mecanismo de resorte y el herraje de un reformer lima"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </figure>

          {/* Postes / risers (vertical) */}
          <figure className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-border bg-secondary md:aspect-auto md:h-full">
            <Image
              src="/images/detail-risers.jpg"
              alt="Postes verticales y cuerdas de un reformer lima"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </figure>

          {/* Vista trasera (vertical) */}
          <figure className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-border bg-secondary md:aspect-auto md:h-full">
            <Image
              src="/images/detail-rear.jpg"
              alt="Vista trasera del shoulder rest y la estructura de un reformer lima"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}
