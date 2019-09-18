window.data = {
  countries: countries
}

//Função para passar por todos os elementos de country e retornar o indicatorCode
function myIndicators(countries) {
  return countries.map((element) => element.indicatorCode);
};

//Função para acessar os dados([data])
function myData(countries) {
  return countries.map((element) => element.data);
};

//Colocando em uma variável meus códigos desejados
const myIndicatorsCode = ["SL.TLF.CACT.FM.NE.ZS", "SL.TLF.BASC.ZS", "SL.TLF.BASC.MA.ZS", "SL.TLF.BASC.FE.ZS",
  "SL.TLF.INTM.ZS", "SL.TLF.INTM.MA.ZS", "SL.TLF.INTM.FE.ZS", "SL.TLF.ADVN.ZS",
  "SL.TLF.ADVN.MA.ZS", "SL.TLF.ADVN.FE.ZS", "SL.UEM.TOTL.NE.ZS", "SL.UEM.TOTL.MA.NE.ZS",
  "SL.UEM.TOTL.FE.NE.ZS", "SL.UEM.BASC.FE.ZS", "SL.UEM.INTM.FE.ZS", "SL.UEM.ADVN.FE.ZS"];

//Filtrar os códigos do meu banco de acordo com meus códigos desejados 
function filteredCode(indCode) {
  const selectedIndicators = indCode.filter((code) => { return myIndicatorsCode.includes(code) });
  return selectedIndicators;
};

function countries(chosenCountry) {
  let selectedCountry = "";
  // console.log(chosenCountry);
  for (let i in chosenCountry) {
    if (chosenCountry[i].checked) {
      const pais = chosenCountry[i].value;
      const indicatorsByCountry = myIndicators(WORLDBANK[pais].indicators);
      selectedCountry += filteredCode(indicatorsByCountry);
      // console.log(myIndicators(WORLDBANK[pais].indicators));
    }
  }
  return selectedCountry;
};