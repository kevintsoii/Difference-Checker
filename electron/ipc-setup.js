import { ipcMain, dialog } from "electron";
import Store from "electron-store";
import fs from "fs/promises";

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

  ipcMain.handle("open-file-dialog", async () => {
    const result = await dialog.showOpenDialog({
      properties: ["openFile"],
    });
    return result.filePaths;
  });

  ipcMain.handle("read-file", async (event, filePath) => {
    try {
      const data = await fs.readFile(filePath, "utf8");
      return data;
    } catch (error) {
      console.error("Failed to read file:", error);
      return null;
    }
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

  ipcMain.on("log", (event, message) => {
    console.log(`${message}`);
  });
}

export default setupIPC;
