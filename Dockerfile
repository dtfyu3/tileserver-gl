FROM maptiler/tileserver-gl

WORKDIR /data
COPY ./localized_with_temps.mbtiles /data/
COPY ./config.json /data/

EXPOSE 8080
CMD ["tileserver-gl"]
