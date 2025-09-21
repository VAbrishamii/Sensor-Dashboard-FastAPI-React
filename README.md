# Sensor-Dashboard-FastAPI-React
Simple fullstack sensor-dashboard with FastAPI + React + TypeScript (Vite)

📌 Overview

The Sensor Dashboard is a full-stack project that displays real-time sensor data through an interactive web interface. It consists of:

A backend API built with FastAPI (Python) that generates and serves mock sensor data (temperature, humidity, pressure).

A frontend client built with React + TypeScript + Vite + TailwindCSS that fetches data from the API and visualizes it (cards, tables, charts).

This project is designed to demonstrate:

API design with FastAPI

Data modeling with Pydantic

Frontend-backend integration

Deployment of frontend (Vercel) and backend (Render or another Python hosting)

🚀 Features

Backend (FastAPI)

/sensors → returns a list of available sensors and their latest reading.

/sensors/{id} → returns details for a specific sensor.

/ → root route with API info and docs link.

Auto-generated Swagger UI at /docs.

CORS enabled for frontend integration.

Frontend (React + Vite)

Fetches data from the FastAPI backend.

Displays sensor cards (name, location, current values).

Interactive charts/tables for readings.

Responsive UI styled with TailwindCSS.