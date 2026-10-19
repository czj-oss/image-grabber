# 个人展示网站技术设计

## 1. 技术栈

- 前端：React 18+、TypeScript。
- 构建：Vite。
- 图标：lucide-react。
- 样式：原生 CSS，使用 CSS 变量和响应式媒体查询。
- 部署：Vercel 或 Cloudflare Pages。
- 数据：当前使用组件内静态数据，不需要数据库。

## 2. 目录结构

```text
personal-site/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── PRD.md
├── TECH_DESIGN.md
├── AGENTS.md
└── src/
    ├── main.tsx
    └── styles.css
```

## 3. 页面结构

单页应用使用锚点导航，包含：

- Hero：个人定位和主要行动入口。
- About：个人介绍和工作方式。
- Skills：技能分类。
- Work：项目列表。
- Notes：学习笔记。
- Contact：邮箱和社交链接。

## 4. 关键技术点

### 星空背景

`Starfield` 组件使用 Canvas 绘制粒子。窗口尺寸变化时重新计算 Canvas 尺寸；移动端使用较少粒子；检测到 `prefers-reduced-motion` 时停止动画帧循环。

### 响应式布局

- 大于 1024px：双栏 Hero、四列技能。
- 621px 到 800px：单栏 Hero、两列技能。
- 小于等于 620px：单列内容、移动端菜单。

### 交互

- 移动端菜单通过 React state 控制。
- 邮箱复制使用浏览器 Clipboard API。
- 外部链接使用新标签页打开。

### 构建与部署

```text
Install command: npm install
Build command: npm run build
Output directory: dist
Root directory: personal-site
```

Vite 的 `base` 设置为 `./`，保证静态资源在子目录部署时仍能正确加载。
