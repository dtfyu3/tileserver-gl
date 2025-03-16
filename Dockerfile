# Используем образ с поддержкой OpenGL
FROM node:18

# Устанавливаем OpenGL и другие зависимости
RUN apt-get update && apt-get install -y \
    libjpeg8 \
    libjpeg8-dev \
    libgl1-mesa-glx \
    libgl1-mesa-dri \
    libgbm1 \
    libx11-6 \
    libopengl0

# Создаём рабочую папку
WORKDIR /app

# Копируем файлы проекта
COPY . .

# Устанавливаем зависимости
RUN npm install -g tileserver-gl

# Открываем порт
EXPOSE 8080

# Запускаем tileserver-gl
CMD ["tileserver-gl", "--config", "config.json", "--port", "8080"]
