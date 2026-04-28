# AI Tools Showcase

一个现代化的 AI 工具展示平台，使用 Next.js 14、TypeScript 和 Tailwind CSS 构建，采用 Linear 设计风格。

## 特性

- 🎨 精美的 Linear 风格暗色主题
- 📱 完全响应式设计
- 🚀 使用 Next.js 14 App Router
- 💪 TypeScript 类型安全
- 🎯 精选 10+ AI 工具展示
- 🔍 按类别和标签筛选
- ⭐ 工具评分系统

## 开始使用

### 安装依赖

```bash
npm install
```

### 运行开发服务器

```bash
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看结果。

### 构建生产版本

```bash
npm run build
npm start
```

## 项目结构

```
ai-tools-showcase/
├── app/
│   ├── layout.tsx          # 根布局
│   ├── page.tsx            # 首页
│   ├── tools/
│   │   ├── page.tsx        # 工具列表页
│   │   └── [id]/
│   │       └── page.tsx    # 工具详情页
│   ├── globals.css         # 全局样式
│   └── not-found.tsx       # 404 页面
├── lib/
│   └── data.ts             # AI 工具数据
├── components/
│   └── ui/                 # UI 组件
└── public/                 # 静态资源
```

## 技术栈

- **框架**: Next.js 14
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **图标**: Lucide React
- **设计风格**: Linear Design System

## 设计规范

### 颜色系统

- 背景: `#08090a`
- 主文字: `#f7f8f8`
- 次要文字: `#d0d6e0`
- 强调色: `#5e6ad2` (Linear Indigo)
- 边框: `rgba(255,255,255,0.08)`

### 字体

- 正文: Inter (with `cv01`, `ss03` features)
- 代码: JetBrains Mono

## 许可证

MIT