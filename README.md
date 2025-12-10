# 📘 TaskManager – Fullstack Projekt

Dies ist eine moderne, vollständig containerisierte **Full-Stack-Webanwendung** zur Aufgabenverwaltung (To-Do/Task-Management), erstellt im Rahmen eines **intensiven Lernprogramms**.

[![Tech Stack](https://img.shields.io/badge/Stack-Fullstack-informational)](#-technologie-stack--architektur)
[![Backend](https://img.shields.io/badge/Backend-Spring%20Boot%20(Java%2025)-brightgreen)](#-technologie-stack--architektur)
[![Frontend](https://img.shields.io/badge/Frontend-Vite-blue)](#-technologie-stack--architektur)
[![Deployment](https://img.shields.io/badge/Deployment-Docker%20Compose-blue)](#-produktion-starten-deployment)
[![Proxy](https://img.shields.io/badge/Proxy-Nginx%20+%20HTTPS-red)](#-docker-compose--dienste-und-routing)

---

## 🛠 Technologie-Stack & Architektur

Die Anwendung besteht aus folgenden Hauptkomponenten, die über **Docker Compose** orchestriert werden:

- **Backend:** Spring Boot (Java 25) als REST API  
- **Frontend:** Single Page Application (SPA) gebaut mit **Vite**  
- **Deployment:** **Nginx** als Reverse Proxy zur Auslieferung des Frontends und zur Weiterleitung der API-Anfragen  
- **Sicherheit:** **HTTPS**-Implementierung über Nginx und Let’s Encrypt  

---

## 🚀 Projektstruktur

```text
project-root/
├── backend/
│   ├── src/
│   ├── pom.xml
│   └── Dockerfile
├── frontend/
│   ├── src/
│   └── package.json
├── nginx/
│   ├── conf.d/
│   │   └── default.conf
│   └── Dockerfile
└── docker-compose.yml
```
 

## 🐳 Docker Compose – Dienste und Routing

### Dienste

| Dienst     | Technologie              | Port            | Routing              |
|------------|--------------------------|-----------------|----------------------|
| **Backend** | Spring Boot (Java 25)   | `8080` (intern) | Erreichbar über `/api/*` |
| **Nginx**   | Reverse Proxy           | `80`, `443`     | Serviert Frontend & leitet API weiter |

### Beispiel-Routing

| Route         | Bedeutung             | Ziel                          |
|---------------|-----------------------|-------------------------------|
| `/`           | Statisches Frontend   | Nginx (`/usr/share/nginx/html`) |
| `/api/tasks`  | REST-API Endpunkt     | Backend (`backend:8080`)       |

---

## 🚢 Produktion starten (Deployment)

Führe die folgenden Befehle im Projekt-Root-Verzeichnis aus:

1. **Builden und Starten** (beim ersten Mal oder nach Code-Änderungen):
   ```bash
   docker compose build
   docker compose up -d
Zugriff: Die Anwendung ist nun unter der konfigurierten Domain erreichbar: ➡️ https://sn-taskmanager.de

Deployment nach Update
Szenario	Befehl
Frontend + Backend	docker compose build && docker compose up -d
Nur Backend	docker compose up -d --no-deps --build backend
🛠 Entwicklungsmodus (Lokal)
Für die lokale Entwicklung mit Hot-Reload/Live-Update:

1. Backend starten
cd backend
mvn spring-boot:run
➡️ Backend läuft unter: http://localhost:8080

2. Frontend starten
cd frontend
npm install
npm run dev
➡️ Frontend läuft unter: http://localhost:5173

💡 CORS-Hinweis: CORS ist global im Spring Boot Backend (WebConfig) konfiguriert, um die Entwicklung mit lokalen Ports zu ermöglichen:
✨ Aktuelle Features
✅ CRUD-Operationen: Aufgaben erstellen, bearbeiten und löschen

✅ Moderne, ansprechende Benutzeroberfläche

✅ Sichere HTTPS-Bereitstellung via Nginx

✅ Vollständige Containerisierung (Docker/Docker Compose)

📌 Aktuelle Persistenz: Die Daten werden momentan In-Memory gespeichert, eine PostgreSQL-Datenbank folgt in Kürze.


## 📌 Roadmap (Nächste Schritte)

- Authentifizierung: Implementierung von JWT und Spring Security  
- Datenbank: Integration von PostgreSQL für persistente Speicherung  
- CI/CD: Aufbau einer automatisierten Deployment Pipeline  


