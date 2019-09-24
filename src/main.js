function processingInput() {
  event.preventDefault();
  const chosenCountry = document.getElementsByName("select-country");
  const chosenIndicator = document.getElementById("select-indicators");
  const chosenYears = document.getElementsByName("select-year");
  const processedData = window.data.filterInfo(chosenCountry, chosenIndicator, chosenYears);
  document.getElementById("processed-data").innerHTML = `<p> Escolheu: ${processedData}</p>`;
}
document.getElementById("data-processing").addEventListener("click", processingInput);

//-----------------------------------------
// const teste = document.getElementById("processed-data");

// teste.innerHTML += `
//     ${indicatorForCountry.map(pais => pais.map(i => {
//   return `<div>
//               <p>${i.countryName}</p>
//               <p>${i.indicatorName}</p>
//               <div>${Object.entries(i.data).map(i => `<p>ano: ${i[0]}, valor: ${i[1]}</p>`).join("")}</div >

//             </div > `
// })).join("")}   
//   `
