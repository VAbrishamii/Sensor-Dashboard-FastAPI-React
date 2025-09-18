import React from "react";
import SensorTable from "../component/SensorTable";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard p-6">
      <h1 className="text-2xl font-bold mb-4">Live Sensor Dashboard</h1>
      <SensorTable />
    </div>
  );
};

export default Dashboard;

