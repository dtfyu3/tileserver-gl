FROM nvidia/opengl:1.2-glvnd-runtime-ubuntu18.04

RUN apt-get update && apt-get install -y \
    nodejs \
    npm \
    libgl1-mesa-glx \
    libgl1-mesa-dri \
    libgbm1 \
    libx11-6 \
    libopengl0

WORKDIR /app
COPY . .
RUN npm install -g tileserver-gl
EXPOSE 8080

CMD ["tileserver-gl", "--config", "config.json", "--port", "8080"]
