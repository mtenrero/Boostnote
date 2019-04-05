const BrowserWindow = require('electron').BrowserWindow
const path = require('path')

const windowSize = {
  x: null,
  y: null,
  width: 1080,
  height: 720
}

function DetachedWindow() {
  const noteWindow = new BrowserWindow({
    x: windowSize.x,
    y: windowSize.y,
    width: windowSize.width,
    height: windowSize.height,
    useContentSize: true,
    minWidth: 500,
    minHeight: 320,
    webPreferences: {
      zoomFactor: 1.0,
      enableBlinkFeatures: 'OverlayScrollbars'
    },
    icon: path.resolve(__dirname, '../resources/app.png')
  })

  const url = path.resolve(__dirname, './detached-note.html')
  noteWindow.loadURL('file://' + url)
  
  return noteWindow
}

module.exports = DetachedWindow