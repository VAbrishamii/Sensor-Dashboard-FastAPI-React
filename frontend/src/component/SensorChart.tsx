import React from "react";
import type { SensorData } from "../interfaces/Sensor";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface SensorChartProps {
  data: SensorData[];
}

const SensorChart: React.FC<SensorChartProps> = ({ data }) => {
  console.log("SensorChart raw data:", data);

  const chartData =
    data.flatMap(
      (sensor) =>
        sensor.readings?.map((r) => ({
          sensor: sensor.name,
          timestamp: new Date(r.timestamp).toLocaleTimeString(),
          temperature: r.temperature ?? 0,
          humidity: r.humidity ?? 0,
          pressure: r.pressure ?? 0,
        })) || []
    ) || [];

  console.log("SensorChart chartData:", chartData);

  return (
    <div className="w-full min-h-[400px] bg-white p-4 rounded shadow-lg">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="temperature"
            stroke="#FF5722"
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="humidity"
            stroke="#3F51B5"
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="pressure"
            stroke="#4CAF50"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SensorChart;
