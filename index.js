const tileserver = require('tileserver-gl');
const path = require('path');


const configPath = path.join(__dirname, 'tileserver', 'config.json');


const server = tileserver(configPath);
module.exports = server;
