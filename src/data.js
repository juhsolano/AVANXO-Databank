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
  // const data = indicatorForCountry.map(elementSelected => {
  //   return elementSelected.map(item => item.data)[0][checkedYear];
  // });

  // const data = indicatorForCountry.map(elementSelected => {
  //   const xuxu = Object.entries(elementSelected.map(item => item.data));
  //   // console.log(xuxu);
  // });

  const teste = document.getElementById("teste");

  teste.innerHTML += `
    ${indicatorForCountry.map(pais => pais.map(i => {
    return `<div>
              <p>${i.countryName}</p>
              <p>${i.indicatorName}</p>
              <div>${Object.entries(i.data).map(i => `<p>ano: ${i[0]}, valor: ${i[1]}</p>`).join("")}</div >

            </div > `
  })).join("")}   
  `

  function pegaAnosEscolhidos() {
    const fff = indicatorForCountry.map(pais => pais.map(i => {
      return Object.entries(i.data);
    }))
    return fff.map(i => console.log(i))
  }

  console.log(pegaAnosEscolhidos())

  //-----------------------------------------

  // const teste1 = indicatorForCountry.map(elementSelected => {
  //   return elementSelected.map(item => Object.keys(item.data));
  // });

  // console.log(teste1);

  // const teste2 = indicatorForCountry.map(elementSelected => {
  //   return elementSelected.map(item => Object.values(item.data));
  // });

  // console.log(teste2);

  const teste3 = indicatorForCountry.map(elementSelected => {
    return elementSelected.map(item => Object.entries(item.data));
  });

  for (arr of teste3) {
    for (ano of arr) {
      ano.map(i => console.log(i[0]));
    }
  }

  teste3.map(i => {
    console.log(i.filter(j => j[0] === checkedYear));
    // for (let j of i) {
    //   j.filter(ano => ano)
    // }
  });

  // const teste4 = indicatorForCountry.map(elementSelected => {
  //   return elementSelected.map(item => Object.keys(item.data).filter(year => year >= 2012));
  // });

  // console.log(teste4);

};

