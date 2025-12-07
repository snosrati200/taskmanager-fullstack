# -------- Build Stage --------
FROM node:24 AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Important:
ENV NODE_ENV=production
ENV VITE_API_URL=/api

RUN npm run build

# -------- Serve Stage --------
FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
