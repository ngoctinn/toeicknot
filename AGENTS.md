# ToeicKnot — Agent Guidelines & Project Rules

Tài liệu này định nghĩa toàn bộ quy chuẩn kiến trúc, best practices và các quy tắc bắt buộc mà AI coding assistant (Antigravity / Coding Friend) PHẢI TUÂN THỦ khi đọc, sửa đổi hoặc sinh mã nguồn trong repository **ToeicKnot**.

---

## 1. Kiến trúc Monorepo & Quản lý Workspace

- **Công cụ điều phối:** Turborepo 2.x + pnpm workspaces 12.x.
- **Phân chia thư mục:**
  - `apps/web`: Frontend Next.js 16 (App Router), Tailwind CSS v4, shadcn/ui, TypeScript.
  - `apps/api`: Backend FastAPI, Python >= 3.11, Pydantic v2, Uvicorn, quản lý gói bằng `uv`.
  - `packages/typescript-config`: Cấu hình TypeScript chia sẻ (`base.json`, `nextjs.json`).
  - `docs/`: Thư mục tài liệu của Coding Friend (`memory/`, `plans/`, `context/`).
- **Quy tắc pnpm & Dependencies:**
  - **Single Lockfile:** Chỉ duy trì duy nhất một file `pnpm-lock.yaml` tại thư mục gốc repository. TUYỆT ĐỐI KHÔNG sinh lockfile lồng nhau trong `apps/` hoặc `packages/`.
  - **Internal Package Linking:** Các package nội bộ dùng namespace `@toeicknot/*` và tham chiếu qua `"workspace:*"`.
  - **Turborepo Tasks:** Mọi task định nghĩa trong `turbo.json` (`dev`, `build`, `lint`, `check-types`, `clean`) PHẢI có script tương ứng trong `package.json` của từng app con.

---

## 2. Chuẩn mực Frontend (Next.js 16 + React 19)

### 2.1. Server & Client Components
- **Server Component mặc định:** Mọi file component, layout, page đều là React Server Component theo mặc định.
- **Chỉ dùng `'use client'` khi thực sự cần thiết:** Khi có tương tác người dùng (`onClick`, `onChange`), React Hooks (`useState`, `useEffect`, `useRef`), hoặc gọi Web API phía client (browser context).
- **Layout Type:** Layout nhận prop `{ children: React.ReactNode }` chuẩn React 19 / TypeScript, không tự định nghĩa type lạ gây lỗi compile.

### 2.2. Font & Tối ưu hóa Giao diện
- **Next.js Font:** Sử dụng `@next/font/google` (`Geist`, `Geist_Mono`) với CSS variable gắn vào root layout.
- **CẤM ghi đè font cứng:** TUYỆT ĐỐI KHÔNG ghi đè `font-family: Arial, ...` trong `body` hoặc `globals.css`. Body phải dùng `font-family: var(--font-sans), sans-serif;`.

### 2.3. Quy tắc HTML Living Standard & Accessibility
- **CẤM lồng interactive elements:** TUYỆT ĐỐI KHÔNG lồng thẻ `<button>` bên trong thẻ `<a>` hoặc `<Link>`.
- **Style Link thành Button:** BẮT BUỘC sử dụng helper `buttonVariants` của shadcn để tạo kiểu cho link:
  ```tsx
  // ✅ ĐÚNG:
  <Link href="/path" className={buttonVariants({ variant: "outline", size: "lg" })}>
    Label
  </Link>

  // ❌ SAI (vi phạm HTML spec, gây hydration warning):
  <Link href="/path">
    <Button variant="outline">Label</Button>
  </Link>
  ```

---

## 3. Chuẩn mực shadcn/ui & Tailwind CSS v4

### 3.1. Utility `cn` & Package Dependencies
- **Helper `cn`:** Luôn import từ `@/lib/utils` (`import { cn } from "@/lib/utils"`).
- **CẤM cài package `"cn"` từ npm:** `"cn"` là local helper dựa trên `clsx` và `tailwind-merge`. Tuyệt đối không cài `"cn"` từ registry npm.

### 3.2. Design Tokens trong Tailwind CSS v4
- **CSS Variables bắt buộc:** Toàn bộ component của shadcn phụ thuộc vào các token màu chuẩn trong `globals.css`:
  - Nền & Chữ: `--background`, `--foreground`, `--card`, `--card-foreground`, `--popover`, `--popover-foreground`.
  - Nhận diện: `--primary`, `--primary-foreground`, `--secondary`, `--secondary-foreground`, `--muted`, `--muted-foreground`, `--accent`, `--accent-foreground`, `--destructive`, `--destructive-foreground`.
  - Cấu trúc: `--border`, `--input`, `--ring`, `--radius`.
- **Mapping `@theme inline`:** Bắt buộc ánh xạ toàn bộ token trên trong khối `@theme inline` của Tailwind v4 để các class `bg-primary`, `text-muted-foreground`, `border-border` hoạt động chính xác.

### 3.3. Cài đặt Component
- Khi cài thêm component shadcn, luôn chỉ định workspace context:
  ```bash
  pnpm dlx shadcn@latest add <component> -c apps/web -y
  ```

---

## 4. Chuẩn mực Backend (FastAPI + Pydantic v2 + uv)

### 4.1. Công cụ & Môi trường Python
- **Package Manager:** Bắt buộc sử dụng `uv` (`uv run`, `uv sync --extra dev`, `uv add`).
- **Python preference:** Luôn tuân thủ alias `python=python3`.

### 4.2. Cấu hình & Pydantic Settings
- **BaseSettings:** Quản lý cấu hình qua `pydantic-settings`.
- **Xử lý CORS Origins thông minh:** Trường `BACKEND_CORS_ORIGINS: list[str]` PHẢI có `@field_validator("BACKEND_CORS_ORIGINS", mode="before")` để parse được cả JSON string `["..."]` lẫn chuỗi phân tách bởi dấu phẩy `http://a.com,http://b.com` trong file `.env` hoặc cloud hosting.

### 4.3. An toàn Mạng & Bảo mật API
- **Local Dev Binding:** Uvicorn trong dev script cục bộ PHẢI bind vào `127.0.0.1` (`--host 127.0.0.1`). Chỉ dùng `0.0.0.0` trong container Docker.
- **Production Gating cho Swagger/OpenAPI:**
  - `/docs`, `/redoc` và `/api/v1/openapi.json` CHỈ ĐƯỢC BẬT khi `ENVIRONMENT != "production"`. Khi deploy production phải vô hiệu hóa để tránh lộ metadata API.
- **CORS Policy:** Chỉ định rõ các HTTP methods được phép (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `OPTIONS`) thay vì mở rộng `["*"]`.

### 4.4. Cấu trúc Module Backend
- Tách bạch rõ rệt giữa:
  - `app/schemas/`: Định nghĩa Pydantic Models (Request / Response validation).
  - `app/api/v1/endpoints/`: Routing logic và controller xử lý request.
  - `app/core/`: Cấu hình hệ thống, bảo mật (security/auth), database session.
  - `app/services/`: Business logic nghiệp vụ.

---

## 5. Tích hợp MCP Servers trong Antigravity

Dự án kích hoạt 2 MCP servers:
1. **`next-devtools`**:
   - Sử dụng tool `nextjs_call` để kiểm tra runtime errors (`get_errors`), route (`get_routes`), và log khi dev server đang chạy.
   - Tra cứu tài liệu Next.js chính xác theo version dự án qua tool `nextjs_docs`.
2. **`shadcn`**:
   - Sử dụng tool `search_items_in_registries`, `view_items_in_registries` và `get_audit_checklist` để kiểm tra component mới thêm vào.

---

## 6. Lệnh Kiểm tra Nhanh trước khi Hoàn tất Thay đổi

Trước khi xác nhận hoàn thành bất kỳ task nào, AI PHẢI chạy các lệnh kiểm tra sau:
```bash
# 1. Typecheck toàn bộ TypeScript
pnpm check-types

# 2. Build Next.js Web
pnpm build

# 3. Test và lint FastAPI
cd apps/api && uv run pytest && uv run ruff check .
```
Nếu có bất kỳ lỗi nào xuất hiện, AI PHẢI khắc phục ngay lập tức trước khi thông báo với người dùng.
