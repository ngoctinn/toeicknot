import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const tactileCardVariants = cva(
  "rounded-2xl border transition-all duration-200 text-card-foreground",
  {
    variants: {
      variant: {
        raised:
          "bg-surface-raised border-border shadow-tactile-card",
        bordered:
          "bg-surface-raised border-border/80 shadow-sm",
        debossed:
          "bg-surface-debossed border-border/60 shadow-debossed",
        glass:
          "bg-white/25 dark:bg-white/5 backdrop-blur-md border-white/40 dark:border-white/10 shadow-glass-pill",
        interactive:
          "bg-surface-raised border-border shadow-tactile-card hover:-translate-y-1 hover:shadow-xl hover:border-foreground/15 cursor-pointer",
      },
      padding: {
        none: "p-0",
        sm: "p-4",
        default: "p-6",
        lg: "p-8",
      },
    },
    defaultVariants: {
      variant: "raised",
      padding: "default",
    },
  }
)

interface TactileCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tactileCardVariants> {}

function TactileCard({
  className,
  variant,
  padding,
  ...props
}: TactileCardProps) {
  return (
    <div
      className={cn(tactileCardVariants({ variant, padding }), className)}
      {...props}
    />
  )
}

function TactileCardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-col space-y-1.5 pb-4", className)}
      {...props}
    />
  )
}

function TactileCardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "font-semibold leading-tight tracking-tight text-foreground text-lg",
        className
      )}
      {...props}
    />
  )
}

function TactileCardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm text-muted-foreground leading-relaxed", className)}
      {...props}
    />
  )
}

function TactileCardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("pt-0", className)} {...props} />
}

function TactileCardFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex items-center pt-4 border-t border-border/60 mt-4", className)}
      {...props}
    />
  )
}

export {
  TactileCard,
  TactileCardHeader,
  TactileCardTitle,
  TactileCardDescription,
  TactileCardContent,
  TactileCardFooter,
  tactileCardVariants,
  type TactileCardProps,
}
