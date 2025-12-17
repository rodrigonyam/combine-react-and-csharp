# Deployment Guide

## Prerequisites

- .NET 8 SDK
- Node.js 16+
- SQL Server (LocalDB, Express, or full version)
- IIS (for production deployment)

## Local Development

### Backend Setup
1. Navigate to the backend directory
2. Install dependencies: `dotnet restore`
3. Update connection string in `appsettings.json`
4. Run migrations: `dotnet ef database update`
5. Start the server: `dotnet run`

### Frontend Setup
1. Navigate to the frontend directory
2. Install dependencies: `npm install`
3. Update API URL in `.env` file
4. Start development server: `npm start`

## Production Deployment

### Backend (ASP.NET Core API)

#### 1. Build for Production
```bash
dotnet publish -c Release -o ./publish
```

#### 2. Deploy to IIS
- Copy published files to IIS wwwroot
- Configure application pool for .NET Core
- Update connection strings for production database
- Install ASP.NET Core Hosting Bundle on server

#### 3. Database Migration
```bash
dotnet ef database update --connection "production_connection_string"
```

### Frontend (React App)

#### 1. Build for Production
```bash
npm run build
```

#### 2. Deploy Static Files
- Copy `build` folder contents to web server
- Configure web server for SPA routing
- Update API URLs for production environment

#### 3. Environment Variables
Create production `.env` file:
```
REACT_APP_API_URL=https://yourapi.com/api
REACT_APP_SIGNALR_URL=https://yourapi.com/notificationHub
```

## Azure Deployment

### Backend to Azure App Service
1. Create App Service instance
2. Configure SQL Database connection string
3. Deploy using Visual Studio or Azure CLI
4. Enable HTTPS and CORS settings

### Frontend to Azure Static Web Apps
1. Create Static Web App resource
2. Connect to GitHub repository
3. Configure build settings for React
4. Update API endpoints in environment variables

## Docker Deployment

### Backend Dockerfile
```dockerfile
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
COPY . .
RUN dotnet restore
RUN dotnet publish -c Release -o out

FROM base AS final
COPY --from=build /out .
ENTRYPOINT ["dotnet", "ProjectManagement.dll"]
```

### Frontend Dockerfile
```dockerfile
FROM node:16-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
```

## Environment Configuration

### Development
- Use LocalDB for database
- Enable detailed error messages
- Use HTTP for local development

### Production
- Use dedicated SQL Server instance
- Enable HTTPS only
- Configure logging and monitoring
- Set up automated backups
- Configure load balancing if needed

## Monitoring & Logging

- Application Insights for Azure deployments
- Serilog for structured logging
- Health check endpoints
- Performance monitoring
- Error tracking and alerting