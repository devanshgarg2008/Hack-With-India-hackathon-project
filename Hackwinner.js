document.getElementById("taxForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const income = parseFloat(document.getElementById("income").value);
  const expenses = parseFloat(document.getElementById("expenses").value);
  const presumptiveIncome = income * 0.5;

  let tax = 0;

  if (presumptiveIncome <= 250000) {
    tax = 0;
  } else if (presumptiveIncome <= 500000) {
    tax = (presumptiveIncome - 250000) * 0.05;
  } else if (presumptiveIncome <= 1000000) {
    tax = 12500 + (presumptiveIncome - 500000) * 0.2;
  } else {
    tax = 112500 + (presumptiveIncome - 1000000) * 0.3;
  }

  document.getElementById("result").innerHTML = `
    <p><strong>Estimated Tax:</strong> ₹${tax.toFixed(2)}</p>
    <p><strong>Presumptive Income (50% of gross):</strong> ₹${presumptiveIncome.toFixed(2)}</p>
  `;
});
