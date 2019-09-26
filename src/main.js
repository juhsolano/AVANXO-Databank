function processingInput() {
  event.preventDefault();
  const chosenCountry = document.getElementsByName("select-country");
  const chosenIndicator = document.getElementById("select-indicators");
  const chosenYears = document.getElementsByName("select-year");
  return filterInfo(chosenCountry, chosenIndicator, chosenYears);
}
document.getElementById("data-processing").addEventListener("click", processingInput);

function filterInfo(chosenCountry, chosenIndicator, chosenYears) {
  const checkboxOptions = Array.from(chosenCountry);
  const checkboxYear = Array.from(chosenYears);
  const checkedCountry = checkboxOptions.filter(i => i.checked === true).map(i => i.value);
  const checkedYear = checkboxYear.filter(i => i.checked === true).map(i => i.value);
  const indicatorForCountry = window.data.userChoiceMap(checkedCountry, WORLDBANK, chosenIndicator);
  return showResults(indicatorForCountry);
  
  function showResults(arrayData) {
    let dataProcessed = document.getElementById("data-processed");
    dataProcessed.innerHTML += `
  ${arrayData.map(pais => {
    return `<div class="result">
           <p>${pais[0].countryName}</p>
           <p>${pais[0].indicatorName}</p>
           <p>${checkedYear.map(ano => `${ano} : ${pais[0].data[ano]}<br>`).join("")}</p>
         </div > `;
  }).join("")}`;
  };

//Processo lógico usando array
  //   const dataProcessed = document.getElementById("data-processed");
  //   dataProcessed.innerHTML += `
  //    ${indicatorForCountry.map(pais => pais.map(i => {
  //     return `<div>
  //              <p>${i.countryName}</p>
  //              <p>${i.indicatorName}</p>
  //              <p>${checkedYear.map(ano => Object.entries(i.data).filter(i => i[0] === ano)).map(i => i.map(j => j[0] + ": " + j[1]))}</p>
  //            </div > `
  //   })).join("")}
  //  `
};