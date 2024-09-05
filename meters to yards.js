function compute() {
    let Meters = parseFloat(document.getElementById("Meters").value);
    if (isNaN(Meters)) {
        alert("Please enter a valid number");
        return;
    }
    let Yards = Meters / 0.9144;
    document.getElementById("Yards").value = Yards.toFixed(2);
}

document.getElementById("btnConvert").addEventListener("click", compute);