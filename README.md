# Netlify

安裝 PM2 於全域 - npm install pm2 -g

安裝 nuxt-start 套件於專案 - npm install nuxt-start  --no-save

使用 pm2 init 產生 ecosystem.config.js 檔案

//docker 
ecosystem.config.js  // cwd: '/nuxt/',  ///docker解掉注释

docker build -t nuxt:v1 .

docker run --name nuxt -p 3000:3000 -d nuxt:v1
or
docker run  -it --name nuxt -v /Users/deerclass/Desktop/temp/gz:/nuxt -p 3000:3000 -d nuxt:v1  //挂载

docker exec -it nuxt /bin/bash -c 'pm2 ps'