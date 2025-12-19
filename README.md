# 🚀 TaskManager Fullstack – Production Ready

Dieses Projekt ist eine moderne, hochsichere Full-Stack-Anwendung zur Aufgabenverwaltung. Es demonstriert die Implementierung einer sicheren **JWT-Authentifizierung**, einer **PostgreSQL-Persistenz** und eines modernen **Docker-Deployments** mit Java 25.

## 🛠 Tech-Stack & Architektur
- **Backend:** Spring Boot (Java 25 – Latest LTS/EA)
- **Frontend:** React mit Vite (SPA)
- **Datenbank:** PostgreSQL (Produktion) & H2 (Lokale Entwicklung)
- **Sicherheit:** Spring Security & JWT (JSON Web Token)
- **Proxy/Webserver:** Nginx mit SSL/HTTPS-Konfiguration
- **Orchestrierung:** Docker & Docker Compose

## 🔐 Security & Auth Features
- **JWT Authentication:** Vollständiges Login- und Registrierungssystem mit tokenbasierter Sicherheit.
- **Passwort-Sicherheit:** Verschlüsselung via BCrypt.
- **Secrets Management:** Sensible Daten (Secrets, DB-Passwörter) werden sicher über `.env` und Umgebungsvariablen verwaltet – niemals im Quellcode.
- **CORS Policy:** Sicher konfiguriert für die Kommunikation zwischen Frontend, Backend und Nginx-Proxy.

## 🐳 Deployment & Infrastruktur
Das Projekt nutzt einen **Multi-Stage Docker-Build**, um das Frontend direkt in das Nginx-Image zu integrieren und das Backend hochoptimiert auszuliefern.

### Server-Start (Produktion)
```bash
docker compose down && docker compose up --build -d
📊 Validierung & Qualität
Backend-Validierung: Strikte Regeln für Task-Namen und Benutzernamen (3 bis 100 Zeichen).

Clean Code: Komplette Umstellung auf englische Kommentare und professionelle Namenskonventionen.

Persistenz: Vollständige PostgreSQL-Integration für dauerhafte Datenspeicherung auf dem Server.

🌐 Live-Demo
Domain: http://sn-taskmanager.de