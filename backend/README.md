# TaskManager – Modern Java Spring Boot Projekt

Ein modernes, sauberes und professionell strukturiertes **Spring Boot 3** Projekt.
Dieses Projekt ist im Rahmen eine Lernreise entstanden – von einer einfachen Version bis zu einer professionellen Architektur mit **DTOs, Service Layer, Validierung und globalem Exception Handling**.

---

## 🚀 Features

### ✔️ REST API

* GET /tasks
* GET /tasks/{id}
* POST /tasks
* PUT /tasks/{id}
* DELETE /tasks/{id}

### ✔️ Moderne Architektur

* **Controller Layer** (HTTP)
* **Service Layer** (Business-Logik)
* **Repository Layer** (Persistenz)
* **DTOs** (saubere Datenübergabe)
* **Custom Exceptions**
* **GlobalExceptionHandler**

### ✔️ Saubere Validierung

* Titel darf nicht leer sein
* Mindestens 3 Zeichen
* Maximal 100 Zeichen

---

## 🗂️ Projektstruktur

```
src/main/java/com/example/taskmanager/
   |- Task.java
   |- TaskRepository.java
   |- TaskController.java
   |- service/
   |    └── TaskService.java
   |- dto/
   |    ├── TaskRequestDTO.java
   |    └── TaskResponseDTO.java
   |- exception/
        ├── TaskNotFoundException.java
        └── GlobalExceptionHandler.java
```

---

## 📦 Anforderungen

* Java **17+**
* Spring Boot **3.x**
* Maven
* Optional: Postman oder cURL für API-Tests

---

## ▶️ Starten

Im Projektordner:

```
mvn spring-boot:run
```

Danach läuft die API unter:

```
http://localhost:8080/tasks
```

---

## 🧪 Beispiel-Requests

### ➕ Task anlegen (POST)

```json
POST /tasks
{
  "title": "Learn Spring Boot",
  "completed": false
}
```

### ✏️ Task aktualisieren (PUT)

```json
PUT /tasks/1
{
  "title": "Learn Spring Boot deeply",
  "completed": true
}
```

---

## 📝 Entwicklungsfortschritt

**Day 1:** Moderne Java Grundlagen (Records, Streams, Optional, Switch, Functional Interfaces)
**Day 2:** Aufbau einer echten Java Webanwendung mit professionellem Spring Boot Backend
**Day 3 (coming soon):** Frontend oder Deployment – je nach Ziel

---

## 🌟 Ziel

Ziel ist es, nicht nur Spring Boot zu erlernen, sondern auch **ein professionelles Backend** zu entwickeln, das in Unternehmen eingetzt werden kann.
