import jsPDF from "jspdf";
import "jspdf-autotable";

export default function ExportPDF({ data }) {
  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("Alpha Ultimate SLA Report", 14, 20);
    doc.autoTable({
      head: [["Date", "SLA %", "Volume"]],
      body: data.map((d) => [d.date, d.sla, d.volume]),
    });
    doc.save("sla-report.pdf");
  };

  return <button onClick={exportPDF}>Export PDF</button>;
}
