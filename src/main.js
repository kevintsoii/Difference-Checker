import path from "path";

import { app, BrowserWindow, Menu } from "electron";
import isDev from "electron-is-dev";

import setupIPC from "./ipc-setup.js";

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 800,
    minWidth: 1000,
    minHeight: 600,
    frame: false,
    icon: path.join(process.cwd(), "public/logo.png"),
    webPreferences: {
      contextIsolation: true,
      preload: path.join(process.cwd(), "src", "preload.js"),
      nodeIntegration: false,
      devTools: false,
    },
  });

  const startURL = isDev
    ? "http://localhost:3000/welcome"
    : `file://${path.resolve(process.cwd(), "..", "build", "index.html")}`;

  mainWindow.loadURL(startURL);
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
