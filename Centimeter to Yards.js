function convert() {
  let centimeter = document.getElementById("centimeter").value;
  let yards = centimeter * 0.0109361;
  document.getElementById("yards").value = yards.toFixed(2);
}
function clearInput() {
  document.getElementById("centimeter").value = "";
  document.getElementById("yards").value = "";
}