function processingInput() {
  event.preventDefault();
  const chosenCountry = document.getElementsByName("select-country");
  const chosenIndicator = document.getElementById("select-indicators");
  const chosenYears = document.getElementsByName("select-year");
  const processedData = window.data.filterInfo(chosenCountry, chosenIndicator, chosenYears);
  document.getElementById("myChosenCountry").innerHTML = `<p> Escolheu: ${processedData}</p>`;
}
document.getElementById("data-processing").addEventListener("click", processingInput);

