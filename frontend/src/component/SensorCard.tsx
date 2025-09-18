import React from "react";
import type { SensorData } from "../interfaces/Sensor";

interface SensorCardProps {
  sensor: SensorData;
}

const SensorCard: React.FC<SensorCardProps> = ({ sensor }) => {
  const reading = sensor.readings[0];

  return (
    <div className="sensor-card border p-4 rounded shadow-md">
      <h3>{sensor.name}</h3>
      <p>Location: {sensor.location}</p>
      <p>Temperature: {reading.temperature} °C</p>
      <p>Humidity: {reading.humidity} %</p>
      <p>Pressure: {reading.pressure} bar</p>
      <p>Timestamp: {new Date(reading.timestamp).toLocaleTimeString()}</p>
    </div>
  );
};

export default SensorCard;
