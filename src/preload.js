const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  storeOperation: (action, key, value) =>
    ipcRenderer.invoke("store-operation", action, key, value),

  openFileDialog: () => ipcRenderer.invoke("open-file-dialog"),
  readFile: (filePath) => ipcRenderer.invoke("read-file", filePath),

  minimizeWindow: () => ipcRenderer.send("window:minimize"),
  maximizeWindow: () => ipcRenderer.send("window:maximize"),
  closeWindow: () => ipcRenderer.send("window:close"),
  alwaysOnTop: () => ipcRenderer.send("window:ontop"),

  log: (message) => ipcRenderer.send("log", message),
});
