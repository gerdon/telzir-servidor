const router = require('../../config/server').server;

router.get('/', (req, res) => {
    res.redirect('/calcularLigacao');
});

module.exports = router;