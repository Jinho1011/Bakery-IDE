const scan = document.querySelector('.scan-btn')
const upload = document.querySelector('.upload-btn')
const toggleCodeBtn = document.querySelector('.code-btn')
const codeSection = document.querySelector('block-code-wrapper')
const { remote } = require('electron')
const minimizeBtn = document.querySelector('.btn-wrapper:nth-child(1)')
const maximizeBtn = document.querySelector('.btn-wrapper:nth-child(2)')
const closeBtn = document.querySelector('.btn-wrapper:nth-child(3)')

var fs = require('fs')
var code
var portNum

const exec = require('child_process').exec

function execute (command, callback) {
  exec(command, (err, stdout, stderr) => {
    try {
      callback(stdout)
    } catch (error) {
      console.log(err)
    }
  })
}

const handleScan = () => {
  execute('cd extraResources && cd portscan && portscan', output => {
    portNum = output
  })
}

const handleUpload = () => {
  fs.readFile('code.txt', 'utf8', function (err, data) {
    try {
      code = data
      code = code.replace(/\n/g, '')
      execute(`cd extraResources && cd arduino && INOGenerator.exe ${code}`)
    } catch (error) {
      console.log(err)
    }
  })
  execute(
    `cd extraResources && cd arduino&&ArduinoUpload.exe arduino:avr:uno ${portNum}`,
    output => {
      console.log(output)
    }
  )
}

const toggleCodeSection = () => {
  codeSection.className = 'displayNone'
}

const closeWindow = () => {
  var window = remote.BrowserWindow.getFocusedWindow()
  window.close()
}

const minimizeWindow = () => {
  var window = remote.BrowserWindow.getFocusedWindow()
  window.minimize()
}

const maximizeWindow = () => {
  var window = remote.BrowserWindow.getFocusedWindow()
  window.isMaximized() ? window.unmaximize() : window.maximize()
}

scan.addEventListener('click', handleScan)
upload.addEventListener('click', handleUpload)
toggleCodeBtn.addEventListener('click', toggleCodeSection)
closeBtn.addEventListener('click', closeWindow)
minimizeBtn.addEventListener('click', minimizeWindow)
maximizeBtn.addEventListener('click', maximizeWindow)
