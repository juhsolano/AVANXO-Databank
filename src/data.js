
function userChoiceMap(arrayCountry, worldbankObject, indicatorString) {
  return arrayCountry.map(country => {
    return worldbankObject[country].indicators.filter(i => i.indicatorCode.includes(indicatorString.value));
  });

};

function takingValueFromArray(arrayCheckbox) {
  return arrayCheckbox.filter(i => i.checked === true).map(i => i.value);
};

window.data = {
  userChoiceMap: userChoiceMap,
  takingValueFromArray: takingValueFromArray
};

