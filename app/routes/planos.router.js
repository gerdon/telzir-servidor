const router = require('../../config/server').server;
const planos = require('../controllers/planos.controller');

router.post('/calcularLigacao', (req, res) => {
    let valorCalculado = planos.calcularLigacao(req.body);
    res.send(valorCalculado);
});

module.exports = router;