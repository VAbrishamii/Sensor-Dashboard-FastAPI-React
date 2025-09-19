import React, { useEffect, useState } from "react";
import type { SensorData } from "../interfaces/Sensor";
import { getSensors } from "../api/sensors";
import SensorCard from "./SensorCard";


const SensorTable: React.FC = () => {
  const [sensors, setSensors] = useState<SensorData[]>([]);

  const fetchSensors = async () => {
    const data = await getSensors();
    setSensors(data);
  };

  useEffect(() => {
    fetchSensors();
    const interval = setInterval(fetchSensors, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {sensors.map((sensor) => (
          <SensorCard key={sensor.id} sensor={sensor} />
        ))}
      </div>
    </div>
  );
};

export default SensorTable;

