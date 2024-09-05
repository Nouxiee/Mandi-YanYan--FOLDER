const centimetersInput = document.getElementById('centimeters');
const convertButton = document.getElementById('convert-btn');
const resultElement = document.getElementById('result');

convertButton.addEventListener('click', convertCentimetersToYards);

function convertCentimetersToYards() {

    const centimeters = parseFloat(centimetersInput.value.trim());

    if (isNaN(centimeters) || centimeters < 0) {
        alert('Please enter a valid non-negative number');
        centimetersInput.focus();
        return;
    }

    const yards = centimeters / 91.44;

    resultElement.innerText = `${centimeters} centimeters is approximately equal to ${yards.toFixed(4)} yards`;
}