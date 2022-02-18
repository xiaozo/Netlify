# Netlify

安裝 PM2 於全域 - npm install pm2 -g

安裝 nuxt-start 套件於專案 - npm install nuxt-start  --no-save

使用 pm2 init 產生 ecosystem.config.js 檔案

发布顺序
npm install
npm run build
npm install nuxt-start  --no-save  ///分开安装不然执行npm run build会报错
pm2 start --env prod