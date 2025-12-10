# ---- Build Stage ----
FROM node:24 AS build
WORKDIR /app

COPY frontend/package*.json ./
RUN npm install

COPY frontend .

ENV NODE_ENV=production
ENV VITE_API_URL=/api

RUN chmod +x ./node_modules/.bin/vite
RUN npm run build

# ---- Serve Stage ----
FROM nginx:stable-alpine

# Copy built frontend assets from the 'build' stage
COPY --from=build /app/dist /usr/share/nginx/html

# *** ADD THIS LINE TO FIX PERMISSIONS ***
RUN chmod -R 755 /usr/share/nginx/html

# Copy nginx config from project root
COPY ./nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]