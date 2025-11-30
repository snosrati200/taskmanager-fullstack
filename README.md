📌**Taskmanager – Fullstack Projekt (Spring Boot + React + Docker)**

Ein moderner Fullstack-Taskmanager mit **Spring Boot Backend, React-Frontend, REST API** und vollständigem **Docker-Deployment**.

🚀** Features**
**Frontend (React + Vite)**

- Login & Registrierung

- Aufgabenliste mit vollwertigem CRUD

- Responsive UI

- API-Anbindung ans Backend

- Produktionsbuild über Docker + Nginx

**Backend (Spring Boot)**

- REST API (Tasks, User, Auth)

- H2 / PostgreSQL

- DTO- und Service-Schichten

- Exception-Handling

- Production-Profile

**DevOps**

- Dockerfile (Backend)

- Dockerfile (Frontend, Node 24)

- docker-compose.yml

- Build & Deployment optimiert

📂 Projektstruktur

Build & Deployment optimiert
taskmanager-fullstack/
```
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

**🐳 Docker – Projekt starten**  
🔧 **Build**  
```nginx
docker compose build
```
📍 URLs
| Service     | URL                                            |
| ----------- | ---------------------------------------------- |
| Frontend    | [http://localhost:5173](http://localhost:5173) |
| Backend API | [http://localhost:8080](http://localhost:8080) |

🧪 **Lokale Entwicklung (ohne Docker)**  
 **Backend starten**
```arduino
cd backend
mvn spring-boot:run
```
**Frontend starten**
```
cd frontend
npm install
npm run dev
```
🔒 **Authentifizierung**

- Registrierung & Login

- Passwort-Hashing

- JWT Tokens (falls aktiviert)

📦 Produktion (VPS Deployment)
```nginx
git pull
docker compose build --no-cache
docker compose up -d
```
📝 **API Endpoints (Beispiele)**

**GET /api/tasks**
→ Liefert alle Tasks.

**POST /api/tasks**
→ Erstellt einen Task.

**DELETE /api/tasks/{id}**
→ Löscht einen Task.

🛠 **Technologien**  
**Backend**

- Java 25 (Eclipse Temurin)

- Spring Boot 3

- Maven

- Spring Web

- Spring Security (optional)

- H2 (Dev) / PostgreSQL (Prod)

**Frontend**

- React

- Vite

- Node.js 24 (Docker-Build)

**DevOps**

- Docker

- Docker Compose

- Nginx (Frontend Build)








