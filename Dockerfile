FROM node:18

# 設定工作目錄
WORKDIR /app

# 複製 package.json 和 package-lock.json
COPY package*.json ./

# 安裝 npm 套件
RUN npm install

# 複製專案檔案
COPY . .

# 暴露應用程式使用的端口
EXPOSE 3000

# 預設啟動命令（可依需求調整）
CMD ["node", "index.js"]
