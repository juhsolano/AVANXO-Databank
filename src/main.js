function processingInput () {
    event.preventDefault();
    // const chosenChile = document.getElementById("chosen-chile");
    // const chosenBrasil = document.getElementById("chosen-brasil");
    // const chosenMexico = document.getElementById("chosen-mexico");
    // const chosenPeru = document.getElementById("chosen-peru");
    const chosenCountry = document.getElementsByName("country");
    const chosenCountries = window.data.countries(chosenCountry); //, chosenChile, chosenBrasil, chosenMexico, chosenPeru);
    document.getElementById("chosenCountry").innerHTML = `<p> Escolheu: ${chosenCountry}</p>`;
} 
document.getElementById("data-processing").addEventListener("click", processingInput);
