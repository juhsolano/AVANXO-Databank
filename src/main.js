function processingInput() {
  event.preventDefault();
  const chosenCountry = document.getElementsByName("country");
// const chosenIndicator = document.getElementsByName("select-indicators").value;
const chosenCountries = window.data.countries(chosenCountry);
//countries(chosenCountry);
document.getElementById("myChosenCountry").innerHTML = `<p> Escolheu: ${chosenCountries}</p>`;
}
document.getElementById("data-processing").addEventListener("click", processingInput);
