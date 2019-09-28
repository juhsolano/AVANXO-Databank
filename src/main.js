function processingInput() {
  event.preventDefault();
  const chosenCountry = document.getElementsByName("select-country");
  const chosenIndicator = document.getElementById("select-indicators");
  const chosenYears = document.getElementsByName("select-year");
  return filterInfo(chosenCountry, chosenIndicator, chosenYears);
};
document.getElementById("data-processing").addEventListener("click", processingInput);
//------------------------------------------------------------------------------------------------------
function resetData() {
  location.reload();
};
document.getElementById("reset-data").addEventListener("click", resetData);
//------------------------------------------------------------------------------------------------------
function filterInfo(chosenCountry, chosenIndicator, chosenYears) {
  const checkboxOptions = Array.from(chosenCountry);
  console.log(checkboxOptions);
  const checkboxYear = Array.from(chosenYears);
  console.log(checkboxYear);
  const checkedCountry = window.data.takingValueFromArray(checkboxOptions);
  console.log(checkedCountry);
  const checkedYear = window.data.takingValueFromArray(checkboxYear);
  console.log(checkedYear);
  const indicatorForCountry = window.data.userChoiceMap(checkedCountry, WORLDBANK, chosenIndicator.value);
  const values = window.data.takingValues(indicatorForCountry, checkedYear);
  const dataCalculations = window.data.average(values);
  showResults(indicatorForCountry, checkedYear);
  showCalculations(indicatorForCountry, dataCalculations);
};
//------------------------------------------------------------------------------------------------------
function showResults(arrayData, arrayYears) {
  let dataProcessed = document.getElementById("data-processed");
  dataProcessed.innerHTML += `
    ${arrayData.map(country => {
    return `<div class="result">
             <p>${country[0].countryName}</p>
             <p>${country[0].indicatorName}</p>
             <p>${arrayYears.map(year => `${year} : ${country[0].data[year]}<br>`).join("")}</p>
           </div > `;
  }).join("")}`;
};
//------------------------------------------------------------------------------------------------------

function showCalculations(arrayData, result) {
  let calculations = document.getElementById("result-calculation");
  calculations.innerHTML += `
  ${arrayData.map(country => {
    return `<div class="result">
    <p>${country[0].countryName}</p>
    <p>${result.join("<br>")}</p>
    </div > `;
  }).join("")}`;
};
//------------------------------------------------------------------------------------------------------
// function showCalculations(arrayData, result) {
//   let calculations = document.getElementById("result-calculation");
//   calculations.innerHTML += `<div class="result">
//     <p>O valor médio do indicador para o período selecionado foi de: ${result}</p>`;
// };
// function showCalculations(arrayData, result) {
//   let calculations = document.getElementById("result-calculation");
//   calculations.innerHTML += `
//                                   ${arrayData.map(country => {
//     return `<div class="result">
//                                             <p>O valor médio do indicador para ${country[0].countryName} no período selecionado foi de: ${result.map(any => any).join("")}</p>
//                                          </div > `;
//   }).join("")}`;
// };