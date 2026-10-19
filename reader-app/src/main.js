import ePub from "epubjs";
import { createIcons, icons } from "lucide";
import "./styles.css";

const DEMO_ID = "demo-ai-reader";
const initialDemo = {
  id: DEMO_ID,
  title: "AI 编程实习手册",
  author: "课程示例 · 蔡子靖",
  type: "TXT",
  sizeLabel: "课程示例",
  content: [
    "AI 编程实习手册",
    "",
    "第一章  从需求开始",
    "",
    "一个可交付的项目，不是从写代码开始，而是从理解问题开始。",
    "先把用户要完成的任务说清楚，再把任务拆成可以验证的小步骤。PRD 负责描述要解决什么问题，技术设计负责说明准备如何解决，AGENTS 文档则把协作约定留给下一轮开发。",
    "",
    "第二章  让迭代留下痕迹",
    "",
    "第一次实现只需要覆盖最小可用范围。完成后通过真实操作发现问题，再把新增需求写回文档并进入下一轮开发。每次迭代都应该能回答三个问题：哪里变好了，如何验证，下一步是什么。",
    "",
    "第三章  把结果交付出去",
    "",
    "代码通过构建只是起点。桌面应用还需要实际启动、导入真实文件、切换章节，并确认关闭后再次打开仍能回到上次阅读位置。一个被验证过的作品，才真正完成了从想法到产品的旅程。",
    "",
    "结语",
    "",
    "保持好奇，持续交付。"
  ].join("\n"),
  chapters: [
    { id: "demo-1", label: "第一章  从需求开始", start: 2 },
    { id: "demo-2", label: "第二章  让迭代留下痕迹", start: 10 },
    { id: "demo-3", label: "第三章  把结果交付出去", start: 18 },
    { id: "demo-4", label: "结语", start: 26 }
  ],
  progress: 18,
  currentChapter: 0,
  importedAt: "课程示例"
};

const state = {
  books: [],
  activeBookId: DEMO_ID,
  theme: "light",
  search: "",
  epub: null,
  rendition: null,
  saveTimer: null,
  skipScrollUpdateUntil: 0
};

const lucideNames = {
  book: "book-open",
  add: "file-plus-2",
  folder: "folder-open",
  upload: "upload",
  list: "list",
  right: "panel-right",
  search: "search",
  sun: "sun",
  moon: "moon",
  back: "chevron-left",
  next: "chevron-right",
  close: "x"
};

const icon = (name, size = 17) => `<i data-lucide="${lucideNames[name] || name}" width="${size}" height="${size}" stroke-width="1.8"></i>`;

const app = document.querySelector("#app");

function activeBook() {
  return state.books.find((book) => book.id === state.activeBookId) || state.books[0];
}

function escapeHtml(value = "") {
  return value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  }[char]));
}

function formatProgress(value) {
  return `${Math.round(value || 0)}%`;
}

function chapterRows(book) {
  const chapters = book?.chapters || [];
  const query = state.search.trim().toLowerCase();
  return chapters
    .map((chapter, index) => ({ ...chapter, index }))
    .filter((chapter) => !query || chapter.label.toLowerCase().includes(query));
}

function render() {
  const book = activeBook() || initialDemo;
  const chapters = chapterRows(book);
  document.documentElement.dataset.theme = state.theme;
  app.innerHTML = `
    <div class="app-shell">
      <header class="topbar">
        <div class="brand">${icon("book", 22)}<span>Lumen Reader</span><small>DESKTOP READER</small></div>
        <div class="topbar-actions">
          <label class="import-button" title="导入 TXT 或 EPUB 文件">
            ${icon("upload")}<span>导入书籍</span>
            <input id="file-input" type="file" accept=".txt,.epub,text/plain,application/epub+zip" />
          </label>
          <button class="icon-button" id="theme-toggle" title="切换主题">${icon(state.theme === "light" ? "moon" : "sun")}</button>
        </div>
      </header>
      <main class="workspace">
        <aside class="library-panel">
          <div class="panel-heading"><div><span class="eyebrow">MY LIBRARY</span><h1>我的书架</h1></div><button class="small-icon-button" id="focus-import" title="导入新书">${icon("add", 16)}</button></div>
          <div class="library-count">${state.books.length} 本书 · 已保存阅读进度</div>
          <div class="book-list">
            ${state.books.map((item) => `
              <button class="book-card ${item.id === book.id ? "is-active" : ""}" data-book-id="${item.id}">
                <span class="book-cover ${item.type === "EPUB" ? "cover-epub" : ""}">${item.type}</span>
                <span class="book-card-copy"><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.author || "未知作者")}</small><em>${formatProgress(item.progress)}</em></span>
              </button>
            `).join("")}
          </div>
          <div class="library-footer"><span class="status-dot"></span><span>本地数据已同步</span></div>
        </aside>
        <section class="reader-panel">
          <div class="reader-toolbar">
            <div class="reader-meta"><span class="format-badge">${book.type}</span><div><h2>${escapeHtml(book.title)}</h2><p>${escapeHtml(book.author || "未知作者")} · ${escapeHtml(book.sizeLabel || "本地文件")}</p></div></div>
            <div class="reader-tools"><button class="tool-button" id="focus-search" title="搜索目录">${icon("search")}<span>搜索</span></button><button class="tool-button" id="toggle-toc" title="显示或隐藏目录">${icon("right")}<span>目录</span></button></div>
          </div>
          <div class="progress-line"><span style="width: ${Math.max(1, Math.min(100, book.progress || 0))}%"></span></div>
          <div class="reader-stage">
            <div class="reader-content ${book.type === "EPUB" ? "is-epub" : ""}" id="reader-content"></div>
            <div class="reader-empty" id="reader-empty" hidden></div>
          </div>
          <footer class="reader-footer"><button class="text-button" id="previous-chapter">${icon("back", 15)}上一章</button><span id="reading-status">第 ${(book.currentChapter || 0) + 1} 章 · ${formatProgress(book.progress)} 已读</span><button class="text-button" id="next-chapter">下一章${icon("next", 15)}</button></footer>
        </section>
        <aside class="toc-panel" id="toc-panel">
          <div class="toc-heading"><div><span class="eyebrow">CONTENTS</span><h2>目录</h2></div><button class="small-icon-button" id="close-toc" title="关闭目录">${icon("close", 16)}</button></div>
          <label class="search-field">${icon("search", 15)}<input id="toc-search" type="search" placeholder="搜索章节" value="${escapeHtml(state.search)}" /></label>
          <div class="toc-list">${chapters.length ? chapters.map((chapter) => `<button class="toc-row ${chapter.index === (book.currentChapter || 0) ? "is-current" : ""}" data-chapter-index="${chapter.index}"><span>${String(chapter.index + 1).padStart(2, "0")}</span><strong>${escapeHtml(chapter.label)}</strong>${chapter.index === (book.currentChapter || 0) ? `<i>${icon("right", 14)}</i>` : ""}</button>`).join("") : `<p class="no-results">没有匹配的章节</p>`}</div>
          <div class="toc-note">${book.type === "EPUB" ? "EPUB 目录来自书籍内置导航。" : "TXT 章节根据标题自动识别，也可以继续滚动阅读。"}</div>
        </aside>
      </main>
      <div class="toast" id="toast" role="status"></div>
    </div>
  `;
  createIcons({ icons });
  bindEvents();
  if (book.type === "TXT") renderTxt(book);
  else renderEpub(book);
}

function bindEvents() {
  document.querySelector("#file-input")?.addEventListener("change", handleImport);
  document.querySelector("#focus-import")?.addEventListener("click", () => document.querySelector("#file-input")?.click());
  document.querySelector("#theme-toggle")?.addEventListener("click", () => {
    state.theme = state.theme === "light" ? "dark" : "light";
    persist();
    render();
  });
  document.querySelector("#toggle-toc")?.addEventListener("click", () => document.querySelector("#toc-panel")?.classList.toggle("is-collapsed"));
  document.querySelector("#close-toc")?.addEventListener("click", () => document.querySelector("#toc-panel")?.classList.add("is-collapsed"));
  document.querySelector("#focus-search")?.addEventListener("click", () => document.querySelector("#toc-search")?.focus());
  document.querySelector("#toc-search")?.addEventListener("input", (event) => {
    state.search = event.target.value;
    render();
    const input = document.querySelector("#toc-search");
    input?.focus();
    input?.setSelectionRange(input.value.length, input.value.length);
  });
  document.querySelectorAll("[data-book-id]").forEach((button) => button.addEventListener("click", () => {
    state.activeBookId = button.dataset.bookId;
    state.search = "";
    destroyEpub();
    persist();
    render();
  }));
  document.querySelectorAll("[data-chapter-index]").forEach((button) => button.addEventListener("click", () => selectChapter(Number(button.dataset.chapterIndex))));
  document.querySelector("#previous-chapter")?.addEventListener("click", () => selectChapter(Math.max(0, (activeBook().currentChapter || 0) - 1)));
  document.querySelector("#next-chapter")?.addEventListener("click", () => selectChapter(Math.min(activeBook().chapters.length - 1, (activeBook().currentChapter || 0) + 1)));
}

function renderTxt(book) {
  const host = document.querySelector("#reader-content");
  const lines = book.content.split(/\r?\n/);
  host.innerHTML = `<article class="txt-reader">${lines.map((line) => line.trim() ? `<p>${escapeHtml(line)}</p>` : `<div class="paragraph-gap"></div>`).join("")}</article>`;
  const chapter = book.chapters[book.currentChapter || 0];
  if (chapter) {
    const lineNodes = host.querySelectorAll("p, .paragraph-gap");
    const target = lineNodes[chapter.start];
    if (target) target.scrollIntoView({ block: "start" });
  }
  host.addEventListener("scroll", () => {
    if (Date.now() < state.skipScrollUpdateUntil) return;
    const max = host.scrollHeight - host.clientHeight;
    const progress = max > 0 ? (host.scrollTop / max) * 100 : 0;
    const currentChapter = chapterIndexAtScroll(book, host.scrollTop);
    book.progress = Math.max(0, Math.min(100, progress));
    book.currentChapter = currentChapter;
    updateReadingStatus(book);
    schedulePersist();
  }, { passive: true });
}

function chapterIndexAtScroll(book, scrollTop) {
  const host = document.querySelector("#reader-content");
  const nodes = host?.querySelectorAll("p, .paragraph-gap") || [];
  let current = 0;
  book.chapters.forEach((chapter, index) => {
    const node = nodes[chapter.start];
    if (node && node.offsetTop - 80 <= scrollTop) current = index;
  });
  return current;
}

async function renderEpub(book) {
  const host = document.querySelector("#reader-content");
  if (!book.data) {
    host.innerHTML = `<div class="unsupported"><strong>没有找到 EPUB 内容</strong><span>请重新导入这个文件。</span></div>`;
    return;
  }
  try {
    state.epub = ePub(base64ToArrayBuffer(book.data));
    const navigation = await state.epub.loaded.navigation;
    if (!book.chapters?.length && navigation?.toc?.length) {
      book.chapters = flattenToc(navigation.toc);
      persist();
      render();
      return;
    }
    state.rendition = state.epub.renderTo(host, { width: "100%", height: "100%", spread: "none", flow: "scrolled" });
    state.rendition.on("relocated", (location) => {
      const percentage = location?.start?.percentage ? location.start.percentage * 100 : book.progress;
      book.progress = Math.max(0, Math.min(100, percentage));
      const href = location?.start?.href || "";
      const chapter = book.chapters.findIndex((item) => href.includes(item.href));
      if (chapter >= 0) book.currentChapter = chapter;
      updateReadingStatus(book);
      schedulePersist();
    });
    await state.rendition.display(book.chapters?.[book.currentChapter || 0]?.href || undefined);
  } catch (error) {
    host.innerHTML = `<div class="unsupported"><strong>EPUB 读取失败</strong><span>${escapeHtml(error.message || "文件格式暂不支持")}</span></div>`;
  }
}

function flattenToc(items, output = []) {
  items.forEach((item) => {
    output.push({ id: item.href, label: item.label.trim(), href: item.href });
    if (item.subitems?.length) flattenToc(item.subitems, output);
  });
  return output;
}

function selectChapter(index) {
  const book = activeBook();
  if (!book?.chapters?.[index]) return;
  book.currentChapter = index;
  if (book.type === "TXT") {
    const host = document.querySelector("#reader-content");
    const nodes = host?.querySelectorAll("p, .paragraph-gap") || [];
    state.skipScrollUpdateUntil = Date.now() + 700;
    nodes[book.chapters[index].start]?.scrollIntoView({ behavior: "smooth", block: "start" });
    book.progress = Math.max(book.progress || 0, Math.min(99, Math.round((index / Math.max(1, book.chapters.length - 1)) * 100)));
    updateReadingStatus(book);
    persist();
  } else {
    state.rendition?.display(book.chapters[index].href);
  }
  document.querySelectorAll(".toc-row").forEach((row) => row.classList.toggle("is-current", Number(row.dataset.chapterIndex) === index));
}

function updateReadingStatus(book) {
  const status = document.querySelector("#reading-status");
  const progress = document.querySelector(".progress-line span");
  if (status) status.textContent = `第 ${(book.currentChapter || 0) + 1} 章 · ${formatProgress(book.progress)} 已读`;
  if (progress) progress.style.width = `${Math.max(1, Math.min(100, book.progress || 0))}%`;
}

async function handleImport(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    const extension = file.name.toLowerCase().endsWith(".epub") ? "EPUB" : "TXT";
    const id = `${extension.toLowerCase()}-${Date.now()}`;
    const book = {
      id,
      title: file.name.replace(/\.(txt|epub)$/i, ""),
      author: "本地导入",
      type: extension,
      sizeLabel: `${Math.max(1, Math.round(file.size / 1024))} KB`,
      progress: 0,
      currentChapter: 0,
      importedAt: new Date().toLocaleDateString("zh-CN")
    };
    if (extension === "TXT") {
      book.content = await file.text();
      book.chapters = makeTxtChapters(book.content);
    } else {
      book.data = arrayBufferToBase64(await file.arrayBuffer());
      const parsed = ePub(base64ToArrayBuffer(book.data));
      const navigation = await parsed.loaded.navigation;
      book.chapters = flattenToc(navigation.toc || []);
      book.title = parsed.packaging?.metadata?.title || book.title;
      book.author = parsed.packaging?.metadata?.creator || book.author;
      parsed.destroy();
    }
    state.books = [book, ...state.books.filter((item) => item.id !== id)];
    state.activeBookId = id;
    state.search = "";
    destroyEpub();
    await persist();
    render();
    showToast(`${extension} 已导入，目录和阅读进度已启用`);
  } catch (error) {
    showToast(`导入失败：${error.message || "请检查文件格式"}`);
  } finally {
    event.target.value = "";
  }
}

function makeTxtChapters(content) {
  const lines = content.split(/\r?\n/);
  const chapters = [];
  const pattern = /^(第[\u4e00-\u9fa5\d]+[章节回].*|Chapter\s+\d+.*|[一二三四五六七八九十]+[、.].*)$/i;
  lines.forEach((line, index) => {
    if (pattern.test(line.trim())) chapters.push({ id: `txt-${index}`, label: line.trim(), start: index });
  });
  return chapters.length ? chapters : [{ id: "txt-start", label: "正文", start: 0 }];
}

function arrayBufferToBase64(buffer) {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  const chunk = 0x8000;
  for (let index = 0; index < bytes.length; index += chunk) binary += String.fromCharCode(...bytes.subarray(index, index + chunk));
  return btoa(binary);
}

function base64ToArrayBuffer(value) {
  const binary = atob(value);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index);
  return bytes.buffer;
}

function destroyEpub() {
  state.rendition?.destroy();
  state.epub?.destroy();
  state.rendition = null;
  state.epub = null;
}

function schedulePersist() {
  window.clearTimeout(state.saveTimer);
  state.saveTimer = window.setTimeout(persist, 250);
}

async function persist() {
  const saveState = {
    books: state.books,
    activeBookId: state.activeBookId,
    theme: state.theme
  };
  await window.readerStore?.save(saveState);
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.setTimeout(() => toast.classList.remove("is-visible"), 2400);
}

async function boot() {
  const saved = await window.readerStore?.load();
  state.books = saved?.books?.length ? saved.books : [initialDemo];
  state.activeBookId = saved?.activeBookId || state.books[0].id;
  state.theme = saved?.theme || "light";
  if (!state.books.some((book) => book.id === DEMO_ID)) state.books.push(initialDemo);
  render();
}

boot();
