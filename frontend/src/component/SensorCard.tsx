import React from "react";
import type { SensorData } from "../interfaces/Sensor";

interface SensorCardProps {
  sensor: SensorData;
}

const SensorCard: React.FC<SensorCardProps> = ({ sensor }) => {
  return (
    <div className=" bg-gradient-to-br from-0% to-blue-500 backdrop-blur-md rounded-lg shadow-lg p-5 flex flex-col gap-2 transition-transform transform hover:scale-105 hover:shadow-2xl">
      <h1 className="text-xl font-bold">{sensor.name}</h1>
      <ul className="space-y-1">
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
