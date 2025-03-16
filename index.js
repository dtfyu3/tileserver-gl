const express = require('express');
const path = require('path');
const { spawn } = require('cross-spawn');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;
console.log(port);

const configPath = path.join(__dirname, 'tileserver', 'config.json');
console.log(`Путь к config.json: ${configPath}`);

const mbtilesPath = path.join(__dirname, 'localized_with_temps.mbtiles');
if (!fs.existsSync(mbtilesPath)) {
    console.error(`Файл localized_with_temps.mbtiles не найден по пути: ${mbtilesPath}`);
    process.exit(1);
}
const tileserverProcess = spawn(
    'npx',
    [
        'tileserver-gl',
        '--config',
        path.join(__dirname, 'tileserver', 'config.json')
    ],
    { stdio: 'inherit' }
);

tileserverProcess.on('spawn', () => {
    console.log('tileserver-gl запущен');
})
tileserverProcess.stdout?.on('data', (data) => {
    console.log(`tileserver-gl: ${data}`);
});

tileserverProcess.stderr?.on('data', (data) => {
    console.error(`tileserver-gl error: ${data}`);
});

tileserverProcess.on('close', (code) => {
    console.log(`tileserver-gl завершил работу с кодом ${code}`);
});

app.get('/', (req, res) => {
    res.send('Cервер работает!');
});

process.stdout.pipe(process.stdout);
process.stderr.pipe(process.stderr);



