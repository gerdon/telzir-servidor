const router = require('../../config/server').server;
const planos = require('../controllers/planos.controller');
const path = require('path');

/**
 * Submete os dados da página de cálculo
 */
router.post('/calcularLigacao', (req, res) => {
    let valorCalculado = planos.calcularLigacao(
        req.body.origem, 
        req.body.destino, 
        req.body.tempo, 
        req.body.plano
    );

    if(valorCalculado.valorComPlano === undefined || valorCalculado.valorSemPlano === undefined) {
        res.send(
            `${ valorCalculado }`
        );
    } else {
        res.send(
            `<p>Valor com o plano: ${ valorCalculado.valorComPlano } </p>` +
            `<p>Valor sem o plano: ${ valorCalculado.valorSemPlano } </p>`
        );    
    }
});

/**
 * Renderiza a página de cálculo das ligações
 */
router.get('/calcularLigacao', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'calcularPlano.view.html'));
});

module.exports = router;