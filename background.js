chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message?.type !== "OPEN_GALLERY") return;

  const images = Array.isArray(message.images) ? message.images : [];
  chrome.storage.local.set({ imageGrabberImages: images }).then(() => {
    chrome.tabs.create({ url: chrome.runtime.getURL("gallery.html") });
  }).catch((error) => {
    console.error("无法保存图片列表", error);
  });

  sendResponse({ ok: true });
  return true;
});
