# models.py 
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime


# represent a sensor reading
class SensorReading(BaseModel):
    timestamp: datetime
    temperature: float
    humidity: float
    pressure: float
    
# represent a sensor with its metadata and readings
class SensorData(BaseModel):
    id: int
    name: str
    location: str
    description: Optional[str] = None
    readings: List[SensorReading] = []