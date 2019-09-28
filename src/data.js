window.data = {
  userChoiceMap: userChoiceMap,
  takingValueFromArray: takingValueFromArray,
  takingValues: takingValues,
  average: average
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

  // function average(arrayValues) {
  //   const flatArrays = arrayValues.flat();
  //   const reducingArray = flatArrays.reduce(((acc, cur) => acc += cur), 0);
  //   return Math.round(reducingArray / flatArrays.length);
  // }
};