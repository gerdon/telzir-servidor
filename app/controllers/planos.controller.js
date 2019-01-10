
function calcularLigacao(origem, destino, tempo, plano) {
    let localizacao = origem + destino;
    let valorMinuto;
    let valorComPlano;
    let valorSemPlano;

    switch (localizacao) {
        case '011016':
            valorMinuto = 1.90;
            valorComPlano = 0;
            valorSemPlano = tempo * valorMinuto;

            if(tempo > plano) {
                valorComPlano = (tempo - plano) * (valorMinuto + (valorMinuto * 0.1));
            }

            break;
        case '011017':
            valorMinuto = 1.70;
            valorComPlano = 0;
            valorSemPlano = tempo * valorMinuto;

            if(tempo > plano) {
                valorComPlano = (tempo - plano) * (valorMinuto + (valorMinuto * 0.1));
            }

            break;
        case '011018':
            valorMinuto = 0.90;
            valorComPlano = 0;
            valorSemPlano = tempo * valorMinuto;

            if(tempo > plano) {
                valorComPlano = (tempo - plano) * (valorMinuto + (valorMinuto * 0.1));
            }

            break;
        case '016011':
            valorMinuto = 2.90;
            valorComPlano = 0;
            valorSemPlano = tempo * valorMinuto;

            if(tempo > plano) {
                valorComPlano = (tempo - plano) * (valorMinuto + (valorMinuto * 0.1));
            }

            break;
        case '017011':
            valorMinuto = 2.70;
            valorComPlano = 0;
            valorSemPlano = tempo * valorMinuto;

            if(tempo > plano) {
                valorComPlano = (tempo - plano) * (valorMinuto + (valorMinuto * 0.1));
            }

            break;
        case '018011':
            valorMinuto = 1.90;
            valorComPlano = 0;
            valorSemPlano = tempo * valorMinuto;

            if(tempo > plano) {
                valorComPlano = (tempo - plano) * (valorMinuto + (valorMinuto * 0.1));
            }

            break;
        default:
            break;
    }

    return {
        "valorComPlano": valorComPlano,
        "valorSemPlano": valorSemPlano
    };
}

module.exports = {calcularLigacao};