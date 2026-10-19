# Lumen Study Desk 技术设计

## 1. 技术选型

- Electron：创建 Windows 桌面窗口，提供本地持久化入口。
- Vite：负责前端开发服务器和生产构建。
- 原生 JavaScript：保持项目结构轻量，便于课程展示和调试。
- epubjs：解析 EPUB 的导航目录和章节内容。
- Electron preload + IPC：在隔离上下文中保存本地阅读数据。

## 2. 目录结构

```text
reader-app/
├─ electron/
│  ├─ main.cjs       # Electron 主进程与窗口
│  └─ preload.cjs    # 安全暴露本地存储 API
├─ src/
│  ├─ main.js        # 书架、导入、阅读、笔记和统计逻辑
│  └─ styles.css     # 桌面端布局与主题
├─ PRD.md
├─ TECH_DESIGN.md
├─ AGENTS.md
└─ package.json
```

## 3. 数据模型

每本书保存为：

```js
{
  id,
  title,
  author,
  type: "TXT" | "EPUB",
  content,       // TXT 正文
  data,          // EPUB 的 base64 内容
  chapters,      // 目录条目
  currentChapter,
  progress,
  bookmarks,
  notes,
  sessions
}
```

数据写入 Electron 用户目录下的 `reader-state.json`，不会修改原始书籍文件。

## 4. 核心流程

1. 用户通过文件选择器导入 `.txt` 或 `.epub`。
2. TXT 使用 `File.text()` 读取，并根据“第 X 章 / Chapter X”等标题生成目录。
3. EPUB 使用 epubjs 解析 `navigation.toc`，并用 rendition 渲染正文。
4. 用户点击目录时更新 `currentChapter`，TXT 使用滚动定位，EPUB 使用 rendition display。
5. 阅读区域滚动或 EPUB 触发 relocated 事件时更新 `progress`。
6. 通过 preload IPC 防抖写入本地状态，重启时恢复书架、主题和阅读位置。
7. TXT 正文搜索按行生成结果，点击结果滚动到对应位置。
8. 笔记和书签写入同一本地状态文件，统计面板从书籍数据实时计算。

## 5. 安全与边界

- Renderer 不开启 Node.js 集成。
- 主进程只通过两个 IPC 方法读写阅读器状态。
- EPUB 内容只在本地渲染，不发起业务网络请求。
- 文件大小和复杂排版不在本阶段做额外优化。
- EPUB 当前优先保证导入、目录和章节渲染，正文搜索保留为后续增强点。

## 6. 验证计划

- 运行 `npm run build` 验证生产构建。
- 运行 `npm run dev` 启动桌面窗口。
- 导入 TXT，检查正文、目录、章节跳转和滚动进度。
- 导入 EPUB，检查目录、章节跳转和格式标识。
- 关闭窗口后重新打开，确认书架与进度恢复。
- 点击书签按钮，确认统计面板出现书签。
- 打开笔记面板，保存一条笔记并删除，确认数据更新。
- 搜索 TXT 正文关键词，点击结果确认阅读位置跳转。
