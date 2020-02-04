//passa o evento como parâmetro
//function processingInput(evento){}
function processingInput() {
  event.preventDefault();
  const chosenCountry = document.getElementsByName("select-country");
  const chosenIndicator = document.getElementById("select-indicators");
  const chosenYears = document.getElementsByName("select-year");
  return filterInfo(chosenCountry, chosenIndicator, chosenYears);
};
document.getElementById("data-processing").addEventListener("click", processingInput);

function resetData() {
  location.reload();
};
document.getElementById("reset-data").addEventListener("click", resetData);

function filterInfo(chosenCountry, chosenIndicator, chosenYears) {
  const checkboxOptions = Array.from(chosenCountry);
  const checkboxYear = Array.from(chosenYears);
  const checkedCountry = window.data.takingValueFromArray(checkboxOptions);
  const checkedYear = window.data.takingValueFromArray(checkboxYear);
  const indicatorForCountry = window.data.userChoiceMap(checkedCountry, WORLDBANK, chosenIndicator.value);
  const values = window.data.takingValues(indicatorForCountry, checkedYear);
  const dataCalculations = window.data.average(values);
  const means = window.data.orderingValues(indicatorForCountry, dataCalculations);
  const ascendingMeans = window.data.sortData(means);
  showResults(indicatorForCountry, checkedYear);
  showCalculations(ascendingMeans);
};

function showResults(arrayData, arrayYears) {
  let dataProcessed = document.getElementById("data-processed");
  dataProcessed.innerHTML = `
    ${arrayData.map(country => {
    return `<div class="result">
             <p>${country[0].countryName}</p>
             <p>${country[0].indicatorName}</p>
             <p>${arrayYears.map(year => `${year} : ${country[0].data[year]}<br>`).join("")}</p>
           </div > `;
  }).join("")}`;
};

function showCalculations(arrayMeans) {
  let calculations = document.getElementById("result-calculation");
  calculations.innerHTML = `<p>Valores médios por país para o período selecionado: </p><br>
    ${arrayMeans.map(item => {
    return `<div class = "result">
            <p>${item.key1}: ${item.key2}</p>
            </div>`;
  }).join("")}`;
};
