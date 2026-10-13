import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border font-medium transition-colors select-none focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow-sm",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground",
        outline:
          "border-border text-foreground",
        tactile:
          "border-border bg-surface-raised text-foreground shadow-tactile-btn",
        glass:
          "border-white/30 dark:border-white/10 bg-white/20 dark:bg-white/5 backdrop-blur-md text-foreground shadow-glass-pill",
        success:
          "border-emerald-500/25 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
        warning:
          "border-amber-500/25 bg-amber-500/10 text-amber-700 dark:text-amber-400",
        error:
          "border-rose-500/25 bg-rose-500/10 text-rose-700 dark:text-rose-400",
        lime:
          "border-[#a4db3f]/40 bg-[#bbf451]/20 text-[#1e2312] dark:text-[#bbf451]",
        status:
          "border-border bg-surface-debossed text-foreground shadow-debossed",
      },
      size: {
        sm: "px-2 py-0.5 text-[0.68rem] [&_svg]:size-2.5",
        default: "px-2.5 py-0.5 text-xs [&_svg]:size-3",
        lg: "px-3.5 py-1 text-sm [&_svg]:size-3.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean
  dotColor?: string
}

function Badge({
  className,
  variant,
  size,
  dot = false,
  dotColor,
  children,
  ...props
}: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props}>
      {dot && (
        <span
          className={cn(
            "size-1.5 rounded-full shrink-0",
            dotColor ||
              (variant === "success"
                ? "bg-emerald-500 animate-pulse"
                : variant === "warning"
                ? "bg-amber-500"
                : variant === "error"
                ? "bg-rose-500"
                : variant === "lime"
                ? "bg-[#83b429]"
                : "bg-current opacity-70")
          )}
        />
      )}
      {children}
    </div>
  )
}

export { Badge, badgeVariants }
