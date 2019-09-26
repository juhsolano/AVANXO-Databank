
function userChoiceMap(arrayCountry, worldbankObject, indicatorString) {
  return arrayCountry.map(country => {
    return worldbankObject[country].indicators.filter(i => i.indicatorCode.includes(indicatorString.value));
  });

}
window.data = {
  userChoiceMap: userChoiceMap
};

