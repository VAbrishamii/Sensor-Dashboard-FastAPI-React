// import React, { useEffect, useState } from "react";
// import type { SensorData } from "../interfaces/Sensor";
// import { getSensors } from "../api/sensors";
// import SensorCard from "./SensorCard";
// import "../index.css";

// const SensorTable: React.FC = () => {
//   const [sensors, setSensors] = useState<SensorData[]>([]);

//   const fetchSensors = async () => {
//     const data = await getSensors();
//     setSensors(data);
//   };

//   useEffect(() => {
//     fetchSensors();
//     const interval = setInterval(fetchSensors, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="sensor-table grid grid-cols-1 md:grid-cols-3 gap-4">
//       {sensors.map(sensor => (
//         <SensorCard key={sensor.id} sensor={sensor} />
//       ))}
//     </div>
//   );
// };

// export default SensorTable;
import React, { useEffect, useState } from "react";
import type { SensorData } from "../interfaces/Sensor";
import { getSensors } from "../api/sensors";
import SensorCard from "./SensorCard";
import "../index.css";

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
    <div className="sensor-table min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 
        p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {sensors.map(sensor => (
        <SensorCard key={sensor.id} sensor={sensor} />
      ))}
    </div>
  );
};

export default SensorTable;

