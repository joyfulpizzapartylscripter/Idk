const { app, BrowserWindow } = require("electron");
const { exec } = require("child_process");

function createWindow() {

    const win = new BrowserWindow({
        width: 500,
        height: 500,
        frame: true,
        resizable: true,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile("index.html");
}

app.whenReady().then(createWindow);
