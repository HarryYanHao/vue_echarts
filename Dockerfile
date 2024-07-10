# 基于Node.js的官方Docker镜像
FROM node:14-alpine
 
# 设置工作目录
WORKDIR /app
 
# 复制package.json文件和package-lock.json文件
COPY package*.json ./
 

# 安装@vue/cli-service
RUN npm install -g @vue/cli-service

# 安装项目依赖
# RUN npm install -save-dev
 
# 复制项目文件和目录到工作目录
COPY . /app
 
# 暴露8082端口
EXPOSE 8088
 
# 运行Vue.js开发服务器
#CMD ["npm", "run", "serve"]