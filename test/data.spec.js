require("../src/data.js");

const worldBankFake = {
  "PER": {
    "indicators": [
      {
        "data": {
          "2010": 25.3400001525879,
          "2011": 24.7999992370605,
          "2012": 25.0400009155273,
          "2013": 24.0900001525879,
          "2014": 24.2099990844727,
          "2015": 21.6800003051758,
          "2016": 23.7399997711182,
          "2017": 23.7600002288818
        },
        "countryName": "Perú",
        "countryCode": "PER",
        "indicatorName": "Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)",
        "indicatorCode": "SL.TLF.PART.FE.ZS"
      },
      {
        "data": {
          "2010": 78.624780373893,
          "2011": 78.3655110927175,
          "2012": 77.8805235121856,
          "2013": 78.2961351555737,
          "2014": 77.9335866036248,
          "2015": 78.808200413831,
          "2016": 77.8959016980287,
          "2017": 78.8773811632893
        },
        "countryName": "Perú",
        "countryCode": "PER",
        "indicatorName": "Proporción de participación en la fuerza laboral de mujeres y varones (%) (estimación nacional)",
        "indicatorCode": "SL.TLF.CACT.FM.NE.ZS"
      }
    ]
  },
  "MEX": {
    "indicators": [
      {
        "data": {
          "2010": 15.6,
          "2011": 14.9,
          "2012": 14.5,
          "2013": 14.2,
          "2014": 14,
          "2015": 14.1,
          "2016": 14.4,
          "2017": ""
        },
        "countryName": "México",
        "countryCode": "MEX",
        "indicatorName": "Prevalencia de anemia entre mujeres no embarazadas (% de mujeres entre 15-49 años)",
        "indicatorCode": "SH.ANM.NPRG.ZS"
      },
      {
        "data": {
          "2010": 15.8,
          "2011": 15.2,
          "2012": 14.7,
          "2013": 14.4,
          "2014": 14.3,
          "2015": 14.4,
          "2016": 14.6,
          "2017": ""
        },
        "countryName": "México",
        "countryCode": "MEX",
        "indicatorName": "Prevalencia de anemia entre mujeres en edad fértil (% de mujeres de entre 15 y 49 años)",
        "indicatorCode": "SH.ANM.ALLW.ZS"
      }
    ]
  }
};

describe("function filter", () => {
  it("is a function", () => {
    expect(typeof window.data.userChoiceMap).toBe("function");
  });

  it("filter indicator", () => {
    expect(window.data.userChoiceMap(
      ["PER", "MEX"],
      worldBankFake,
      "SH.ANM.ALLW.ZS"
    )).toEqual([[], [
      {
        "data": {
          "2010": 15.8,
          "2011": 15.2,
          "2012": 14.7,
          "2013": 14.4,
          "2014": 14.3,
          "2015": 14.4,
          "2016": 14.6,
          "2017": ""
        },
        "countryName": "México",
        "countryCode": "MEX",
        "indicatorName": "Prevalencia de anemia entre mujeres en edad fértil (% de mujeres de entre 15 y 49 años)",
        "indicatorCode": "SH.ANM.ALLW.ZS"
      }
    ]]);
  });
});

describe("function average", () => {
  it("is a function", () => {
    expect(typeof window.data.average).toBe("function");
  });

  it("average calculation", () => {
    expect(window.data.average(
      [
        [35.7182006835938, 35.2925987243652, 35.3931999206543],
        [45.6665992736816, 35.907398223877, 36.1731986999512]
      ]
    )).toEqual([35.46799977620443, 39.24906539916993]);
  });
});

// describe("function taking values from array", () => {
//   it("is a function", () => {
//     expect(typeof window.data.takingValueFromArray).toBe("function");
//   });
// });