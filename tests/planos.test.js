const assert = require('assert');
const planos = require('../app/controllers/planos.controller');

describe("Calcular ligação", () => {
    it("calcular valores positivos", () => {
        retorno = planos.calcularLigacao("011", "016", 20, 30);
        let comPlano = retorno.valorComPlano;
        let semPlano = retorno.valorSemPlano;

        assert.equal("R$ 0,00", comPlano);
        assert.equal("R$ 38,00", semPlano);
    });

    it("calcular valores negativos", () => {
        retorno = planos.calcularLigacao("011", "016", -10, 30);

        assert.equal("Valor de tempo negativo, insira um valor válido!", retorno);
    });

    it("calcular valores negativos", () => {
        retorno = planos.calcularLigacao("011", "011", 10, 30);

        assert.equal("Para efeito de cálculo é necessário que a origem e o destino específicados sejam diferentes", retorno);
    });
})
