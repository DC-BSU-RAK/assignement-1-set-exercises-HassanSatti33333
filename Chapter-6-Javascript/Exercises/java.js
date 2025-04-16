// Wait for the DOM to be fully loaded before executing JavaScript
document.addEventListener("DOMContentLoaded", function () {
  // Get references to DOM elements
  const costPerLiterInput = document.getElementById("cost-per-liter");
  const litersInput = document.getElementById("liters");
  const calculateBtn = document.getElementById("calculate-btn");
  const resultDisplay = document.getElementById("result");

  // Add click event listener to the calculate button
  calculateBtn.addEventListener("click", function () {
    // Get the values from the input fields
    const costPerLiter = parseFloat(costPerLiterInput.value);
    const liters = parseFloat(litersInput.value);

    // Validate the inputs
    if (isNaN(costPerLiter) || isNaN(liters)) {
      resultDisplay.textContent = "Please enter valid numbers";
      resultDisplay.style.display = "block";
      return;
    }

    if (costPerLiter < 0 || liters < 0) {
      resultDisplay.textContent = "Values cannot be negative";
      resultDisplay.style.display = "block";
      return;
    }

    // Calculate the total cost
    const totalCost = costPerLiter * liters;

    // Display the result with 2 decimal places
    resultDisplay.textContent = `Total cost: $${totalCost.toFixed(2)}`;
    resultDisplay.style.display = "block";
  });
});
