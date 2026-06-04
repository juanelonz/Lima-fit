import { cn } from "@/lib/utils"

type LogoProps = {
  className?: string
}

/**
 * lima brand mark — a four-petal pinwheel flower.
 * Petals are teardrops rotated 90deg around the center with a slight spin
 * to create the pinwheel motion of the original mark.
 */
export function LimaMark({ className }: { className?: string }) {
  const petal = "M50 50 C 31 41, 29 15, 49 8 C 59 24, 61 39, 50 50 Z"
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn("h-7 w-7", className)}
      role="img"
      aria-label="lima"
      fill="currentColor"
    >
      <g>
        <path d={petal} transform="rotate(0 50 50)" />
        <path d={petal} transform="rotate(90 50 50)" />
        <path d={petal} transform="rotate(180 50 50)" />
        <path d={petal} transform="rotate(270 50 50)" />
      </g>
    </svg>
  )
}

/**
 * lima full brand logo image.
 */
export function Logo({ className }: LogoProps) {
  return (
    <img
      src="/Logotipo_Limafit_--15.svg"
      alt="lima"
      className={cn("h-30 w-auto", className)}
    />
  )
}
