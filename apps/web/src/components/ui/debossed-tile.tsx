import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const debossedTileVariants = cva(
  "group relative flex flex-col justify-between rounded-xl border transition-all duration-200 select-none text-left",
  {
    variants: {
      variant: {
        default:
          "bg-surface-debossed border-border/70 shadow-debossed text-foreground",
        selected:
          "bg-surface-raised border-primary/80 shadow-debossed-selected text-foreground ring-1 ring-primary/20",
        ghost:
          "bg-transparent border-transparent hover:bg-surface-debossed hover:shadow-debossed text-foreground",
      },
      size: {
        sm: "p-3 gap-2 min-h-[70px]",
        default: "p-4 gap-3 min-h-[90px]",
        lg: "p-5 gap-4 min-h-[110px]",
      },
      interactive: {
        true: "cursor-pointer hover:border-foreground/20 active:translate-y-px",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      interactive: true,
    },
  }
)

export interface DebossedTileProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof debossedTileVariants> {
  selected?: boolean
  badge?: React.ReactNode
  icon?: React.ReactNode
  title?: string
  description?: string
  value?: React.ReactNode
}

function DebossedTile({
  className,
  variant,
  size,
  interactive,
  selected = false,
  badge,
  icon,
  title,
  description,
  value,
  children,
  ...props
}: DebossedTileProps) {
  const activeVariant = selected ? "selected" : variant

  const isInteractive = interactive !== false

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (isInteractive && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault()
      props.onClick?.(e as unknown as React.MouseEvent<HTMLDivElement>)
    }
    props.onKeyDown?.(e)
  }

  return (
    <div
      data-slot="debossed-tile"
      data-selected={selected}
      role={isInteractive ? "button" : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      onKeyDown={handleKeyDown}
      className={cn(
        debossedTileVariants({
          variant: activeVariant,
          size,
          interactive,
        }),
        className
      )}
      {...props}
    >
      <div className="flex items-start justify-between w-full gap-2">
        <div className="flex items-center gap-2">
          {icon && (
            <span
              className={cn(
                "p-1.5 rounded-lg text-muted-foreground group-hover:text-foreground transition-colors shrink-0",
                selected ? "text-primary bg-primary/10" : "bg-background/80"
              )}
            >
              {icon}
            </span>
          )}
          {title && (
            <span className="font-semibold text-sm tracking-tight line-clamp-1">
              {title}
            </span>
          )}
        </div>
        {badge && <div className="shrink-0">{badge}</div>}
      </div>

      {(description || value || children) && (
        <div className="flex items-end justify-between w-full mt-1">
          {description && (
            <p className="text-xs text-muted-foreground leading-normal line-clamp-2">
              {description}
            </p>
          )}
          {value && (
            <span className="font-mono text-xs font-semibold shrink-0 text-foreground">
              {value}
            </span>
          )}
          {children}
        </div>
      )}
    </div>
  )
}

export { DebossedTile, debossedTileVariants }
