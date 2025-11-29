📌 Taskmanager – Fullstack Projekt (Spring Boot + React + Docker)

Ein moderner Fullstack-Taskmanager mit Spring Boot Backend, React-Frontend, REST API und vollständigem Docker-Support für einfaches Deployment.

🚀 Features
Frontend (React + Vite)

Login & Registrierung

Aufgabenliste mit CRUD

Drag & Drop (optional)

Responsive UI

API-Anbindung ans Backend

Deployment-ready (Docker + Nginx)

Backend (Spring Boot)

REST API (Tasks, User, Auth)

DB-Anbindung (H2 / Postgres)

Exception Handling

DTOs & Services sauber getrennt

Production Profile verfügbar

DevOps & Deployment

Dockerfile für Backend

Dockerfile für Frontend

docker-compose.yml

Produziert zwei Images:

taskmanager-backend

taskmanager-frontend

```
📂 Projektstruktur
taskmanager-fullstack/
├── backend/
│   ├── src/
│   ├── pom.xml
│   ├── Dockerfile
│   └── ...
├── frontend/
│   ├── src/
│   ├── package.json
│   ├── Dockerfile
│   └── ...
└── docker-compose.yml
```

🐳 Docker – Projekt starten
🔧 Build
docker compose build

▶️ Starten
docker compose up

📍 URLs
Service	URL
Frontend	http://localhost:5173

Backend API	http://localhost:8080
🧪 Lokale Entwicklung (ohne Docker)
Backend starten
cd backend
mvn spring-boot:run

Frontend starten
cd frontend
npm install
npm run dev

🔒 Authentifizierung

Registrierung & Login

Passwort-Hashing

JWT Tokens (falls vorhanden)

📦 Produktion (VPS-Deployment)

Nach Serverbereitstellung:

git pull
docker compose build --no-cache
docker compose up -d

📝 API Endpoints (Beispiele)
GET /api/tasks

Liefert alle Tasks.

POST /api/tasks

Erstellt einen neuen Task.

DELETE /api/tasks/{id}
📘 Technologien
Frontend

React

Vite

Axios

Tailwind oder CSS

Backend

Spring Boot

Java 17+

Maven

Spring Web

H2 / PostgreSQL

Spring Security (falls genutzt)

DevOps

Docker

Nginx (Frontend)

docker-compose