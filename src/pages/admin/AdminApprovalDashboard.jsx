import { useEffect, useState } from "react";
import API from "../../services/formsApi";
import { Button } from "../../components/ui/button";

export default function AdminApprovalDashboard() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    API.get("/admin/submissions").then((res) => setSubmissions(res.data));
  }, []);

  const approve = async (id) => {
    await API.post("/admin/approve", { id });
    alert("Approved!");
  };

  return (
    <div className="p-4 overflow-x-auto">
      <h2 className="text-xl font-bold mb-4">Admin Approval Dashboard</h2>
      <table className="min-w-full border text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">User</th>
            <th className="p-2">Type</th>
            <th className="p-2">Amount</th>
            <th className="p-2">Status</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((s) => (
            <tr key={s._id} className="border-t">
              <td className="p-2">{s.user.name}</td>
              <td className="p-2">{s.type}</td>
              <td className="p-2">{s.amount}</td>
              <td className="p-2">{s.status}</td>
              <td className="p-2">
                {s.status === "pending" && (
                  <Button onClick={() => approve(s._id)}>Approve</Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
