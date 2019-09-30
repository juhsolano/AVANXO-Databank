window.data = {
  userChoiceMap: userChoiceMap,
  takingValueFromArray: takingValueFromArray,
  takingValues: takingValues,
  average: average,
  orderingValues: orderingValues,
  sortData: sortData
};

function userChoiceMap(arrayCountry, worldbankObject, indicatorString) {
  return arrayCountry.map(country => {
    return worldbankObject[country].indicators.filter(i => i.indicatorCode.includes(indicatorString));
  });
};

function takingValueFromArray(arrayCheckbox) {
  return arrayCheckbox.filter(i => i.checked === true).map(i => i.value);
};

function takingValues(arrayData, arrayYears) {
  return arrayData.map(country => arrayYears.map(year => country[0].data[year]));
};

function average(arrayValues) {
  const anyCountry = arrayValues.map(indivialArray => indivialArray.filter(value => value !== ""));
  const countryLength = arrayValues.map(indivialArray => indivialArray.length);
  const calculus = anyCountry.map(indivialArray => indivialArray.reduce(((acc, cur) => acc += cur), 0) / countryLength[0]);
  return calculus;
};

function orderingValues(arrayData, arrayResult) {
  const arrayCountry = arrayData.map(country => country[0].countryName);
  const arrayValues = arrayCountry.map((country, value) => {
    return { key1: country, key2: arrayResult[value] };
  });
  return arrayValues;
};

function sortData(arrayMeans) {
  return arrayMeans.sort(function (a, b) {
    if (a.key2 > b.key2) {
      return 1;
    }
    if (a.key2 < b.key2) {
      return -1;
    }
    return 0;
  });
}