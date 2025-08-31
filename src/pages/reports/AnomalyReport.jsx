import { useEffect, useState } from "react";
import API from "../../services/formsApi";

export default function AnomalyReport() {
  const [anomalies, setAnomalies] = useState([]);

  useEffect(() => {
    API.get("/forms/anomalies").then(res => setAnomalies(res.data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Flagged Expenses</h2>
      <ul className="list-disc pl-6">
        {anomalies.map((a, i) => (
          <li key={i}>{a.title} - </li>
        ))}
      </ul>
    </div>
  );
}
