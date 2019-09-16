function processingInput () {
    event.preventDefault();
    const chosenCountry = document.getElementsByName("country");
    const chosenCountries = window.data.countries(chosenCountry); //, chosenChile, chosenBrasil, chosenMexico, chosenPeru);
    document.getElementById("myChosenCountry").innerHTML = `<p> Escolheu: ${chosenCountries}</p>`;
} 
document.getElementById("data-processing").addEventListener("click", processingInput);
