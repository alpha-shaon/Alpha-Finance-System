import { useEffect, useState } from "react";
import API from "../../services/formsApi";

export default function RoleManager() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    API.get("/admin/users").then((res) => setUsers(res.data));
  }, []);

  const updateRole = async (id, role) => {
    await API.post("/admin/set-role", { id, role });
    alert("Role updated");
  };

  return (
    <div>
      <h2>Role Assignment</h2>
      {users.map((u) => (
        <div key={u._id}>
          {u.email} - {u.role}
          <select onChange={(e) => updateRole(u._id, e.target.value)} defaultValue={u.role}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
      ))}
    </div>
  );
}
