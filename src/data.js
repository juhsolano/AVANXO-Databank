window.data = {
  countries: countries
};

function countries(chosenCountry, chosenIndicator, chosenYears) {
  const checkboxOptions = Array.from(chosenCountry);
  const checkboxYear = Array.from(chosenYears);
  const checkedCountry = checkboxOptions.filter(i => i.checked === true).map(i => i.value);
  const checkedYear = checkboxYear.filter(i => i.checked === true).map(i => i.value);
  const indicatorForCountry = checkedCountry.map(country => {
    return WORLDBANK[country].indicators.filter(i => i.indicatorCode.includes(chosenIndicator.value));
  });
  const data = indicatorForCountry.map(elementSelected => {
    return elementSelected.map(item => item.data)[0][checkedYear];
  });

  console.log(indicatorForCountry);
  console.log(data);
  console.log(checkedYear);
  //-----------------------------------------

  // const data = indicatorForCountry.map(elementSelected => {
  //   return elementSelected.map(item => Object.keys(item.data)).filter(year => { return year.keys == checkedYear });
  // });
  // const teste = indicatorForCountry.map(elementSelected => {
  //   return elementSelected.map(item => Object.values(item.data));
  // });
  // const teste2 = indicatorForCountry.map(elementSelected => {
  //   return elementSelected.map(item => Object.entries(item.data));
  // });
  // const teste3 = indicatorForCountry.map(elementSelected => {
  //   return elementSelected.map(item => Object.keys(item.data).filter(year => year === checkboxYear));
  // });
  // console.log(teste3);
  // console.log(teste);
  // console.log(teste2);
};

