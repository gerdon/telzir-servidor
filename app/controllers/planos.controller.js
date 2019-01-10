let valorComPlano;
let valorSemPlano;

/**
 * Calcula o valor das ligações, dado a origem, o destino, o plano e o tempo gasto em ligações.
 * Para cada minuto que ultrapassar a cobertura do plano é acrescido 10% no valor do minuto da ligação.
 * O cálculo do valor para o plano é desconsiderado o valor do plano no total
 * 
 * @param {*} origem 
 * @param {*} destino 
 * @param {*} tempo 
 * @param {*} plano 
 */
function calcularLigacao(origem, destino, tempo, plano) {
    let localizacao = origem + destino;
    let valorMinuto;
    valorComPlano = 0;
    valorSemPlano = 0;

    switch (localizacao) {
        case '011016':
            valorMinuto = 1.90;
            calcularValorPlano(valorMinuto, tempo, plano);
            break;
        case '011017':
            valorMinuto = 1.70;
            calcularValorPlano(valorMinuto, tempo, plano);
            break;
        case '011018':
            valorMinuto = 0.90;
            calcularValorPlano(valorMinuto, tempo, plano);
            break;
        case '016011':
            valorMinuto = 2.90;
            calcularValorPlano(valorMinuto, tempo, plano);
            break;
        case '017011':
            valorMinuto = 2.70;
            calcularValorPlano(valorMinuto, tempo, plano);
            break;
        case '018011':
            valorMinuto = 1.90;
            calcularValorPlano(valorMinuto, tempo, plano);
            break;
        default:
            return "Para efeito de cálculo é necessário que a origem e o destino específicados sejam diferentes"
    }

    return {
        "valorComPlano": inteiroParaMoeda(valorComPlano),
        "valorSemPlano": inteiroParaMoeda(valorSemPlano)
    };
}

/**
 * Calcula o valor das ligações utilizando o plano e sem o plano
 * 
 * @param {*} valorMinuto   Valor cobrado por minuto falado
 * @param {*} tempo         Tempo de uso
 * @param {*} plano         Plano escolhido
 */
function calcularValorPlano(valorMinuto, tempo, plano) {
    valorSemPlano = tempo * valorMinuto;

    if(parseInt(tempo) > parseInt(plano)) {
        valorComPlano = (tempo - plano) * (valorMinuto + (valorMinuto * 0.1));
    }
}

/**
 * Converte números inteiros em valores monetários
 * 
 * @param {*} valorInteiro 
 */
function inteiroParaMoeda(valorInteiro) {
    let formatado = "R$ " + valorInteiro.toFixed(2).replace(".", ",");
    return formatado;
}

module.exports = {calcularLigacao};