# Lumen Study Desk

课程实习项目：一个支持 TXT、EPUB、本地书架、目录切换、阅读进度、书签、学习笔记、正文搜索和统计面板的 Electron 桌面学习资料工作台。

## 启动

在本目录执行：

```powershell
npm install
npm run dev
```

如果只想验证构建：

```powershell
npm run build
npm start
```

## 截图建议

考核表单的“03 文档截图”可以截取 `PRD.md`、`TECH_DESIGN.md`、`AGENTS.md` 在编辑器中的内容。

“04 应用截图”建议准备三张：

1. 默认示例书打开，能看到书架、正文和目录。
2. 导入 TXT 后，点击目录切换章节。
3. 导入 EPUB 后，显示 EPUB 标识和目录。

应用窗口可以使用 Windows 截图工具 `Win + Shift + S`，框选整个学习工作台窗口。

## 证据截图

已生成的应用截图位于 `evidence/`：

- `study-desk-notes-saved.png`：学习笔记已保存。
- `study-desk-stats-final.png`：学习统计、书签和笔记数量。
