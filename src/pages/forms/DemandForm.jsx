import { useState } from "react";
import { Button } from "../../components/ui/button";
import API from "../../services/formsApi";

export default function DemandForm() {
  const [type, setType] = useState("cash");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async () => {
    await API.post("/forms/demand", { type, description, amount });
    alert("Demand submitted!");
  };

  return (
    <div>
      <h2>Demand Form</h2>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="cash">Cash</option>
        <option value="materials">Materials</option>
      </select>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
}
