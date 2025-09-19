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
// const SensorChart: React.FC<SensorChartProps> = ({ data }) => {
//   const chartData =
//   data?.flatMap(sensor =>
//     Array.isArray(sensor.readings)
//       ? sensor.readings.map(r => ({
//           name: sensor.name,
//           timestamp: new Date(r.timestamp).toLocaleTimeString(),
//           temperature: r.temperature,
//           humidity: r.humidity,
//           pressure: r.pressure,
//         }))
//       : []
//   ) ?? [];

//   console.log("SensorChart data:", data);
//   console.log("ChartData:", chartData);

//   if (chartData.length === 0) {
//     return (
//       <div className="p-6 text-center text-gray-400">
//         No data available for chart.
//       </div>
//     );
//   }

//   return (
//     <div className="w-full h-[500px] bg-white p-4 rounded shadow-lg">
//       <ResponsiveContainer width="100%" height="100%">
//         <LineChart data={chartData}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="timestamp" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line
//             type="monotone"
//             dataKey="temperature"
//             stroke="#FF5722"
//             dot={false}
//           />
//           <Line
//             type="monotone"
//             dataKey="humidity"
//             stroke="#3F51B5"
//             dot={false}
//           />
//           <Line
//             type="monotone"
//             dataKey="pressure"
//             stroke="#4CAF50"
//             dot={false}
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default SensorChart;

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
      <ResponsiveContainer width="100%" aspect={2}>
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
