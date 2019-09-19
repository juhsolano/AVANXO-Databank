function processingInput() {
  event.preventDefault();
  const chosenCountry = document.getElementsByName("country");
  const chosenIndicator = document.getElementById("select-indicators");
  const chosenCountries = window.data.countries(chosenCountry, chosenIndicator);//countries(chosenCountry);
  document.getElementById("myChosenCountry").innerHTML = `<p> Escolheu: ${chosenCountries}</p>`;
  console.log(chosenIndicator.value);
}
document.getElementById("data-processing").addEventListener("click", processingInput);

