import { join } from "path";
import { app, BrowserWindow, Menu } from "electron";
import { fileURLToPath } from 'node:url';

import setupIPC from "./ipc-setup.js";

let mainWindow;
const isDev = !!process.env.VITE_DEV_SERVER_URL;
const __dirname = fileURLToPath(new URL('.', import.meta.url));

async function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 800,
    minWidth: 1400,
    minHeight: 800,
    frame: false,
    roundedCorners: false,
    icon: join(__dirname, 'assets', 'logo.png'),
    webPreferences: {
      contextIsolation: true,
      preload: join(__dirname, "preload.js"),
      nodeIntegration: false,
      devTools: true,
    },
  });

  if (isDev && process.env.VITE_DEV_SERVER_URL) {
    await mainWindow.loadURL(process.env.VITE_DEV_SERVER_URL);
  } else {
    const indexHtml = join(__dirname, '..', 'dist', 'index.html');
    await mainWindow.loadFile(indexHtml);
  }
}

app.on("ready", () => {
  createWindow();

  setupIPC(mainWindow);
  Menu.setApplicationMenu(null);
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
