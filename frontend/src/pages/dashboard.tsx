// import React, { useState } from "react";
// import SensorTable from "../component/SensorTable";
// import SensorChart from "../component/SensorChart";

// const Dashboard: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<"table" | "chart">("table");

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-10 text-white">
//       {/* Tabs */}
//       <div className="flex justify-center mb-8">
//         <button
//           onClick={() => setActiveTab("table")}
//           className={`px-6 py-2 rounded-t-lg font-semibold transition-all ${
//             activeTab === "table"
//               ? "bg-white/20 border-b-2 border-pink-400"
//               : "bg-white/10 hover:bg-white/20"
//           }`}
//         >
//           Table
//         </button>
//         <button
//           onClick={() => setActiveTab("chart")}
//           className={`px-6 py-2 rounded-t-lg font-semibold transition-all ${
//             activeTab === "chart"
//               ? "bg-white/20 border-b-2 border-pink-400"
//               : "bg-white/10 hover:bg-white/20"
//           }`}
//         >
//           Chart
//         </button>
//       </div>

//       {/* Content */}
//       <div className="bg-white/10 backdrop-blur-xl p-6 rounded-xl shadow-lg">
//         {activeTab === "table" && <SensorTable />}
//         {activeTab === "chart" && <SensorChart />}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

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
    <div className="p-6 min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Tab Buttons */}
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded font-semibold ${
            activeTab === "table" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("table")}
        >
          Table View
        </button>
        <button
          className={`px-4 py-2 rounded font-semibold ${
            activeTab === "chart" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("chart")}
        >
          Chart View
        </button>
      </div>

      {/* Content */}
      {loading ? (
        <div className="text-white text-center">Loading sensors...</div>
      ) : activeTab === "table" ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sensors.map(sensor => (
            <SensorCard key={sensor.id} sensor={sensor} />
          ))}
        </div>
      ) : (
        <SensorChart data={sensors} />
      )}
    </div>
  );
};

export default SensorDashboard;