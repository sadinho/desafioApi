FROM node:12.18-alpine
WORKDIR /usr/src/app
ENV NODE_ENV=production
COPY ["package.json", "./"]
RUN npm i --save && npm install --global serve
COPY . .
RUN npm run build
EXPOSE 5000
CMD ["serve", "-s", "build"]