// import React, { useState, useEffect } from "react";
// import { getSensors } from "../api/sensors";
// import type { SensorData } from "../interfaces/Sensor";
// import SensorCard from "../component/SensorCard";
// import SensorChart from "../component/SensorChart";

// const SensorDashboard: React.FC = () => {
//   const [sensors, setSensors] = useState<SensorData[]>([]);
//   const [activeTab, setActiveTab] = useState<"table" | "chart">("table");
//   const [loading, setLoading] = useState(true);

//   const fetchSensors = async () => {
//     try {
//       const data = await getSensors();
//       setSensors(data ?? []);
//       setLoading(false);
//     } catch (err) {
//       console.error("Error fetching sensors:", err);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchSensors();
//     const interval = setInterval(fetchSensors, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-6">
//       {/* Sidebar Tabs */}
//       <div className="flex flex-col p-4 m-8 space-y-4 w-40">
//         <button
//           className={`px-4 py-2 font-semibold ${
//             activeTab === "table" ? "bg-blue-500 text-white" : "bg-gray-200"
//           }`}
//           onClick={() => setActiveTab("table")}
//         >
//           Table View
//         </button>
//         <button
//           className={`px-4 py-2 rounded font-semibold ${
//             activeTab === "chart" ? "bg-blue-500 text-white" : "bg-gray-200"
//           }`}
//           onClick={() => setActiveTab("chart")}
//         >
//           Chart View
//         </button>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 ml-6">
//         {loading ? (
//           <div className="text-white text-center">Loading sensors...</div>
//         ) : activeTab === "table" ? (
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {sensors.map((sensor) => (
//               <SensorCard key={sensor.id} sensor={sensor} />
//             ))}
//           </div>
//         ) : (
//           <SensorChart data={sensors} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default SensorDashboard;
import React, { useState, useEffect } from "react";
import { getSensors } from "../api/sensors";
import type { SensorData } from "../interfaces/Sensor";
import SensorCard from "../component/SensorCard";
import SensorChart from "../component/SensorChart";

const SensorDashboard: React.FC = () => {
  const [sensors, setSensors] = useState<SensorData[]>([]);
  const [activeTab, setActiveTab] = useState<"table" | "chart">("table");
  const [loading, setLoading] = useState(true);

  const fetchSensors = async () => {
    try {
      const data = await getSensors();
      setSensors(data ?? []);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching sensors:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSensors();
    const interval = setInterval(fetchSensors, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h1>Dashboard</h1>
        <a
          className={activeTab === "table" ? "active" : ""}
          onClick={() => setActiveTab("table")}>
          Table View
        </a>
        <a
          className={activeTab === "chart" ? "active" : ""}
          onClick={() => setActiveTab("chart")}>
          Chart View
        </a>
      </div>

      <div className="main-content">
        {loading ? (
          <div style={{ color: "white", textAlign: "center" }}>
            Loading sensors...
          </div>
        ) : activeTab === "table" ? (
          sensors.map((sensor) => (
            <SensorCard key={sensor.id} sensor={sensor} />
          ))
        ) : (
          <SensorChart data={sensors} />
        )}
      </div>
    </div>
  );
};

export default SensorDashboard;
