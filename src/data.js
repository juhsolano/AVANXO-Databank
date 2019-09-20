window.data = {
  countries: countries
};

function countries(chosenCountry, chosenIndicator, chosenYears) {
  //Transformando 
  const checkboxOptions = Array.from(chosenCountry);
  //Retorna em forma de array
  //Listando os checados
  const checkedCountry = checkboxOptions.filter(i => i.checked === true).map(i => i.value);
  const indicatorForCountry = checkedCountry.map(pais => {
    return WORLDBANK[pais].indicators.filter(i => i.indicatorCode.includes(chosenIndicator.value));
  });
  console.log(indicatorForCountry);
  const selectedYear = indicatorForCountry.
}
