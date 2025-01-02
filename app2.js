const billAmountInput = document.getElementById("billAmount");
const currencySymbolInput = document.getElementById("currencySymbol");
const tipPercentagesInput = document.getElementById("tipPercentages");
const peopleCountInput = document.getElementById("peopleCount");
const calculateButton = document.getElementById("calculateButton");
const resetButton = document.getElementById("resetButton");

const totalTipElement = document.getElementById("totalTip");
const tipPerPersonElement = document.getElementById("tipPerPerson");
const totalPerPersonElement = document.getElementById("totalPerPerson");
const baseCostPerPersonElement = document.getElementById("baseCostPerPerson");

// Format the result as currency
function formatCurrency(amount, symbol) {
  return `${symbol}${amount.toFixed(2)}`;
}

// Calculate the total tip, tip per person, and total per person
function calculateTip() {
  const billAmount = parseFloat(billAmountInput.value);
  const peopleCount = parseInt(peopleCountInput.value);
  const currencySymbol = currencySymbolInput.value.trim() || "$"; // Default to '$' if empty
  const tipPercentages = tipPercentagesInput.value.split(",").map(Number).filter(Boolean); // Parse multiple percentages

  if (isNaN(billAmount) || isNaN(peopleCount) || peopleCount <= 0 || billAmount <= 0) {
    alert("Please enter valid numbers for all fields!");
    return;
  }

  let totalTip = 0;
  let totalPerPerson = 0;
  let baseCostPerPerson = billAmount / peopleCount;

  // For each tip percentage, calculate the total tip, tip per person, and total per person
  const tipResults = tipPercentages.map(tipPercentage => {
    const tipAmount = (billAmount * tipPercentage) / 100;
    const tipAmountPerPerson = tipAmount / peopleCount;
    const totalPerPersonForThisTip = (billAmount + tipAmount) / peopleCount;

    totalTip += tipAmount; // Sum up the total tip
    totalPerPerson += totalPerPersonForThisTip;

    return {
      tipPercentage,
      totalTip: tipAmount,
      tipPerPerson: tipAmountPerPerson,
      totalPerPerson: totalPerPersonForThisTip,
    };
  });

  // Display the results
  totalTipElement.textContent = formatCurrency(totalTip, currencySymbol);
  tipPerPersonElement.textContent = formatCurrency(totalTip / peopleCount, currencySymbol);
  totalPerPersonElement.textContent = formatCurrency(totalPerPerson / tipPercentages.length, currencySymbol);
  baseCostPerPersonElement.textContent = formatCurrency(baseCostPerPerson, currencySymbol);
}

// Reset all fields and results
function resetFields() {
  billAmountInput.value = "";
  currencySymbolInput.value = "$";
  tipPercentagesInput.value = "10,15,20";
  peopleCountInput.value = "";
  totalTipElement.textContent = "-";
  tipPerPersonElement.textContent = "-";
  totalPerPersonElement.textContent = "-";
  baseCostPerPersonElement.textContent = "-";
}

// Event listeners for buttons
calculateButton.addEventListener("click", calculateTip);
resetButton.addEventListener("click", resetFields);

// Optional: Automatically update on input change
// billAmountInput.addEventListener("input", calculateTip);
// peopleCountInput.addEventListener("input", calculateTip);
// tipPercentagesInput.addEventListener("input", calculateTip);
// currencySymbolInput.addEventListener("input", calculateTip);
