# 📋 Project Management Tool (React + ASP.NET Core)

A full-stack project management application built with **React** for the frontend and **C# ASP.NET Core** for the backend.  
This tool helps teams organize projects, manage tasks, collaborate, and track progress efficiently.

---

## ✨ Features

- **User Authentication**
  - Secure login/signup with JWT.
  - Role-based access (Admin, Manager, Team Member).

- **Project Management**
  - Create, update, and delete projects.
  - Assign team members to projects.
  - Track project status and deadlines.

- **Task Management**
  - Create tasks with descriptions, due dates, and assignees.
  - Update task progress (To Do, In Progress, Done).
  - Comment on tasks for collaboration.

- **Team Collaboration**
  - Real-time notifications (via SignalR).
  - Messaging/chat system.
  - File uploads for project documentation.

- **Dashboard & Analytics**
  - Visualize project progress with charts.
  - Track workload distribution.
  - Generate reports.

---

## 🛠️ Tech Stack

**Frontend (React)**
- React + React Router for SPA navigation.
- Redux Toolkit / Context API for state management.
- TailwindCSS or Material UI for styling.
- Axios for API calls.

**Backend (C# ASP.NET Core)**
- ASP.NET Core Web API.
- Entity Framework Core for database access.
- SQL Server or PostgreSQL for data storage.
- SignalR for real-time communication.
- JWT for authentication.

**Integration**
- React frontend communicates with ASP.NET Core backend via RESTful APIs.
- Backend returns JSON responses consumed by React components.
- CORS enabled in backend to allow frontend requests.

---

## 📂 Project Structure
