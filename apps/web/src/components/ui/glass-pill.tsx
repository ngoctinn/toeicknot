import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const glassPillVariants = cva(
  "inline-flex items-center gap-2 rounded-full border transition-all duration-200 select-none",
  {
    variants: {
      variant: {
        default:
          "border-white/40 dark:border-white/10 bg-white/30 dark:bg-white/5 backdrop-blur-md text-foreground shadow-glass-pill hover:bg-white/40 dark:hover:bg-white/10",
        tinted:
          "border-white/30 dark:border-white/10 bg-gradient-to-b from-white/30 to-white/10 dark:from-white/10 dark:to-transparent backdrop-blur-md text-foreground shadow-glass-pill",
        interactive:
          "border-white/40 dark:border-white/15 bg-white/25 dark:bg-white/5 backdrop-blur-md text-foreground shadow-glass-pill hover:bg-white/45 dark:hover:bg-white/15 hover:scale-[1.02] active:scale-[0.98] cursor-pointer",
        dark:
          "border-white/10 bg-[#1e1e22]/80 backdrop-blur-md text-white shadow-tactile-primary hover:bg-[#25252a]/90",
      },
      size: {
        sm: "h-6 px-2.5 text-xs [&_svg]:size-3",
        default: "h-8 px-3.5 text-xs font-medium [&_svg]:size-3.5",
        lg: "h-10 px-4 text-sm font-medium [&_svg]:size-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface GlassPillProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glassPillVariants> {
  icon?: React.ReactNode
  label?: string
  value?: React.ReactNode
}

function GlassPill({
  className,
  variant,
  size,
  icon,
  label,
  value,
  children,
  ...props
}: GlassPillProps) {
  return (
    <div
      className={cn(glassPillVariants({ variant, size }), className)}
      {...props}
    >
      {icon && <span className="shrink-0 text-muted-foreground">{icon}</span>}
      {label && <span className="text-muted-foreground">{label}</span>}
      {value && <span className="font-semibold text-foreground font-mono">{value}</span>}
      {children}
    </div>
  )
}

export { GlassPill, glassPillVariants }
