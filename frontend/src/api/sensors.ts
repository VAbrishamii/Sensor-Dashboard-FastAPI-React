import axios from "axios";
import type { SensorData } from "../interfaces/Sensor";

export const API_BASE = "http://127.0.0.1:8000";

export const getSensors = async (): Promise<SensorData[]> => {
  const res = await axios.get<SensorData[]>(`${API_BASE}/sensors`);
  return res.data;
};

export const getSensorById = async (id: number): Promise<SensorData> => {
  const res = await axios.get<SensorData>(`${API_BASE}/sensors/${id}`);
  return res.data;
};
