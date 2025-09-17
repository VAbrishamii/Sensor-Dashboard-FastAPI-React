from fastapi import FastAPI, HTTPException
from fastapi.responses import JSONResponse
from models import SensorData, SensorReading
from datetime import datetime, timezone

app = FastAPI(title="Sensor Data API", version="1.0.0")
# Example data
reading_example = SensorReading(
    timestamp=datetime.now(timezone.utc),
    temperature=22.5,
    humidity=45.0,
    pressure=1.25
)
data_example = SensorData(
    id="1",
    name="TempSensor A",
    location="Warehouse A",
    readings=[reading_example]
)
data_list_example = [data_example]

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
    return data_list_example

# Get sensor by ID
@app.get("/sensors/{id}", response_model=SensorData, summary="Get sensor by ID", tags=["Sensors"])
async def get_sensor(id: int):
    for sensor in data_list_example:
        if sensor.id == id:
            return sensor
    raise HTTPException(status_code=404, detail="Sensor not found")