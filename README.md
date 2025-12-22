# 📘 TaskManager – Professional Fullstack Project

This is a modern, containerized **Full-Stack Task Management Application**. It features a secure authentication system and a robust architecture, designed for professional deployment.

Live Demo: [https://sn-taskmanager.de](https://sn-taskmanager.de)

[![Tech Stack](https://img.shields.io/badge/Stack-Fullstack-informational)](#tech-stack)
[![Backend](https://img.shields.io/badge/Backend-Spring%20Boot%20(Java%2025)-brightgreen)](#tech-stack)
[![Frontend](https://img.shields.io/badge/Frontend-React-blue)](#tech-stack)
[![Database](https://img.shields.io/badge/Database-PostgreSQL-blue)](#tech-stack)
[![Deployment](https://img.shields.io/badge/Deployment-Docker%20Compose-blue)](#deployment)

---

## ✨ Key Features

* ✅ **User Authentication:** Complete Register and Login system using secure JWT (JSON Web Tokens).
* ✅ **User-Specific Task Management:** Fully implemented **Joint User-Task architecture**. Each user can only view, create, and manage their own tasks.
* ✅ **Input Validation:** Strict validation rules (e.g., usernames and task titles must be between 3 and 100 characters).
* ✅ **Responsive Design:** Unified UI layout using a global page-container for a consistent user experience.
* ✅ **Production Ready:** Fully containerized with Docker and served via Nginx Reverse Proxy with HTTPS encryption.

---

## 🛠 Tech Stack

* **Frontend:** React.js (Vite), CSS3 (Modern Flexbox/Grid)
* **Backend:** Java 25, Spring Boot, Spring Security (JWT)
* **Database:** PostgreSQL
* **DevOps:** Docker, Docker Compose, Nginx

---

## 🚀 Deployment & Installation

### Production (Server)
To deploy the application on a production server:

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd your-repo
    ```
2.  **Environment Setup:** Create a `.env` file in the root directory (refer to `.env.example`).
3.  **Start Services:**
    ```bash
    docker-compose up -d --build
    ```

### Local Development
1.  **Backend:** Run `mvn spring-boot:run` in the `/backend` folder.
2.  **Frontend:** Run `npm install` and `npm run dev` in the `/frontend` folder.

---

## 🔒 Security & Validation

* **JWT Authentication:** All protected API endpoints require a valid Bearer token.
* **Data Integrity:** Server-side validation ensures that only authorized users can modify their specific task data.
* **CORS:** Configured for secure cross-origin communication between the frontend and backend.

---

## 📂 Project Structure

```text
├── backend/          # Spring Boot API (JWT, Security, PostgreSQL)
├── frontend/         # React SPA (Context API, Unified Layout)
├── nginx/            # Reverse Proxy configuration (HTTPS)
└── docker-compose.yml# Service orchestration