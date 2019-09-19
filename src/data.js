window.data = {
  countries: countries
}

//Função para passar por todos os elementos de country e retornar o indicatorCode
function myIndicators(countries) {
  return countries.map((element) => element.indicatorCode);
};

// Função para acessar os dados([data])
function myData(countries) {
  return countries.map((element) => element.data);
};

//Colocando em uma variável meus códigos desejados
const myIndicatorsCode = ["SL.TLF.CACT.FM.NE.ZS", "SL.TLF.BASC.ZS", "SL.TLF.BASC.MA.ZS", "SL.TLF.BASC.FE.ZS",
  "SL.TLF.INTM.ZS", "SL.TLF.INTM.MA.ZS", "SL.TLF.INTM.FE.ZS", "SL.TLF.ADVN.ZS",
  "SL.TLF.ADVN.MA.ZS", "SL.TLF.ADVN.FE.ZS", "SL.UEM.TOTL.NE.ZS", "SL.UEM.TOTL.MA.NE.ZS",
  "SL.UEM.TOTL.FE.NE.ZS", "SL.UEM.BASC.FE.ZS", "SL.UEM.INTM.FE.ZS", "SL.UEM.ADVN.FE.ZS"];

  const myYears = [2012, 2013, 2014, 2015, 2016, 2017];

//Filtrar os códigos do meu banco de acordo com meus códigos desejados 
function filteredCode(indCode) {
  const selectedIndicators = indCode.filter((code) => { return myIndicatorsCode.includes(code) });
  return selectedIndicators;
};

//Filtrar anos desejados 
function filteredYears(years) {
  const selectedYears = years.filter((year) => { return myYears.includes(year) });
  return selectedYears;
};

// function filterData(dataResult) {
//   const dataForIndicators = dataResult.filter((data) => {return codeOptions.includes(data)});
//   return dataForIndicators;
// };

function countries(chosenCountry, chosenIndicator) {
    const xuxu = Array.from(chosenCountry)
    console.log(xuxu.map(i => i))
    console.log(xuxu.map(i => i.checked))

    se (xuxu[i].checked === true)
    const pais = xuxu.value 
      arrayIndices[pais].indicators.filter(filtrar por chosenIndicator)

  let selectedCountry = "";
  for (let i in chosenCountry) {
    if (chosenCountry[i].checked) {
      const country = chosenCountry[i].value;
      console.log(country);
      const allCountries = WORLDBANK[country].indicators;
      const indicatorsByCountry = myIndicators(allCountries);
      const data = myData(allCountries);
      console.log(data);
      const codeOptions = filteredCode(indicatorsByCountry);
      selectedCountry += codeOptions;
    }
  }
  return selectedCountry;
};

// for (let i in chosenIndicator){
//   if (chosenIndicator[i].select)
// }
// const dataByCountry = chosenIndicator.value;
// console.log(dataByCountry);
// chosenIndicator.value 