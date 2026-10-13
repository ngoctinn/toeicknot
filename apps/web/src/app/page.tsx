import Link from "next/link";
import { Sparkles, Compass, ExternalLink } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GlassPill } from "@/components/ui/glass-pill";
import { TactileCard } from "@/components/ui/tactile-card";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 sm:p-10 bg-background text-foreground transition-colors duration-200">
      <main className="max-w-2xl w-full">
        <TactileCard variant="raised" padding="lg" className="space-y-8 text-center flex flex-col items-center">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Badge variant="lime" size="sm" dot>
              Next.js 16 + FastAPI
            </Badge>
            <GlassPill variant="default" size="sm" label="Design" value="Neu-Tactile" />
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              ToeicKnot
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
              Nền tảng học và luyện thi TOEIC thông minh. Được trang bị hệ thống UI xúc giác vật lý
              (Warm Tactile Design System) lấy cảm hứng từ phong cách tối giản hiện đại.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/showcase"
              className={buttonVariants({
                variant: "tactilePrimary",
                size: "lg",
                className: "px-6 gap-2",
              })}
            >
              <Compass className="size-4" />
              <span>Khám phá Component Showcase</span>
            </Link>
            <a
              href="http://localhost:8000/docs"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({
                variant: "tactile",
                size: "lg",
                className: "px-6 gap-2",
              })}
            >
              <ExternalLink className="size-4" />
              <span>FastAPI Swagger Docs</span>
            </a>
          </div>

          <div className="w-full pt-6 border-t border-border/80 text-xs text-muted-foreground flex justify-between items-center">
            <span>
              Frontend: <code className="font-mono text-foreground font-medium">port 3000</code>
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="size-3 text-amber-500" />
              <span>Catalog: <code className="font-mono text-foreground font-medium">/showcase</code></span>
            </span>
            <span>
              Backend: <code className="font-mono text-foreground font-medium">port 8000</code>
            </span>
          </div>
        </TactileCard>
      </main>
    </div>
  );
}
