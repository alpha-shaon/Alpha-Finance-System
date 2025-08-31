import { useEffect, useState } from "react";
import API from "../../services/formsApi";
import { Button } from "../../components/ui/button";

export default function UserAccountSheet() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    API.get("/forms/user-expenses").then((res) => setExpenses(res.data));
  }, []);

  const acceptExpense = async (id) => {
    await API.post("/forms/accept", { id });
    alert("Accepted!");
  };

  return (
    <div>
      <h2>User Account Sheet</h2>
      <table className="w-full border">
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((e) => (
            <tr key={e._id}>
              <td>{e.title}</td>
              <td>{e.amount}</td>
              <td>{e.status}</td>
              <td>
                {e.status === "pending" && (
                  <Button onClick={() => acceptExpense(e._id)}>Accept</Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
