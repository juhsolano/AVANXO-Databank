function processingInput() {
  event.preventDefault();
  const chosenCountry = document.getElementsByName("select-country");
  const chosenIndicator = document.getElementById("select-indicators");
  const chosenYears = document.getElementsByName("select-year");
  const processedData = window.data.filterInfo(chosenCountry, chosenIndicator, chosenYears);
}
document.getElementById("data-processing").addEventListener("click", processingInput);

window.data = {
  filterInfo: filterInfo
};

function filterInfo(chosenCountry, chosenIndicator, chosenYears, printing) {
  const checkboxOptions = Array.from(chosenCountry);
  const checkboxYear = Array.from(chosenYears);
  const checkedCountry = checkboxOptions.filter(i => i.checked === true).map(i => i.value);
  const checkedYear = checkboxYear.filter(i => i.checked === true).map(i => i.value);
  const indicatorForCountry = checkedCountry.map(country => {
    return WORLDBANK[country].indicators.filter(i => i.indicatorCode.includes(chosenIndicator.value));
  });
  const dataProcessed = document.getElementById("data-processed");
  dataProcessed.innerHTML += `
   ${indicatorForCountry.map(pais => {
    return `<div>
             <p>${pais[0].countryName}</p>
             <p>${pais[0].indicatorName}</p>
             <p>${checkedYear.map(ano => `${ano} : ${pais[0].data[ano]}`)}</p>
           </div > `
  }).join("")}
 `
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