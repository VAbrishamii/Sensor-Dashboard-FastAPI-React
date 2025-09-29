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
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col md:flex-row min-h-[400px] w-[1200px] gap-6 rounded-xl shadow-lg p-6">
        {/* Sidebar */}
        <div className="mdw-64 p-6 flex flex-col gap-6 rounded-xl">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          <a
            className={`cursor-pointer px-4 py-2 rounded-lg transition-colors ${
              activeTab === "table" ? "bg-blue-600" : "hover:bg-gray-600 "
            }`}
            onClick={() => setActiveTab("table")}>
            Table View
          </a>
          <a
            className={`cursor-pointer px-4 py-2 rounded-lg transition-colors ${
              activeTab === "chart" ? "bg-blue-600" : "hover:bg-gray-600"
            }`}
            onClick={() => setActiveTab("chart")}>
            Chart View
          </a>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col gap-6 p-6 overflow-auto">
          {loading ? (
            <div className="text-center text-gray-700 text-lg">
              Loading sensors...
            </div>
          ) : activeTab === "table" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sensors.map((sensor) => (
                <SensorCard key={sensor.id} sensor={sensor} />
              ))}
            </div>
          ) : (
            <div className="w-full max-w-full overflow-x-auto">
              <SensorChart data={sensors} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SensorDashboard;
