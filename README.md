# Sensor Dashboard

A **full-stack sensor monitoring dashboard** built with **FastAPI** for the backend and **React + Vite + TypeScript + TailwindCSS** for the frontend. This project demonstrates real-time integration between Python APIs and a modern frontend with responsive design.

---

## Table of Contents

- [Project Overview](#project-overview)  
- [Technologies Used](#technologies-used)  
- [Backend](#backend)  
- [Frontend](#frontend)  
- [Features](#features)  
- [Installation](#installation)  
- [Usage](#usage)  
- [License](#license)  

---

## Project Overview

The Sensor Dashboard provides a **responsive UI** to visualize sensor data, including temperature, humidity, and pressure readings. Data is fetched from a FastAPI backend that serves mock sensor readings, updating every 5 seconds. Users can switch between a **table view** of sensor cards and **chart visualizations**.

---

## Technologies Used

### Backend
- **Python 3.x**  
- **FastAPI** – Web framework for API endpoints  
- **Pydantic** – Data validation and serialization  
- **Uvicorn** – ASGI server for running FastAPI  
- **CORS Middleware** – To allow frontend requests from `http://localhost:5173` and Vercel  

### Frontend
- **React** – UI library  
- **Vite** – Frontend build tool and dev server  
- **TypeScript** – Type safety in frontend  
- **TailwindCSS 4** – Utility-first CSS framework  
- **Chart library** (e.g., Chart.js or Recharts) – For sensor visualization  

---

## Backend

### API Endpoints

| Endpoint           | Method | Description |
|------------------|--------|-------------|
| `/`               | GET    | Root route with message and links to API docs |
| `/sensors`        | GET    | Returns a list of sensors with latest mock readings |
| `/sensors/{id}`   | GET    | Returns a single sensor by ID |

- Uses **Pydantic models**:  
  - `SensorData`: Sensor metadata and readings  
  - `SensorReading`: Individual readings (temperature, humidity, pressure)  

- Mock data is generated with Python’s `random` module.  

- **CORS middleware** allows frontend requests from development and production origins.

---

## Frontend

### Components
- **SensorDashboard** – Main page with sidebar navigation and tab switcher  
- **SensorTable** – Responsive grid layout for sensor cards  
- **SensorCard** – Displays sensor name, location, and latest readings  
- **SensorChart** – Chart visualization of sensor data  

### Layout
- **Sidebar** on the left with tabs: *Table View* and *Chart View*  
- **Content area** on the right showing the grid of sensor cards or chart  
- Responsive design (3 cards per row on large screens)  
- Real-time updates every 5 seconds  

---

## Features
- Real-time sensor data updates  
- Responsive dashboard layout  
- Sidebar navigation with active tab highlighting  
- Table view of sensor cards with latest readings  
- Chart visualization for sensor metrics  
- Full-stack integration: React frontend + FastAPI backend  

---

## Installation

### Backend
```bash
# Navigate to backend folder
cd backend

# Install dependencies
pip install -r requirements.txt

# Run server
uvicorn main:app --reload

### Fronend
# Navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Run development server
npm run dev
