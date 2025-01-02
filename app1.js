const billAmountInput = document.getElementById("billAmount");
const tipPercentageInput = document.getElementById("tipPercentage");
const customTipInput = document.getElementById("customTip");
const peopleCountInput = document.getElementById("peopleCount");
const calculateButton = document.getElementById("calculateButton");
const resetButton = document.getElementById("resetButton");

const totalTipElement = document.getElementById("totalTip");
const tipPerPersonElement = document.getElementById("tipPerPerson");
const totalPerPersonElement = document.getElementById("totalPerPerson");

// Format numbers as currency
function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`;
}

function calculateTip() {
  const billAmount = parseFloat(billAmountInput.value);
  const peopleCount = parseInt(peopleCountInput.value);

  if (isNaN(billAmount) || isNaN(peopleCount) || peopleCount <= 0 || billAmount <= 0) {
    alert("Please enter valid numbers for all fields!");
    return;
  }

  // Get the selected or custom tip percentage
  let tipPercentage = parseInt(tipPercentageInput.value);

  // If custom tip is provided, use it instead of the selected option
  if (customTipInput.value) {
    tipPercentage = parseFloat(customTipInput.value);
  }

  if (isNaN(tipPercentage) || tipPercentage < 0) {
    alert("Please enter a valid tip percentage!");
    return;
  }

  // Calculate tip
  const totalTip = (billAmount * tipPercentage) / 100;
  const tipPerPerson = totalTip / peopleCount;
  const totalPerPerson = (billAmount + totalTip) / peopleCount;

  totalTipElement.textContent = formatCurrency(totalTip);
  tipPerPersonElement.textContent = formatCurrency(tipPerPerson);
  totalPerPersonElement.textContent = formatCurrency(totalPerPerson);
}

// Reset input fields and results
function resetFields() {
  billAmountInput.value = "";
  tipPercentageInput.value = "10";
  customTipInput.value = "";
  peopleCountInput.value = "";
  totalTipElement.textContent = "$0.00";
  tipPerPersonElement.textContent = "$0.00";
  totalPerPersonElement.textContent = "$0.00";
}

// Event listeners for buttons
calculateButton.addEventListener("click", calculateTip);
resetButton.addEventListener("click", resetFields);
