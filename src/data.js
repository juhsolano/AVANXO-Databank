window.data = {
  filterInfo: filterInfo
};

function filterInfo(chosenCountry, chosenIndicator, chosenYears) {
  const myResults = [];
  const checkboxOptions = Array.from(chosenCountry);
  const checkboxYear = Array.from(chosenYears);
  const checkedCountry = checkboxOptions.filter(i => i.checked === true).map(i => i.value);
  const checkedYear = checkboxYear.filter(i => i.checked === true).map(i => i.value);
  const indicatorForCountry = checkedCountry.map(country => {
    return WORLDBANK[country].indicators.filter(i => i.indicatorCode.includes(chosenIndicator.value));
  });

  const data = indicatorForCountry.map(elementSelected => {
    return elementSelected.map(item => Object.entries(item.data));
  });
  console.log(indicatorForCountry);

  const xuxu = [];
  indicatorForCountry.map(pais => {
    pais.map(i => {
      xuxu.push({
        pais: i.countryName,
        indice: i.indicatorName,
        ano: i.data
      });
    });
  });

  const rrr = [];

  xuxu.filter(i => {
    Object.keys(i.ano).filter(ano => { rrr.push(ano === "2012", i.ano[ano]); });
    // const fia = lalala.filter(ano => ano === "2012");
    console.log(rrr);


  });

  const takingValue = data.map(item => item[0].map(dataList => (dataList)).filter(key => {
    if (checkedYear.includes(key[0])) {
      return myResults.push(key[1]);
    }
  }));
  return;

  // const data = indicatorForCountry.map(elementSelected => {
  //   return elementSelected.map(item => Object.keys(item.data).map(dt => {
  //     dt, item.data[dt];
  //   }));
  // });

  // console.log(data);
};