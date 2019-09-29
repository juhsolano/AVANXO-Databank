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
  const checkboxYear = Array.from(chosenYears);
  const checkedCountry = window.data.takingValueFromArray(checkboxOptions);
  const checkedYear = window.data.takingValueFromArray(checkboxYear);
  const indicatorForCountry = window.data.userChoiceMap(checkedCountry, WORLDBANK, chosenIndicator.value);
  const values = window.data.takingValues(indicatorForCountry, checkedYear);
  const dataCalculations = window.data.average(values);
  showResults(indicatorForCountry, checkedYear);
  showCalculations(indicatorForCountry, dataCalculations);
  console.log(showCalculations);
};
//------------------------------------------------------------------------------------------------------
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
//------------------------------------------------------------------------------------------------------
function showCalculations(arrayData, arrayResult) {
  let calculations = document.getElementById("result-calculation");
  const arrayCountry = arrayData.map(country => country[0].countryName);
  const arrayValues = arrayCountry.map((country, value) => {
    return { key1: country, key2: arrayResult[value] };
  });
  calculations.innerHTML = `<p>Valores médios por país para o período selecionado: </p><br>
    ${arrayValues.map(myKeys => {
    return `<div class = "result">
            <p>${myKeys.key1}: ${myKeys.key2}</p>
            </div>`;
  }).join("")}`;
};