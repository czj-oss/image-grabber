const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("readerStore", {
  load: () => ipcRenderer.invoke("reader:load-state"),
  save: (state) => ipcRenderer.invoke("reader:save-state", state)
});
