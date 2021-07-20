global.DeveloperMode = 'false' //true Or false
global.linkGC = ['https://chat.whatsapp.com/H6nWsnKwlIrFatoPKacjfX', 'https://chat.whatsapp.com/H6nWsnKwlIrFatoPKacjfX']
global.owner = ['6282273128712', '62882015535456']// Put your number here
global.mods = ['13479805233'] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'dfcd8a99ad75270b'
}

// Sticker WM
global.packname = 'HARY-IT'
global.author = 'Make Your Heart Comfortable'

global.multiplier = 39 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
