import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/card";
import VoucherUpload from "../../components/forms/VoucherUpload";
import ExpenseRow from "../../components/forms/ExpenseRow";
import API from "../../services/formsApi";

export default function DailyExpenseForm() {
  const [rows, setRows] = useState([{ title: "", amount: 0 }]);
  const [voucher, setVoucher] = useState(null);

  const addRow = () => setRows([...rows, { title: "", amount: 0 }]);
  const updateRow = (index, field, value) => {
    const updated = [...rows];
    updated[index][field] = value;
    setRows(updated);
  };

  const total = rows.reduce((sum, r) => sum + Number(r.amount), 0);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("voucher", voucher);
    formData.append("expenses", JSON.stringify(rows));
    await API.post("/forms/expense", formData);
    alert("Submitted!");
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <Card>
        <CardHeader><CardTitle>Daily Expense Form</CardTitle></CardHeader>
        <CardContent>
          {rows.map((row, i) => (
            <ExpenseRow key={i} index={i} row={row} updateRow={updateRow} />
          ))}
          <Button onClick={addRow}>Add Row</Button>
          <VoucherUpload setVoucher={setVoucher} />
          <div className="mt-2 font-semibold">Total: {total}</div>
          <Button onClick={handleSubmit}>Submit</Button>
        </CardContent>
      </Card>
    </div>
  );
}
