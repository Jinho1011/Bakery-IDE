const { app, BrowserWindow } = require('electron')
let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    frame: false
  })

  mainWindow.loadURL('file://' + __dirname + '/public/views/index.html')

  mainWindow.on('closed', function () {
    mainWindow = null
  })

  // mainWindow.webContents.openDevTools()
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
