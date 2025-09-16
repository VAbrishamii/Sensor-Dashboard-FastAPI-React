# Sensor Dashboard - FastAPI + React + TypeScript

A simple fullstack demo: FastAPI backend simulating industrial sensor data (temperature, pressure, humidity) and a React + TypeScript frontend (Vite) visualizing the data with Chart.js.

## Tech
- Backend: FastAPI, uvicorn, Pydantic (Python)
- Frontend: React, TypeScript, Vite, Chart.js (react-chartjs-2)

## Run locally

### Backend
cd backend
python -m venv .venv
# mac/linux
source .venv/bin/activate
# windows (powershell)
.venv\Scripts\Activate.ps1

pip install -r requirements.txt
uvicorn main:app --reload --port 8000

### Frontend
cd frontend
npm install
npm run dev

Open frontend (Vite default, e.g. http://127.0.0.1:5173) and API at http://127.0.0.1:8000

