(function () {
  "use strict";

  const gallery = document.getElementById("gallery");
  const summary = document.getElementById("summary");
  const status = document.getElementById("status");
  const emptyState = document.getElementById("empty-state");
  let images = [];

  function setStatus(message, kind) {
    status.textContent = message;
    status.className = `status ${kind || ""}`;
  }

  function updateSummary() {
    const selected = images.filter((item) => item.selected).length;
    summary.textContent = `共 ${images.length} 张图片，已选 ${selected} 张`;
  }

  function render() {
    gallery.replaceChildren();
    emptyState.hidden = images.length > 0;
    if (!images.length) {
      summary.textContent = "没有可展示的图片";
      return;
    }
    images.forEach((item, index) => {
      const card = document.createElement("article");
      card.className = `image-card${item.selected ? "" : " is-unselected"}`;
      const preview = document.createElement("div");
      preview.className = "preview-wrap";
      const image = document.createElement("img");
      image.src = item.url;
      image.alt = `商品图片 ${index + 1}`;
      image.loading = "lazy";
      image.onerror = () => { image.alt = "图片加载失败"; };
      preview.appendChild(image);

      const meta = document.createElement("label");
      meta.className = "image-meta";
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = item.selected;
      checkbox.addEventListener("change", () => {
        item.selected = checkbox.checked;
        card.classList.toggle("is-unselected", !item.selected);
        updateSummary();
      });
      const details = document.createElement("span");
      details.innerHTML = `<p class="image-index">商品图_${String(index + 1).padStart(3, "0")}</p><p class="image-size">${item.width || "?"} x ${item.height || "?"}</p>`;
      meta.append(checkbox, details);
      card.append(preview, meta);
      gallery.appendChild(card);
    });
    updateSummary();
  }

  function downloadAsPng(item, index) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.crossOrigin = "anonymous";
      image.onload = () => {
        try {
          const canvas = document.createElement("canvas");
          canvas.width = image.naturalWidth;
          canvas.height = image.naturalHeight;
          canvas.getContext("2d").drawImage(image, 0, 0);
          canvas.toBlob((blob) => {
            if (!blob) return reject(new Error("无法生成 PNG"));
            const url = URL.createObjectURL(blob);
            chrome.downloads.download({
              url,
              filename: `商品图_${String(index + 1).padStart(3, "0")}.png`,
              saveAs: false
            }).then(() => {
              setTimeout(() => URL.revokeObjectURL(url), 30000);
              resolve();
            }).catch(reject);
          }, "image/png");
        } catch (error) {
          reject(error);
        }
      };
      image.onerror = () => reject(new Error("图片跨域或链接失效"));
      image.src = item.url;
    });
  }

  document.getElementById("select-all").addEventListener("click", () => {
    images.forEach((item) => { item.selected = true; });
    render();
  });

  document.getElementById("invert-selection").addEventListener("click", () => {
    images.forEach((item) => { item.selected = !item.selected; });
    render();
  });

  document.getElementById("download-selected").addEventListener("click", async (event) => {
    const button = event.currentTarget;
    const selected = images.map((item, index) => ({ item, index })).filter(({ item }) => item.selected);
    if (!selected.length) {
      setStatus("请至少选择一张图片", "error");
      return;
    }
    button.disabled = true;
    let success = 0;
    let failed = 0;
    for (const entry of selected) {
      setStatus(`正在下载 ${success + failed + 1}/${selected.length}...`);
      try {
        await downloadAsPng(entry.item, entry.index);
        success += 1;
      } catch (error) {
        failed += 1;
        console.warn("下载失败", entry.item.url, error);
      }
    }
    button.disabled = false;
    setStatus(`下载完成：成功 ${success} 张${failed ? `，失败 ${failed} 张，可能是跨域或链接失效` : ""}`, failed ? "error" : "success");
  });

  chrome.storage.local.get(["imageGrabberImages"]).then((data) => {
    images = (data.imageGrabberImages || []).map((item) => ({ ...item, selected: true }));
    render();
    if (!images.length) setStatus("没有读取到图片列表", "error");
  }).catch((error) => {
    console.error(error);
    setStatus("读取图片列表失败", "error");
    emptyState.hidden = false;
  });
})();
