TaskManager – Fullstack Projekt (Spring Boot + React)

Ein vollständiges Full-Stack Projekt mit Spring Boot 3 (Backend) und React + Vite (Frontend).
Dieses Projekt zeigt moderne Softwareentwicklung mit sauberer Architektur, DTOs, Service Layer,
globalem Exception Handling und einem modernen React-Frontend.

🚀 Technologien
Backend

Java 17+

Spring Boot 3.x

Spring Web

Spring Data JPA

H2 Database

DTOs (Request/Response)

GlobalExceptionHandler

Frontend

React (Vite)

Axios

Modern Hooks (useState, useEffect)

✨ Features
Backend-Features

✔ REST API:

GET /tasks

GET /tasks/{id}

POST /tasks

PUT /tasks/{id}

DELETE /tasks/{id}

✔ Saubere Architektur
✔ DTOs für Request & Response
✔ Validerung (3–100 Zeichen, nicht leer)
✔ Eigene Exception: TaskNotFoundException
✔ GlobalExceptionHandler

Frontend-Features

✔ Aufgaben anzeigen
✔ Neue Aufgaben erstellen
✔ Aufgaben löschen
✔ Aufgabe als erledigt markieren
✔ Live-Update ohne Reload
✔ Moderne Komponentenstruktur
✔ Styled UI

🗂 Projektstruktur

Backend (taskmanager-backend/)

src/main/java/com/example/taskmanager/
   ├── TaskController.java
   ├── TaskService.java
   ├── TaskRepository.java
   ├── Task.java
   ├── dto/
   │    ├── TaskRequestDTO.java
   │    └── TaskResponseDTO.java
   ├── exception/
   │    ├── TaskNotFoundException.java
   │    └── GlobalExceptionHandler.java

   Frontend (taskmanager-frontend/)

src/
  ├── api/taskApi.js
  ├── components/
  │     ├── TaskForm.jsx
  │     ├── TaskItem.jsx
  │     └── TaskList.jsx
  ├── pages/
  │     └── Home.jsx
  ├── App.jsx
  ├── main.jsx

▶️ Projekt starten
Backend starten
cd backend
mvn spring-boot:run


📍 Läuft auf: http://localhost:8080

Frontend starten
cd frontend
npm install
npm run dev


📍 Läuft auf: http://localhost:5173

🧪 Beispiel-Requests
➕ Task anlegen
POST /tasks
{
  "title": "Learn Spring Boot",
  "completed": false
}

✏️ Task aktualisieren
PUT /tasks/1
{
  "title": "Learn Spring Boot deeply",
  "completed": true
}

📘 Lernreise / Projektverlauf

Tag 1: Moderne Java Basics
Tag 2: Backend-Architektur (DTOs, Service, Exceptions)
Tag 3: Frontend + Backend Fullstack Integration
Tag 4: Deployment (folgt)
Tag 5: Login, JWT, Auth (optional)

🎯 Ziel

Dieses Projekt demonstriert sauberes Full-Stack Engineering