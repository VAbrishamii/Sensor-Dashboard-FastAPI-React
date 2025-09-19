import React from "react";
import type { SensorData } from "../interfaces/Sensor";

interface SensorCardProps {
  sensor: SensorData;
}

const SensorCard: React.FC<SensorCardProps> = ({ sensor }) => {
  return (
    <div
      className="sensor-card bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-700 
      rounded-2xl p-6 shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
      <h1 className="text-xl font-bold mb-2">{sensor.name}</h1>
      <ul className="space-y-1 text-gray-100">
        <li>
          <strong>Location:</strong> {sensor.location}
        </li>
        {sensor.readings?.length > 0 && (
          <>
            <li>🌡️ Temp: {sensor.readings[0].temperature}°C</li>
            <li>💧 Humidity: {sensor.readings[0].humidity}%</li>
            <li>⚡ Pressure: {sensor.readings[0].pressure} hPa</li>
          </>
        )}
      </ul>
    </div>
  );
};

export default SensorCard;
