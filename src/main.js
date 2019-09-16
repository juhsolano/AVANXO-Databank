function processingInput () {
    event.preventDefault();
    const chosenCountry = document.getElementsByName("country");
    const chosenCountries = window.data.countries(chosenCountry); //, chosenChile, chosenBrasil, chosenMexico, chosenPeru);
    document.getElementById("myChosenCountry").innerHTML = `<p> Escolheu: ${chosenCountries}</p>`;
} 
document.getElementById("data-processing").addEventListener("click", processingInput);


//Funções que se relacionam com o DOM

//Pegar o botão e aplicar o evento
document.getElementById("botaodata").addEventListener("click", printButton);

function printButton() {
    event.preventDefault();
    let worlditens = window.data.country;
  document.getElementById("root").innerHTML = worlditens();
  
};
