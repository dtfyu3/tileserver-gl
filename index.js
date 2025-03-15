const { exec } = require('child_process');

const tileserverProcess = exec('tileserver-gl --config tileserver/config.json');

tileserverProcess.stdout.on('data', (data) => {
    console.log(`tileserver-gl: ${data}`);
});

tileserverProcess.stderr.on('data', (data) => {
    console.error(`tileserver-gl error: ${data}`);
});

tileserverProcess.on('close', (code) => {
    console.log(`tileserver-gl завершил работу с кодом ${code}`);
});
