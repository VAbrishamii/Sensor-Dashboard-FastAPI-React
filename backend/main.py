from fastapi import FastAPI, HTTPException
from fastapi.responses import JSONResponse
from models import SensorData, SensorReading
from datetime import datetime, timezone
from fastapi.middleware.cors import CORSMiddleware
import random

app = FastAPI(title="Sensor Data API", version="1.0.0")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:5174"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



# Mock data
NUM_SENSORS = 3
# Sensor information
SENSOR_INFO = [
    {"id": 1, "name": "TempSensor A", "location": "Warehouse A"},
    {"id": 2, "name": "HumiditySensor B", "location": "Warehouse B"},
    {"id": 3, "name": "PressureSensor C", "location": "Warehouse C"},
]
def generate_reading():
    return SensorReading(
        timestamp=datetime.now(timezone.utc),
        temperature=round(random.uniform(15.0, 30.0), 2),
        humidity=round(random.uniform(30.0, 70.0), 2),
        pressure=round(random.uniform(1.0, 1.5), 2)
    )



# Root route with link
@app.get("/", summary="Root with links")
async def root():
    return JSONResponse({
        "message": "Welcome to Sensor Data API",
        "routes": {
            "All sensors": "/sensors",
            "API docs": "/docs"
        }
    }) 

# Get all sensors
@app.get("/sensors", response_model=list[SensorData], summary="Get all sensors", tags=["Sensors"])
async def get_sensors():
    sensors = []
    for info in SENSOR_INFO:
       
        sensor = SensorData(
            id=info["id"],
            name=info["name"],
            location=info["location"],
            description=f"Sensor located at {info['location']}",
            readings=[generate_reading()] 
        )
        sensors.append(sensor)
    return sensors

# Get sensor by ID
@app.get("/sensors/{id}", response_model=SensorData, summary="Get sensor by ID", tags=["Sensors"])
async def get_sensor(id: int):
    for info in SENSOR_INFO:
        if info["id"] == id:
            sensor = SensorData(
                id=info["id"],
                name=info["name"],
                location=info["location"],
                description=f"Sensor located at {info['location']}",
                readings=[generate_reading()] 
            )
            return sensor
    raise HTTPException(status_code=404, detail="Sensor not found")
    