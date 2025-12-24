# 📘 SN-Taskmanager Professional Fullstack Enterprise Project

This is a modern, production-ready Task Management system, built with a high-performance **Java 25** backend and a reactive **React** frontend. The entire stack is fully containerized and secured for professional deployment.

🔗 **Live Demo:** https://sn-taskmanager.de

---

## ✨ Key Features

* 🔐 **Advanced Authentication**: Secure Register/Login system using JWT and Spring Security for stateless, scalable session management.
* ⚛️ **Hybrid Frontend Architecture**:
    * **Managed Forms**: Powered by `react-hook-form` and `react-hot-toast` for high-performance validation and real-time feedback.
    * **Pure React CRUD**: Core task management using native React Hooks for maximum stability and performance.
* 🛡️ **Enterprise Data Mapping**: Strict data isolation ensuring user tasks are securely partitioned at the database level.
* 🚢 **Production-Ready DevOps**: Fully containerized with Docker. Includes an Nginx Reverse Proxy configured for SSL/TLS and secure header forwarding.

---

## 🛠 Tech Stack

| Component | Technology |
| :--- | :--- |
| **Backend** | Java 25, Spring Boot 3.4+, Spring Security, JWT |
| **Database** | PostgreSQL |
| **Frontend** | React.js (Vite), Axios, React Hook Form |
| **Infrastructure** | Nginx, Docker & Docker Compose, Certbot (SSL) |

---

## 📂 Project Structure

```text
.
├── backend/                # Spring Boot API (Java 25, Security, JWT)
├── frontend/               # React SPA (Hybrid State Management)
├── nginx/                  # Reverse Proxy & SSL Configuration
└── docker-compose.yml      # Multi-container orchestration
🚀 Deployment & Installation
Production (Docker Compose)
The stack is orchestrated to ensure the database is healthy before the backend starts.

Bash

# Clone the repository
git clone https://github.com/snosrati200/taskmanager-fullstack.git

# Navigate into the project
cd taskmanager-fullstack

# Start all services
docker-compose up -d --build
```
## 📝 Architecture Notes

* **Complexity Control:** Specialized libraries handle complex validation states in authentication.
* **Performance:** Pure hooks minimize overhead, ensuring the core dashboard remains lightweight and maintainable.
* **Security:** Nginx ensures critical headers like `Authorization` are passed securely to the backend.
