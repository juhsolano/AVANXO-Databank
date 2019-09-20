function processingInput() {
  event.preventDefault();
  const chosenCountry = document.getElementsByName("country");
  const chosenIndicator = document.getElementById("select-indicators");
  const chosenYears = document.getElementsByName("year");
  const chosenCountries = window.data.countries(chosenCountry, chosenIndicator, chosenYears);
  document.getElementById("myChosenCountry").innerHTML = `<p> Escolheu: ${chosenCountries}</p>`;
  // console.log(chosenIndicator.value);
}
document.getElementById("data-processing").addEventListener("click", processingInput);

