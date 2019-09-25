window.data = {
  filterInfo: filterInfo
};

function filterInfo(chosenCountry, chosenIndicator, chosenYears) {
  const checkboxOptions = Array.from(chosenCountry);
  const checkboxYear = Array.from(chosenYears);
  const checkedCountry = checkboxOptions.filter(i => i.checked === true).map(i => i.value);
  const checkedYear = checkboxYear.filter(i => i.checked === true).map(i => i.value);
  console.log(checkedYear);
  const indicatorForCountry = checkedCountry.map(country => {
    return WORLDBANK[country].indicators.filter(i => i.indicatorCode.includes(chosenIndicator.value));
  });
  const data = indicatorForCountry.map(elementSelected => {
    return elementSelected.map(item => Object.entries(item.data));
  });

  const takingValue = data.map(item => item[0].map(dataList => (dataList)).filter(key => {
    if (checkedYear.includes(key[0])) {
      return console.log(key[1]);
    }
  }));
  console.log(data);
  console.log(takingValue);
};

