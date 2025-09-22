import axios from "axios";
import type { SensorData } from "../interfaces/Sensor";

export const API_BASE = "https://sensor-dashboard-fastapi-react.onrender.com/";

export const getSensors = async (): Promise<SensorData[]> => {
  const res = await axios.get<SensorData[]>(`${API_BASE}/sensors`);
  return res.data;
};

export const getSensorById = async (id: number): Promise<SensorData> => {
  const res = await axios.get<SensorData>(`${API_BASE}/sensors/${id}`);
  return res.data;
};
