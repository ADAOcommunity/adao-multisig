const electron = require('electron');
const url = require('url');
const path = require('path');
const TrezorConnect = require('trezor-connect');

const {app, BrowserWindow, Menu} = electron;

let mainWindow;
let addKey;

// listen for app to be ready

app.on('ready', function(){
    //create window
    mainWindow = new BrowserWindow({});
    // load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file:',
        slashes: true
    }));
    // TrezorConnect requirement
    TrezorConnect.manifest({
        email: 'noahtjones@jonesfinancial.io',
        appUrl: 'http://www.jonesfinancial.io/quick-vote'
    });
    // build menu
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    // Insert menu
    Menu.setApplicationMenu(mainMenu);
});

// Handle stuff
function createAddKey(){
    
}

// Create menu template
const mainMenuTemplate = [
    {
        label:'File',
        submenu:[
            {
                label: 'Add Secret Key',
                click(){
                    
                }
            },
            {
                label: 'Clear Keys'
            },
            {
                label: 'Quit',
                accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
                click(){
                    app.quit();
                }
            }
        ]
    }
];