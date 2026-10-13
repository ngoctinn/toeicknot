# ToeicKnot Monorepo

Hệ thống luyện thi TOEIC thông minh với kiến trúc Monorepo chuẩn best-practice.

## Cấu trúc dự án

```
toeicknot/
├── apps/
│   ├── web/                    # Frontend: Next.js 16 (App Router), Tailwind CSS v4, shadcn/ui
│   └── api/                    # Backend: FastAPI (Python 3.14+, uv, Pydantic, Uvicorn)
├── packages/
│   └── typescript-config/      # Cấu hình TypeScript dùng chung
├── docs/                       # Coding Friend documentation
│   ├── memory/                 # Bộ nhớ ngữ cảnh dự án (decisions, conventions, bugs)
│   └── plans/                  # Kế hoạch thực thi tính năng
├── .coding-friend/             # Cấu hình cục bộ Coding Friend
│   └── config.json
├── .mcp.json                   # Cấu hình MCP servers (next-devtools & shadcn)
├── pnpm-workspace.yaml         # Định nghĩa workspace pnpm
├── turbo.json                  # Turborepo task pipeline
└── package.json                # Root scripts và dev tools
```

## Yêu cầu môi trường

- **Node.js**: >= 20.x (khuyến nghị >= 22.x)
- **pnpm**: >= 10.x
- **Python**: >= 3.11 (sử dụng `uv` làm package manager)

## Khởi động & Phát triển

### Cài đặt dependencies

```bash
# Cài đặt toàn bộ Node/workspace packages
pnpm install

# Cài đặt Python backend dependencies qua uv
cd apps/api && uv sync --extra dev && cd ../..
```

### Chạy Development Server

```bash
# Chạy đồng thời cả Frontend (port 3000) và Backend (port 8000)
pnpm dev

# Hoặc chạy riêng lẻ từng service:
pnpm dev:web    # Chỉ chạy Next.js Web (http://localhost:3000)
pnpm dev:api    # Chỉ chạy FastAPI Backend (http://localhost:8000)
```

### Kiểm tra & Build

```bash
# Type check toàn bộ workspace
pnpm check-types

# Build production
pnpm build

# Chạy test Backend (FastAPI pytest)
cd apps/api && uv run pytest
```

## Tích hợp MCP Servers cho Antigravity (agy)

Dự án đã được tích hợp sẵn 2 MCP servers theo chuẩn:
1. **Next.js DevTools MCP** (`next-devtools-mcp`): Kết nối trực tiếp vào runtime của Next.js dev server để theo dõi lỗi, kiểm tra compilation, route, và log.
2. **shadcn/ui MCP** (`shadcn mcp`): Tìm kiếm, duyệt và cài đặt component trực tiếp từ shadcn registry.
