(function () {
  "use strict";

  if (window.top !== window) return;
  if (document.getElementById("image-grabber-floating-button")) return;

  const button = document.createElement("button");
  button.id = "image-grabber-floating-button";
  button.type = "button";
  button.textContent = "获取图片";
  document.documentElement.appendChild(button);

  function absoluteUrl(value) {
    if (!value) return null;
    try {
      return new URL(value.trim(), location.href).href;
    } catch (_error) {
      return null;
    }
  }

  function addCandidate(list, value, source) {
    const url = absoluteUrl(value);
    if (!url || !/^https?:/i.test(url)) return;
    if (/^(data:|blob:)/i.test(url)) return;
    list.push({ url, source });
  }

  function collectSrcset(value, list) {
    if (!value) return;
    value.split(",").forEach((part) => {
      addCandidate(list, part.trim().split(/\s+/)[0], "srcset");
    });
  }

  function collectBackground(value, list) {
    if (!value) return;
    const pattern = /url\(["']?([^"')]+)["']?\)/g;
    let match;
    while ((match = pattern.exec(value))) addCandidate(list, match[1], "background-image");
  }

  function collectCandidates() {
    const candidates = [];
    document.querySelectorAll("img").forEach((image) => {
      ["src", "data-src", "data-original", "data-lazy-src", "data-ks-lazyload"].forEach((name) => {
        addCandidate(candidates, image.getAttribute(name), name);
      });
      collectSrcset(image.getAttribute("srcset"), candidates);
      collectSrcset(image.getAttribute("data-srcset"), candidates);
    });
    document.querySelectorAll("[style*='background'], [style*='BACKGROUND']").forEach((element) => {
      collectBackground(element.style.backgroundImage || element.getAttribute("style"), candidates);
    });

    const unique = new Map();
    candidates.forEach((item) => {
      if (!unique.has(item.url)) unique.set(item.url, item);
    });
    return Array.from(unique.values()).slice(0, 300);
  }

  function loadImageInfo(item) {
    return new Promise((resolve) => {
      const image = new Image();
      let settled = false;
      const finish = (result) => {
        if (settled) return;
        settled = true;
        resolve(result);
      };
      const timer = setTimeout(() => finish(null), 4000);
      image.onload = () => {
        clearTimeout(timer);
        const width = image.naturalWidth || 0;
        const height = image.naturalHeight || 0;
        if (width < 100 || height < 100) return finish(null);
        finish({ ...item, width, height });
      };
      image.onerror = () => {
        clearTimeout(timer);
        finish(null);
      };
      image.src = item.url;
    });
  }

  async function extractImages() {
    const candidates = collectCandidates();
    const result = [];
    for (let index = 0; index < candidates.length; index += 8) {
      const batch = await Promise.all(candidates.slice(index, index + 8).map(loadImageInfo));
      result.push(...batch.filter(Boolean));
    }
    return result;
  }

  button.addEventListener("click", async () => {
    button.disabled = true;
    button.textContent = "提取中...";
    try {
      const images = await extractImages();
      await chrome.runtime.sendMessage({ type: "OPEN_GALLERY", images });
      button.textContent = images.length ? `已提取 ${images.length} 张` : "没有找到图片";
    } catch (error) {
      console.error("图提取失败", error);
      button.textContent = "提取失败，请重试";
    } finally {
      setTimeout(() => {
        button.disabled = false;
        button.textContent = "获取图片";
      }, 2200);
    }
  });
})();
