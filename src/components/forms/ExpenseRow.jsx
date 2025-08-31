export default function ExpenseRow({ index, row, updateRow }) {
  return (
    <div className="flex gap-2 mb-2">
      <input
        type="text"
        placeholder="Title"
        value={row.title}
        onChange={(e) => updateRow(index, "title", e.target.value)}
        className="border p-2 rounded w-1/2"
      />
      <input
        type="number"
        placeholder="Amount"
        value={row.amount}
        onChange={(e) => updateRow(index, "amount", e.target.value)}
        className="border p-2 rounded w-1/2"
      />
    </div>
  );
}
