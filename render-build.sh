#!/usr/bin/env bash

# Устанавливаем зависимости для OpenGL
apt-get update && apt-get install -y \
    libgl1-mesa-glx \
    libgl1-mesa-dri \
    libgbm1 \
    libx11-6

# Запускаем tileserver-gl
node server.js
