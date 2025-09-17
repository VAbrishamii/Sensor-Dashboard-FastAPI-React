# backend/test_models.py
from models import SensorData, SensorReading
from datetime import datetime, timezone
# Example usage
reading = SensorReading(
    timestamp=datetime.now(timezone.utc),
    temperature=22.5,
    humidity=60.0,
    pressure=1013.0
)
# represent a sensor with its metadata and readings
sensor = SensorData(
    id=1,
    name="Living Room Sensor",
    location="Living Room",
    description="Monitors temperature, humidity, and pressure",
    readings=[reading]
)

print(sensor.model_dump_json(indent=2))
