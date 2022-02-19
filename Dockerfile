# 基于最新版的NODE容器创建
FROM node:16.14.0
MAINTAINER waterchestnut "docker@zlx.com"

ENV HOST 0.0.0.0
# 安装pm2的插件webshell，方便在容器外直接管理node和pm2
RUN npm install -g pm2@latest

RUN mkdir -p /nuxt
COPY . /nuxt
WORKDIR /nuxt
RUN npm config set registry https://registry.npm.taobao.org

#RUN npm install

# 映射nodejs可执行文件的目录
# VOLUME ["/Users/deerclass/Desktop/temp/gz"]
# 容器的执行命令
CMD ["npm", "run", "prodstart"]

# 暴露端口映射
EXPOSE 3000