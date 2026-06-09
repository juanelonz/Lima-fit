const specs = [
  { label: "Estructura", value: "Acero al carbono con recubrimiento electrostático" },
  { label: "Carro", value: "Contrachapado de arce laqueado" },
  { label: "Tapicería", value: "Vinilo grado marino" },
  { label: "Resortes", value: "5 resortes 2R;1AZ;1AM;1V" },
  { label: "Barra de pies", value: "6 posiciones con bloqueo" },
  { label: "Rieles", value: "Rodamientos sellados" },
  { label: "Peso máx. de usuario", value: "150 kg / 330 lb" },
  { label: "Garantía", value: "5 años estructura" },
]

export function Specs() {
  return (
    <section id="specs" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Especificaciones
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Los números detrás del movimiento.
          </h2>
        </div>

        <dl className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {specs.map((spec) => (
            <div key={spec.label} className="bg-card p-6">
              <dt className="text-sm text-muted-foreground">{spec.label}</dt>
              <dd className="mt-2 font-display text-lg font-semibold text-foreground">
                {spec.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
