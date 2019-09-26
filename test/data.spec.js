require("../src/data.js");

describe("funcao filtro", () => {
  it("is a function", () => {
    expect(typeof window.data.userChoiceMap).toBe("function");
  });

  it("returns `Deu certo :D`", () => {
    expect(window.data.userChoiceMap("Deu certo :D")).toEqual({"filtro": "Deu certo :D"});
  });
});

