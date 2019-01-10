const router = require('../../config/server').server;
const planos = require('../controllers/planos.controller');

router.post('/calcularLigacao', (req, res) => {
    let valorCalculado = planos.calcularLigacao(
        req.body.origem, 
        req.body.destino, 
        req.body.tempo, 
        req.body.plano
    );
    res.send(valorCalculado);
});

module.exports = router;