const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  storeOperation: (action, key, value) =>
    ipcRenderer.invoke("store-operation", action, key, value),
  checkFirstLoad: () => ipcRenderer.invoke("check-first-load"),

  minimizeWindow: () => ipcRenderer.send("window:minimize"),
  maximizeWindow: () => ipcRenderer.send("window:maximize"),
  closeWindow: () => ipcRenderer.send("window:close"),
  alwaysOnTop: () => ipcRenderer.send("window:ontop"),
});
