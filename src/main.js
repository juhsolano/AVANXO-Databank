//Funções que se relacionam com o DOM

//Pegar o botão e aplicar o evento
document.getElementById("botaodata").addEventListener("click", printButton);

function printButton() {
    event.preventDefault();
    let worlditens = window.data.country;
  document.getElementById("root").innerHTML = worlditens();
  
};