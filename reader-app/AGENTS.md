# AGENTS.md

## 项目目标

维护 Lumen Study Desk 桌面学习资料工作台，保证 TXT/EPUB 导入、目录切换、阅读进度、书签和笔记稳定可用。

## 开发约定

- 优先保持 Electron、Vite 和原生 JavaScript 的轻量结构。
- 新功能先补充 `PRD.md` 和 `TECH_DESIGN.md`，再修改代码。
- 书籍数据和阅读进度必须经过统一的 `persist()` 保存。
- 书签、笔记和学习次数也必须经过统一的 `persist()` 保存。
- 不在渲染进程中直接使用 Node.js 文件系统 API。
- 修改后至少运行 `npm run build`。

## 手工验收

1. 启动 `npm run dev`。
2. 确认默认示例书可阅读。
3. 导入 TXT，点击目录切换章节。
4. 导入 EPUB，展开目录并切换章节。
5. 滚动到新的位置，关闭应用后重新打开，确认进度保留。
6. 打开笔记和统计面板，验证新增内容可见。
7. 搜索 TXT 正文，点击结果验证位置跳转。

## 提交建议

提交信息使用简短的动词开头，例如：

```text
feat: add desktop epub reader
```
