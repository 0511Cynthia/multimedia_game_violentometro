import { app, BrowserWindow } from 'electron';
import path from 'path';
import isDev from 'electron-is-dev';

function createWindow() {
    const win = new BrowserWindow({
        width: 1280,
        height: 1024,
        webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
    },
});

    win.loadURL(
        isDev
        ? 'http://localhost:3000' // Modo desarrollo
        : `file://${path.join(__dirname, 'build', 'index.html')}` // Modo producción
    );

    if (isDev) {
        win.webContents.openDevTools(); // Abre las herramientas de desarrollo en modo desarrollo
    }
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});