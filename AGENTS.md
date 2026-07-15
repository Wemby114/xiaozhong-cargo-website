# 项目上下文

### 版本技术栈

- **Framework**: Next.js 16 (App Router)
- **Core**: React 19
- **Language**: TypeScript 5
- **UI 组件**: shadcn/ui (基于 Radix UI)
- **Styling**: Tailwind CSS 4

## 目录结构

```
├── public/                 # 静态资源
├── scripts/                # 构建与启动脚本
│   ├── build.sh            # 构建脚本
│   ├── dev.sh              # 开发环境启动脚本
│   ├── prepare.sh          # 预处理脚本
│   └── start.sh            # 生产环境启动脚本
├── src/
│   ├── app/                # 页面路由与布局
│   │   ├── globals.css     # 全局样式（设计系统 Token）
│   │   ├── layout.tsx      # 根布局（字体、Metadata）
│   │   └── page.tsx        # 首页（组装各 Section）
│   ├── components/
│   │   ├── sections/       # 页面区块组件
│   │   │   ├── Header.tsx      # 导航栏（固定顶部、滚动变色）
│   │   │   ├── Hero.tsx        # 首屏（主视觉 + 中亚地图动画）
│   │   │   ├── Coverage.tsx    # 服务覆盖（中亚五国卡片）
│   │   │   ├── Services.tsx    # 物流服务（铁路/公路/航空/多式联运）
│   │   │   ├── Advantages.tsx  # 核心优势（6大优势）
│   │   │   ├── About.tsx       # 关于我们
│   │   │   ├── Contact.tsx     # 联系表单
│   │   │   └── Footer.tsx      # 页脚
│   │   └── ui/             # Shadcn UI 组件库
│   ├── hooks/              # 自定义 Hooks
│   ├── lib/                # 工具库
│   │   └── utils.ts        # 通用工具函数 (cn)
│   └── server.ts           # 自定义服务端入口
├── next.config.ts          # Next.js 配置
├── package.json            # 项目依赖管理
└── tsconfig.json           # TypeScript 配置
```

## 设计规范

详见 `DESIGN.md`。核心配色：
- 主色：深海蓝 `#0f2744`
- 强调色：琥珀金 `#c8954c`
- 辅助色：冰蓝 `#6bb5d9`
- 背景：暖白 `#f8f7f4`

## 包管理规范

**仅允许使用 pnpm** 作为包管理器，**严禁使用 npm 或 yarn**。

## 开发规范

- 所有 Section 组件使用 `'use client'` 以支持 IntersectionObserver 滚动动画
- 字体通过 `next/font/google` 加载（Noto Sans SC + Inter）
- 禁止在 JSX 中直接使用 `typeof window`、`Date.now()` 等动态数据
- 滚动动画使用 IntersectionObserver + CSS transition 实现
