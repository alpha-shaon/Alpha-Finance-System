import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

export default function SLAChart({ data }) {
  return (
    <LineChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis domain={[0, 100]} />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="sla" stroke="#8884d8" />
    </LineChart>
  );
}
