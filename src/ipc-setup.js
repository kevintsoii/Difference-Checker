import { ipcMain } from "electron";
import Store from "electron-store";

const store = new Store();

function setupIPC(mainWindow) {
  ipcMain.handle("store-operation", (event, action, key, value = null) => {
    switch (action) {
      case "get":
        return store.get(key);
      case "set":
        store.set(key, value);
        return true;
      default:
        throw new Error(`Invalid action: ${action}`);
    }
  });

  ipcMain.on("check-first-load", (event) => {
    const isFirstLoad = store.get("isFirstLoad", true);
    if (isFirstLoad) {
      store.set("isFirstLoad", false);
    }
    return isFirstLoad;
  });

  ipcMain.on("window:minimize", () => {
    mainWindow.minimize();
  });

  ipcMain.on("window:maximize", () => {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize();
    } else {
      mainWindow.maximize();
    }
  });

  ipcMain.on("window:close", () => {
    mainWindow.close();
  });

  ipcMain.on("window:ontop", () => {
    mainWindow.setAlwaysOnTop(!mainWindow.isAlwaysOnTop());
  });
}

export default setupIPC;
