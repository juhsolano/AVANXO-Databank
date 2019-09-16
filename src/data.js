window.data = {
    countries: countries
}

function countries(chosenCountry) {
    let selectedCountry = "";
    for (let i in chosenCountry) {
        if (chosenCountry[i].checked) {
            if (chosenCountry[i].value == "chile") {
                console.log("Chile!");
                // return WORLDBANK.CHL;
            } else if (chosenCountry[i].value == "brasil") {
                console.log("Brasil!");
                // return WORLDBANK.BRA;   
            } else if (chosenCountry[i].value == "mexico") {
                console.log ("México!");
                // return WORLDBANK.MEX;
            } else if (chosenCountry[i].value == "peru") {
                console.log ("Peru!");
                // return WORLDBANK.PER;
            } else {
                console.log("nada escolhido");
            }
        }
    }
    return selectedCountry;  
};


//Colocando país dentro de uma variável - até indicadores
const chile = WORLDBANK.CHL.indicators;

//Para acessar os CÓDIGOS dos indicadores

//Sem formato arrow function
// const indicadores = chile.map(function(indCode){
//     return indCode.indicatorCode;
// })

const indCode = chile.map((code) => code.indicatorCode);

//Para verificar os codigos - Usar apenas um como exemplo
function verifyCode (indCode) {
    for (let i of indCode) {
        if (indCode == "SL.TLF.PART.FE.ZS"){
            return true;
        } else {
            return false;
        }
    }
};
//Colocar os codes desejados em um array!

//Para filtrar o código 
const filteringCode = indCode.filter(verifyCode);

//Devolvendo dados para o código selecionado

// const returningData 

//Pegando dados
const srcData = chile.map((myData)=> myData.data);


// filtrar e rodar map?

//Filtrar anos
function selectedYears (years){
    return years >= 2012;
};

const teste = srcData.filter(selectedYears);


srcData.forEach(year => {
    
});