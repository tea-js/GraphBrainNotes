import { app, BrowserWindow } from 'electron'
import debug from 'debug'

const log = debug('main')

app.whenReady().then(function createWindow() {
  log('create BrowserWindow')

  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  })

  win.loadFile('index.html')
})
