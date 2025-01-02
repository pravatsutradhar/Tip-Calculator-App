const billAmountInput = document.getElementById("billAmount");
const tipPercentageInput = document.getElementById("tipPercentage");
const peopleCountInput = document.getElementById("peopleCount");
const calculateButton = document.getElementById("calculateButton");

const totalTipElement = document.getElementById("totalTip");
const tipPerPersonElement = document.getElementById("tipPerPerson");
const totalPerPersonElement = document.getElementById("totalPerPerson");

function calculateTip() {
  const billAmount = parseFloat(billAmountInput.value);
  const tipPercentage = parseInt(tipPercentageInput.value);
  const peopleCount = parseInt(peopleCountInput.value);

  if (isNaN(billAmount) || isNaN(peopleCount) || peopleCount <= 0) {
    alert("Please enter valid numbers for all fields!");
    return;
  }

  const totalTip = (billAmount * tipPercentage) / 100;
  const tipPerPerson = totalTip / peopleCount;
  const totalPerPerson = (billAmount + totalTip) / peopleCount;

  totalTipElement.textContent = totalTip.toFixed(2);
  tipPerPersonElement.textContent = tipPerPerson.toFixed(2);
  totalPerPersonElement.textContent = totalPerPerson.toFixed(2);
}

calculateButton.addEventListener("click", calculateTip);
