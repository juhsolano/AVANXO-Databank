window.data = {
  countries: countries
};

function countries(chosenCountry, chosenIndicator, chosenYears) {
  const checkboxOptions = Array.from(chosenCountry);
  const checkboxYear = Array.from(chosenYears);
  const checkedCountry = checkboxOptions.filter(i => i.checked === true).map(i => i.value);
  const checkedYear = checkboxYear.filter(i => i.checked === true).map(i => i.value);
  console.log(checkedYear);
  const indicatorForCountry = checkedCountry.map(country => {
    return WORLDBANK[country].indicators.filter(i => i.indicatorCode.includes(chosenIndicator.value));
  });

  ////////////TESTES PARA FILTRO ANO////////////
  // const data = indicatorForCountry.map(elementSelected => {
  //   return elementSelected.map(item => Object.entries(item.data));
  // });
  // console.log(data);

  // const teste = indicatorForCountry.map(elementSelected => {
  //   return elementSelected.map(item => Object.keys(item.data).filter(year => {
  //     if (checkedYear.includes("2012")) {
  //       return console.log((Object.values(item.data))[52]);
  //     } else if (checkedYear.includes("2013")) {
  //       return console.log((Object.values(item.data))[53]);
  //     }
  //   }));
  // });

  // [52 a 57]


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

  // const testeForArray = checkedYear.includes("2012" && "2017");
  // console.log(testeForArray);


  // const data = indicatorForCountry.map(elementSelected => {
  //   return elementSelected.map(item => item.data)[0][checkedYear];
  // });

  //-----------------------------------------
  // const data = indicatorForCountry.map(elementSelected => {
  //   const xuxu = Object.entries(elementSelected.map(item => item.data));
  //   // console.log(xuxu);
  // });

  // const teste = document.getElementById("teste");

  // teste.innerHTML += `
  //   ${indicatorForCountry.map(pais => pais.map(i => {
  //   return `<div>
  //             <p>${i.countryName}</p>
  //             <p>${i.indicatorName}</p>
  //             <div>${Object.entries(i.data).map(i => `<p>ano: ${i[0]}, valor: ${i[1]}</p>`).join("")}</div >

  //           </div > `
  // })).join("")}   
  // `

  // function pegaAnosEscolhidos() {
  //   const fff = indicatorForCountry.map(pais => pais.map(i => {
  //     return Object.entries(i.data);
  //   }))
  //   return fff.map(i => console.log(i))
  // }

  // console.log(pegaAnosEscolhidos())

  //-----------------------------------------

  // const teste1 = indicatorForCountry.map(elementSelected => {
  //   return elementSelected.map(item => Object.keys(item.data));
  // });

  // console.log(teste1);

  // const teste2 = indicatorForCountry.map(elementSelected => {
  //   return elementSelected.map(item => Object.values(item.data));
  // });

  // console.log(teste2);

  // const teste3 = indicatorForCountry.map(elementSelected => {
  //   return elementSelected.map(item => Object.entries(item.data));
  // });

  // for (arr of teste3) {
  //   for (ano of arr) {
  //     ano.map(i => console.log(i[0]));
  //   }
  // }

  // teste3.map(i => {
  //   console.log(i.filter(j => j[0] === checkedYear));

  // for (let j of i) {
  //   j.filter(ano => ano)
  // }
  // });
};

