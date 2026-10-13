"use client"

import * as React from "react"
import Link from "next/link"
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  Compass,
  Flame,
  Headphones,
  Laptop,
  Moon,
  Play,
  RotateCcw,
  Sliders,
  Sparkles,
  Sun,
  Volume2,
} from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GlassPill } from "@/components/ui/glass-pill"
import {
  TactileCard,
  TactileCardHeader,
  TactileCardTitle,
  TactileCardDescription,
  TactileCardContent,
} from "@/components/ui/tactile-card"
import { DebossedTile } from "@/components/ui/debossed-tile"

export default function ShowcasePage() {
  const [isDark, setIsDark] = React.useState(false)
  const [selectedPart, setSelectedPart] = React.useState<number>(1)
  const [selectedOption, setSelectedOption] = React.useState<string>("A")
  const [btnLoading, setBtnLoading] = React.useState(false)
  const [statusToast, setStatusToast] = React.useState<string | null>(null)

  // Toggle dark class on root document
  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev
      if (next) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
      return next
    })
  }

  const toeicParts = [
    { part: 1, name: "Photographs", desc: "6 câu · Nghe tranh", count: "6 Qs" },
    { part: 2, name: "Question-Response", desc: "25 câu · Hỏi đáp (A, B, C)", count: "25 Qs" },
    { part: 3, name: "Conversations", desc: "39 câu · Hội thoại ngắn", count: "39 Qs" },
    { part: 4, name: "Short Talks", desc: "30 câu · Bài nói độc thoại", count: "30 Qs" },
    { part: 5, name: "Incomplete Sentences", desc: "30 câu · Ngữ pháp & từ vựng", count: "30 Qs" },
    { part: 6, name: "Text Completion", desc: "16 câu · Điền từ vào đoạn", count: "16 Qs" },
    { part: 7, name: "Reading Comprehension", desc: "54 câu · Đọc hiểu đơn & kép", count: "54 Qs" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-200">
      {/* Sticky Header Toolbar */}
      <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className={buttonVariants({
                variant: "tactile",
                size: "sm",
                className: "gap-1.5 text-xs",
              })}
            >
              <ArrowLeft className="size-3.5" />
              <span>Trang chủ</span>
            </Link>
            <div className="h-4 w-px bg-border/80 hidden sm:block" />
            <div className="hidden sm:flex items-center gap-2">
              <span className="font-semibold text-sm tracking-tight text-foreground">
                ToeicKnot
              </span>
              <span className="text-muted-foreground text-xs font-mono">/</span>
              <Badge variant="tactile" size="sm" className="font-mono text-[10px]">
                Showcase Catalog
              </Badge>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <GlassPill
              variant="interactive"
              size="sm"
              icon={<Clock className="size-3" />}
              label="Dev Status"
              value="Phase 3 Live"
              onClick={() => {
                setStatusToast("Hệ thống Design System đã sẵn sàng!")
                setTimeout(() => setStatusToast(null), 3000)
              }}
            />
            <Button
              variant="tactile"
              size="sm"
              onClick={toggleTheme}
              className="gap-1.5 text-xs font-medium"
            >
              {isDark ? (
                <>
                  <Sun className="size-3.5 text-amber-500" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="size-3.5 text-indigo-500" />
                  <span>Dark Mode</span>
                </>
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content Showcase */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-16">
        {/* Hero Section */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2">
            <Badge variant="lime" size="sm" dot>
              Cofounder Neu-Tactile Inspiration
            </Badge>
            <Badge variant="glass" size="sm">
              Tailwind CSS v4
            </Badge>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Tactile Component Catalog
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Hệ thống UI component xúc giác ấm áp (Warm Tactile Minimalist) với gờ nổi phản quang đa tầng
            (<code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">inset 0 1.5px 0 #fff</code>),
            bề mặt chìm debossed, và hiệu ứng kính mờ frosted glass.
          </p>

          {/* Quick Nav Anchors */}
          <div className="flex flex-wrap gap-2 pt-2">
            <a href="#buttons" className={buttonVariants({ variant: "outline", size: "xs" })}>
              Buttons
            </a>
            <a href="#badges" className={buttonVariants({ variant: "outline", size: "xs" })}>
              Badges & Glass Pills
            </a>
            <a href="#tiles" className={buttonVariants({ variant: "outline", size: "xs" })}>
              Debossed Tiles
            </a>
            <a href="#cards" className={buttonVariants({ variant: "outline", size: "xs" })}>
              Tactile Cards
            </a>
            <a href="#composition" className={buttonVariants({ variant: "outline", size: "xs" })}>
              Bento Composition
            </a>
          </div>
        </div>

        {/* SECTION 1: BUTTONS */}
        <section id="buttons" className="space-y-6 scroll-mt-24">
          <div className="border-b border-border/80 pb-3">
            <h2 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
              <span>Buttons & Interactive Actions</span>
              <Badge variant="tactile" size="sm">
                9 Variants
              </Badge>
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Hỗ trợ đầy đủ các biến thể từ Tactile Bezel, Dark Metallic, Frosted Glass tới các nút chuẩn shadcn.
            </p>
          </div>

          {/* Variants Grid */}
          <TactileCard variant="raised" padding="default">
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 font-mono">
                  1. Tactile & Physical Variants (Cofounder Style)
                </h4>
                <div className="flex flex-wrap gap-3 items-center">
                  <Button variant="tactile">
                    <Sparkles className="size-4" />
                    <span>Tactile Light Bezel</span>
                  </Button>
                  <Button variant="tactilePrimary">
                    <Laptop className="size-4" />
                    <span>Tactile Dark Metallic</span>
                  </Button>
                  <Button variant="tactileGlass">
                    <Compass className="size-4" />
                    <span>Tactile Frosted Glass</span>
                  </Button>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 font-mono">
                  2. Standard UI Variants
                </h4>
                <div className="flex flex-wrap gap-3 items-center">
                  <Button variant="default">Default Primary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="link">Link Style</Button>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 font-mono">
                  3. Size Ramp
                </h4>
                <div className="flex flex-wrap gap-3 items-center">
                  <Button variant="tactile" size="xs">
                    Size XS
                  </Button>
                  <Button variant="tactile" size="sm">
                    Size SM
                  </Button>
                  <Button variant="tactile" size="default">
                    Size Default
                  </Button>
                  <Button variant="tactile" size="lg">
                    Size LG (Large CTA)
                  </Button>
                  <Button variant="tactile" size="icon">
                    <Flame className="size-4" />
                  </Button>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 font-mono">
                  4. Interactive States (Disabled & Loading)
                </h4>
                <div className="flex flex-wrap gap-3 items-center">
                  <Button variant="tactile" disabled>
                    Disabled Tactile
                  </Button>
                  <Button
                    variant="tactilePrimary"
                    loading={btnLoading}
                    onClick={() => {
                      setBtnLoading(true)
                      setTimeout(() => setBtnLoading(false), 2000)
                    }}
                  >
                    {btnLoading ? "Đang xử lý..." : "Nhấn thử Loading"}
                  </Button>
                  <Button variant="tactileGlass" loading>
                    Always Loading
                  </Button>
                </div>
              </div>
            </div>
          </TactileCard>
        </section>

        {/* SECTION 2: BADGES & GLASS PILLS */}
        <section id="badges" className="space-y-6 scroll-mt-24">
          <div className="border-b border-border/80 pb-3">
            <h2 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
              <span>Badges & Frosted Glass Pills</span>
              <Badge variant="tactile" size="sm">
                Status & Metadata
              </Badge>
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Viên thuốc kính mờ và thẻ trạng thái với hiệu ứng viền phản quang và chấm tín hiệu động.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Semantic Badges */}
            <TactileCard variant="raised" padding="default">
              <TactileCardHeader>
                <TactileCardTitle>Semantic Badges</TactileCardTitle>
                <TactileCardDescription>
                  Phân loại theo màu sắc trạng thái kết hợp chỉ báo dot nhấp nháy
                </TactileCardDescription>
              </TactileCardHeader>
              <div className="flex flex-wrap gap-2.5 pt-2">
                <Badge variant="default">Default</Badge>
                <Badge variant="tactile">Tactile Raised</Badge>
                <Badge variant="glass">Glass Bezel</Badge>
                <Badge variant="success" dot>
                  990 TOEIC Max
                </Badge>
                <Badge variant="warning" dot>
                  Đang diễn ra
                </Badge>
                <Badge variant="error" dot>
                  Sai 2 câu
                </Badge>
                <Badge variant="lime" dot>
                  Lime Accent
                </Badge>
                <Badge variant="outline">Outline Mono</Badge>
              </div>
            </TactileCard>

            {/* Glass Pills */}
            <TactileCard variant="raised" padding="default">
              <TactileCardHeader>
                <TactileCardTitle>Glass Pills (Cofounder Replica)</TactileCardTitle>
                <TactileCardDescription>
                  Viên thuốc kính mờ với viền ánh kim và giá trị số liệu font mono
                </TactileCardDescription>
              </TactileCardHeader>
              <div className="flex flex-wrap gap-2.5 pt-2">
                <GlassPill
                  variant="default"
                  icon={<Headphones className="size-3.5" />}
                  label="Listening"
                  value="495"
                />
                <GlassPill
                  variant="tinted"
                  icon={<Volume2 className="size-3.5" />}
                  label="Reading"
                  value="495"
                />
                <GlassPill
                  variant="interactive"
                  icon={<CheckCircle2 className="size-3.5 text-emerald-500" />}
                  label="Accuracy"
                  value="98.5%"
                />
                <GlassPill
                  variant="dark"
                  icon={<Sparkles className="size-3.5 text-amber-400" />}
                  label="Target"
                  value="850+"
                />
              </div>
            </TactileCard>
          </div>
        </section>

        {/* SECTION 3: DEBOSSED TILES */}
        <section id="tiles" className="space-y-6 scroll-mt-24">
          <div className="border-b border-border/80 pb-3">
            <h2 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
              <span>Debossed Tiles (Sunken Wells)</span>
              <Badge variant="lime" size="sm">
                Interactive Selection
              </Badge>
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Bề mặt lòng máng chìm vào canvas với hiệu ứng đổ bóng lòng sâu. Hãy nhấn thử để kiểm tra trạng thái tương tác!
            </p>
          </div>

          <TactileCard variant="raised" padding="default" className="space-y-6">
            {/* TOEIC Part Selector Demo */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground font-mono">
                  1. Demo Chọn Part TOEIC (Part 1 → 7)
                </h4>
                <span className="text-xs font-mono text-muted-foreground">
                  Đang chọn: <strong className="text-foreground">Part {selectedPart}</strong>
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {toeicParts.map((item) => (
                  <DebossedTile
                    key={item.part}
                    title={`Part ${item.part}: ${item.name}`}
                    description={item.desc}
                    value={item.count}
                    selected={selectedPart === item.part}
                    onClick={() => setSelectedPart(item.part)}
                    icon={<Sliders className="size-3.5" />}
                    badge={
                      selectedPart === item.part ? (
                        <Badge variant="default" size="sm">
                          Đã chọn
                        </Badge>
                      ) : undefined
                    }
                  />
                ))}
              </div>
            </div>

            {/* Multiple Choice Radio Demo */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground font-mono">
                  2. Demo Trắc nghiệm Đáp án (A, B, C, D)
                </h4>
                <span className="text-xs font-mono text-muted-foreground">
                  Đáp án: <strong className="text-foreground">Phương án {selectedOption}</strong>
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {["A", "B", "C", "D"].map((opt) => (
                  <DebossedTile
                    key={opt}
                    size="sm"
                    title={`Lựa chọn ${opt}`}
                    description="Nhấp để chốt câu trả lời"
                    selected={selectedOption === opt}
                    onClick={() => setSelectedOption(opt)}
                    badge={
                      selectedOption === opt ? (
                        <CheckCircle2 className="size-4 text-primary" />
                      ) : undefined
                    }
                  />
                ))}
              </div>
            </div>
          </TactileCard>
        </section>

        {/* SECTION 4: TACTILE CARDS & BENTO COMPOSITION */}
        <section id="cards" className="space-y-6 scroll-mt-24">
          <div className="border-b border-border/80 pb-3">
            <h2 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
              <span>Tactile Cards & Bento Composition</span>
              <Badge variant="tactile" size="sm">
                Bento Elevation
              </Badge>
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Khung bề mặt Bento với gờ nổi phản quang, hỗ trợ bố cục linh hoạt và có chiều sâu vật lý.
            </p>
          </div>

          <div id="composition" className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Stat Hero */}
            <TactileCard variant="raised" padding="default" className="md:col-span-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <Badge variant="lime" size="sm" dot>
                    Full Mock Test 2024
                  </Badge>
                  <GlassPill variant="default" size="sm" label="Thời gian" value="120 phút" />
                </div>
                <TactileCardHeader className="pt-4">
                  <TactileCardTitle className="text-2xl">
                    Đề thi Thử Chuẩn Định dạng ETS TOEIC
                  </TactileCardTitle>
                  <TactileCardDescription>
                    Mô phỏng trọn vẹn 200 câu hỏi (100 câu Listening + 100 câu Reading) với thuật toán tính điểm scaled score 10–990.
                  </TactileCardDescription>
                </TactileCardHeader>
              </div>

              <div className="space-y-4 pt-4">
                <div className="grid grid-cols-3 gap-3">
                  <DebossedTile
                    size="sm"
                    title="Listening"
                    value="495đ"
                    description="Part 1 - 4"
                    interactive={false}
                  />
                  <DebossedTile
                    size="sm"
                    title="Reading"
                    value="495đ"
                    description="Part 5 - 7"
                    interactive={false}
                  />
                  <DebossedTile
                    size="sm"
                    title="Target"
                    value="850+"
                    description="Mục tiêu vàng"
                    interactive={false}
                  />
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Button variant="tactilePrimary" size="default">
                    <Play className="size-4" />
                    <span>Bắt đầu làm bài thi</span>
                  </Button>
                  <Button variant="tactile" size="default">
                    <RotateCcw className="size-4" />
                    <span>Làm lại lần trước</span>
                  </Button>
                </div>
              </div>
            </TactileCard>

            {/* Card 2: Micro Bento Side */}
            <TactileCard variant="interactive" padding="default" className="flex flex-col justify-between">
              <div>
                <Badge variant="status" size="sm">
                  AI Analytics
                </Badge>
                <TactileCardHeader className="pt-3">
                  <TactileCardTitle>Phân tích Lỗ hổng</TactileCardTitle>
                  <TactileCardDescription>
                    AI tự động phát hiện 3 điểm mù hay gặp trong Part 7 đoạn kép.
                  </TactileCardDescription>
                </TactileCardHeader>
              </div>

              <div className="space-y-3 pt-4">
                <div className="p-3 rounded-xl bg-surface-debossed shadow-debossed text-xs space-y-1">
                  <div className="flex justify-between font-semibold">
                    <span>Part 7 Double Passages</span>
                    <span className="text-rose-500 font-mono">Cần cải thiện</span>
                  </div>
                  <p className="text-muted-foreground text-[11px]">
                    Thời gian đọc trung bình: 65s/câu (khuyến nghị: 45s)
                  </p>
                </div>

                <Button variant="tactile" size="sm" className="w-full justify-center">
                  <span>Xem đề xuất ôn tập</span>
                </Button>
              </div>
            </TactileCard>
          </div>
        </section>

        {/* SECTION 5: DESIGN TOKENS INSPECTOR */}
        <section className="space-y-6 pt-4 border-t border-border/80">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-foreground">
              Design Tokens Reference
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Bảng ánh xạ các giá trị màu sắc và shadow CSS tokens đang kích hoạt trong dự án.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl border border-border bg-background space-y-2">
              <div className="size-6 rounded-md border border-border bg-background" />
              <div className="text-xs font-mono font-semibold">--background</div>
              <div className="text-[11px] text-muted-foreground">#f5f5f2 (Warm Canvas)</div>
            </div>

            <div className="p-4 rounded-xl border border-border bg-surface-raised space-y-2 shadow-tactile-card">
              <div className="size-6 rounded-md border border-border bg-surface-raised" />
              <div className="text-xs font-mono font-semibold">--surface-raised</div>
              <div className="text-[11px] text-muted-foreground">#fbfbf8 (Raised Bezel)</div>
            </div>

            <div className="p-4 rounded-xl border border-border bg-surface-debossed space-y-2 shadow-debossed">
              <div className="size-6 rounded-md border border-border bg-surface-debossed" />
              <div className="text-xs font-mono font-semibold">--surface-debossed</div>
              <div className="text-[11px] text-muted-foreground">#ebebe7 (Sunken Well)</div>
            </div>

            <div className="p-4 rounded-xl border border-border bg-surface-darker space-y-2">
              <div className="size-6 rounded-md border border-border bg-surface-darker" />
              <div className="text-xs font-mono font-semibold">--surface-darker</div>
              <div className="text-[11px] text-muted-foreground">#e7e7e3 (Accent Border)</div>
            </div>
          </div>
        </section>
      </main>

      {statusToast && (
        <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <GlassPill
            variant="default"
            size="default"
            icon={<Sparkles className="size-3.5 text-primary" />}
            label="Thông báo"
            value={statusToast}
          />
        </div>
      )}
    </div>
  )
}
