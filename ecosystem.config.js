module.exports = {
  apps: [
    {
      name: 'linche0859_nuxt',
      // cwd: '/nuxt/',  ///docker解掉注释
      script: './node_modules/nuxt-start/bin/nuxt-start.js',
      instances: '2', // 負載平衡模式下的 cpu 數量
      exec_mode: 'cluster', // cpu 負載平衡模式
      max_memory_restart: '1G', // 緩存了多少記憶體重新整理
      // port: 3001, // 預設伺服器上的 port，盡量高於 1024
      // 為了在使用 pm2 start 時可以正確取得 NODE_ENV 的值
      env_prod: {
        name: 'linche0859_nuxt_prod',
        PORT: 3000, //指定伺服器上的 port
        NODE_ENV: 'prod',
      },
      env_sit: {
        name: 'linche0859_nuxt_sit',
        PORT: 3002, //指定伺服器上的 port
        NODE_ENV: 'sit',
      },
    },
  ],
};