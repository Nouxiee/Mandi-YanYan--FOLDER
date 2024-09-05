// Get the input field, button, and result element
const centimetersInput = document.getElementById('centimeters');
const convertButton = document.getElementById('convert-btn');
const resultElement = document.getElementById('result');

// Add an event listener to the convert button
convertButton.addEventListener('click', convertCentimetersToYards);

// Function to convert centimeters to yards
function convertCentimetersToYards() {
    // Get the input value
    const centimeters = parseFloat(centimetersInput.value.trim());

    // Check if the input is a valid number
    if (isNaN(centimeters) || centimeters < 0) {
        alert('Please enter a valid non-negative number');
        centimetersInput.focus();
        return;
    }

    // Convert centimeters to yards (1 yard = 91.44 centimeters)
    const yards = centimeters / 91.44;

    // Update the result element
    resultElement.innerText = `${centimeters} centimeters is approximately equal to ${yards.toFixed(4)} yards`;
}