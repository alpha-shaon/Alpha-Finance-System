export const detectAnomalies = (expenses) => {
  const amounts = expenses.map(e => e.amount);
  const avg = amounts.reduce((a, b) => a + b, 0) / amounts.length;
  const stdDev = Math.sqrt(amounts.map(x => Math.pow(x - avg, 2)).reduce((a, b) => a + b) / amounts.length);
  return expenses.filter(e => Math.abs(e.amount - avg) > stdDev * 2);
};
