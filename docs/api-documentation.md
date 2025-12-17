# Project Management Tool - API Documentation

## Authentication Endpoints

### POST /api/auth/login
Login with email and password.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "token": "jwt_token_here",
  "user": {
    "id": 1,
    "firstName": "John",
    "lastName": "Doe",
    "email": "user@example.com",
    "role": "TeamMember"
  }
}
```

### POST /api/auth/register
Register a new user account.

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "user@example.com",
  "password": "password123",
  "phone": "+1234567890",
  "department": "Engineering"
}
```

## Project Endpoints

### GET /api/projects
Get all projects (requires authentication).

### POST /api/projects
Create a new project (requires authentication).

**Request Body:**
```json
{
  "name": "Website Redesign",
  "description": "Complete redesign of company website",
  "deadline": "2024-01-31T00:00:00Z"
}
```

### PUT /api/projects/{id}
Update an existing project.

### DELETE /api/projects/{id}
Delete a project.

## Task Endpoints

### GET /api/tasks
Get all tasks.

### POST /api/tasks
Create a new task.

**Request Body:**
```json
{
  "title": "Design homepage mockup",
  "description": "Create wireframes and visual mockups",
  "priority": "High",
  "dueDate": "2024-01-15T00:00:00Z",
  "projectId": 1,
  "assigneeId": 2
}
```

### PUT /api/tasks/{id}
Update an existing task.

### DELETE /api/tasks/{id}
Delete a task.

## User Endpoints

### GET /api/users/profile
Get current user profile.

### PUT /api/users/profile
Update user profile.

## Authentication

All endpoints except `/api/auth/login` and `/api/auth/register` require authentication.
Include the JWT token in the Authorization header:

```
Authorization: Bearer <jwt_token>
```

## Status Codes

- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 404: Not Found
- 500: Internal Server Error