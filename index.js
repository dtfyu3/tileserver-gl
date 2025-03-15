const express = require('express');
const path = require('path');
const { spawn } = require('cross-spawn');
const { createProxyMiddleware } = require('http-proxy-middleware');

const configPath = path.join(__dirname, 'tileserver', 'config.json');
console.log(`Путь к config.json: ${configPath}`);

const mbtilesPath = path.join(__dirname, 'tileserver', 'localized_with_temps.mbtiles');
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


app.use('/tiles', createProxyMiddleware({
    target: 'http://localhost:8080', // Локальный адрес tileserver-gl
    changeOrigin: true,
}));
app.get('/', (req, res) => {
    res.send('Прокси-сервер работает!');
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Прокси-сервер запущен на http://localhost:${port}`);
});

// Экспорт функции для Vercel
export default app;
const app = express();
