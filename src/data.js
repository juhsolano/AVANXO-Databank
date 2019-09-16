window.data = {
    countries: countries
}

//Variáveis que retornam as array de todos os indicadores de cada país

// function countryNames() {
//     const peru = WORLDBANK.PER.indicators;
//     const brasil = WORLDBANK.BRA.indicators;//Chama uma array, nao printa o conteudo dela
//     const chile = WORLDBANK.CHL.indicators;
//     const mexico = WORLDBANK.MEX.indicators;
//     let countries = [peru, brasil, chile, mexico];
//     return countries; };

function countries(chosenCountry) {
    let selectedCountry = ""; 
    console.log(chosenCountry);
    for (let i in chosenCountry) {
        if (chosenCountry[i].checked) {
            const pais = chosenCountry[i].value;
            selectedCountry += myIndicators(WORLDBANK[pais].indicators);
            console.log(myIndicators(WORLDBANK[pais].indicators));
        }
    }
    return selectedCountry;  
};

//Função para passar por todos os elementos de countri e retornar o indicatorName
function myIndicators(countries){
    return countries.map((elemento)=>elemento.indicatorName);
}

//Criando arrays com os códigos
const myCodes = ["SL.TLF.CACT.FM.NE.ZS", "SL.TLF.BASC.ZS", "SL.TLF.BASC.MA.ZS", "SL.TLF.BASC.FE.ZS", 
"SL.TLF.INTM.ZS", "SL.TLF.INTM.MA.ZS", "SL.TLF.INTM.FE.ZS", "SL.TLF.ADVN.ZS", "SL.TLF.ADVN.MA.ZS", 
"SL.TLF.ADVN.FE.ZS", "SL.UEM.TOTL.NE.ZS", "SL.UEM.TOTL.MA.NE.ZS", "SL.UEM.TOTL.FE.NE.ZS", "SL.UEM.INTM.FE.ZS", 
"SL.UEM.BASC.FE.ZS", "SL.UEM.ADVN.FE.ZS"];
