import React from "react";
import type { SensorData } from "../interfaces/Sensor";

interface SensorCardProps {
  sensor: SensorData;
}

const SensorCard: React.FC<SensorCardProps> = ({ sensor }) => {
  const reading = sensor.readings[0];

  return (
    <div className="sensor-card">
      <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg p-6 text-white text-center">
        <h1 className="text-2xl font-bold mb-3">{sensor.name}</h1>
        <p className="text-lg mb-1">Location: {sensor.location}</p>
        <p className="text-lg mb-1">Temperature: {reading.temperature} °C</p>
        <p>Humidity: {reading.humidity} %</p>
        <p>Pressure: {reading.pressure} bar</p>
        {/* <p>Timestamp: {new Date(reading.timestamp).toLocaleTimeString()}</p> */}
        <p>timestamp: {new Date(reading.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
      </div>
    </div>
  );
};

export default SensorCard;
