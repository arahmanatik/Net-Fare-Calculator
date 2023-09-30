let inputBaseFare = document.getElementById("input-basefare");
let inputPercent = document.getElementById("input-percent");
let inputTax = document.getElementById("input-tax");
let calculateBtn = document.getElementById("calculate-btn");
let netFare = document.getElementById("net-fare");

function getNetFare() {
  // Get the values from the input fields
  let baseFare = parseFloat(inputBaseFare.value);
  let percent = parseFloat(inputPercent.value);
  let tax = parseFloat(inputTax.value);

  // Check if the input values are valid numbers
  if (!isNaN(baseFare) && !isNaN(percent) && !isNaN(tax)) {
    // Calculate the net fare as baseFare - (baseFare * percent / 100) + tax
    let netFareValue = baseFare - (baseFare * percent) / 100 + tax;

    // Display the result in the netFare element
    netFare.textContent = "Net fare = " + netFareValue.toFixed(2); // Display the result with two decimal places
  } else {
    // If any input is not a valid number, display an error message
    netFare.textContent = "Invalid input. Please enter valid numbers.";
  }
}
