import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

export default function ProjectComparison({ data }) {
  return (
    <BarChart width={600} height={300} data={data}>
      <XAxis dataKey="project" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="sla" fill="#82ca9d" />
      <Bar dataKey="volume" fill="#8884d8" />
    </BarChart>
  );
}
