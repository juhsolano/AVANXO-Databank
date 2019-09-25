function processingInput() {
  event.preventDefault();
  const chosenCountry = document.getElementsByName("select-country");
  const chosenIndicator = document.getElementById("select-indicators");
  const chosenYears = document.getElementsByName("select-year");
  const printing = document.getElementById("data-processed");
  const processedData = window.data.filterInfo(chosenCountry, chosenIndicator, chosenYears, printing);
}
document.getElementById("data-processing").addEventListener("click", processingInput);

window.data = {
  filterInfo: filterInfo
};

function filterInfo(chosenCountry, chosenIndicator, chosenYears, printing) {
  // const myResults = [];
  const checkboxOptions = Array.from(chosenCountry);
  // const checkboxYear = Array.from(chosenYears);
  const checkedCountry = checkboxOptions.filter(i => i.checked === true).map(i => i.value);
  // const checkedYear = checkboxYear.filter(i => i.checked === true).map(i => i.value);
  const indicatorForCountry = checkedCountry.map(country => {
    return WORLDBANK[country].indicators.filter(i => i.indicatorCode.includes(chosenIndicator.value));
  });
  const data = indicatorForCountry.map(elementSelected => {
    return elementSelected.map(item => Object.entries(item.data).filter(year => year >= "2012"));
  });
  const dataResults = [];
  indicatorForCountry.map(elementSelected => {
    elementSelected.map(item => {
      dataResults.push(
        {
          country: item.countryName,
          indicator: item.indicatorName,
          information: data
        });
    });
  });
  console.log(dataResults);
  // return dataResults;

  const print = printing;
  print.innerHTML += `<div>
     <p>${dataResults[0].country}</p> </div >`

  //----------------------------------------------------------------------------
  //----------------------------------------------------------------------------
  //#########TODA A SÉRIE DE ANOS E VALORES PARA TODOS OS PAÍSES#########
  // const data = indicatorForCountry.map(elementSelected => {
  //   return elementSelected.map(item => Object.keys(item.data).map(dt => {
  //     return console.log(dt, item.data[dt]);
  //   }));
  // });
  // const myFilteredData = data.filter(year => year >= "2012");
  // console.log(myFilteredData);
  //######################################

  //#########PEGA O ANO DESEJADO DE QUALQUER PÁIS, MAS JOGA NUM ÚNICO ARRAY#########
  // const data = indicatorForCountry.map(elementSelected => {
  //   return elementSelected.map(item => Object.entries(item.data));
  // });
  // const takingValue = data.map(item => item[0].map(dataList => (dataList)).filter(key => {
  //   if (checkedYear.includes(key[0])) {
  //     return myResults.push(key[1]);
  //   }
  // }));
  // return console.log(myResults);
  //######################################

  //#########PEGA UM ANO POR VEZ E JOGA NUM ÚNICO ARRAY#########
  // const data = indicatorForCountry.map(elementSelected => {
  //   return elementSelected.map(item => item.data)[0][checkedYear];
  // });
  // console.log(data);
  //######################################
};