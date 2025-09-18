export interface SensorReading {
  timestamp: string;
  temperature: number;
  humidity: number;
  pressure: number;
}

export interface SensorData {
  value: any;
  id: number;
  name: string;
  location: string;
  readings: SensorReading[];
}
