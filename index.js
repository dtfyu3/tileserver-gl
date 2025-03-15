import tileserver from 'tileserver-gl';
import path from 'path';
import { fileURLToPath } from 'url';

// Получаем __dirname в ES-модулях
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Путь к конфигурационному файлу
const configPath = path.join(__dirname, 'tileserver', 'config.json');

// Запуск tileserver-gl
const server = tileserver(configPath);

// Экспорт функции для Vercel
export default server;
