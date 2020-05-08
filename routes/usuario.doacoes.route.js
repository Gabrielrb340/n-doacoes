const express = require('express')
const router = express.Router()
const usuarioDoacao_controller = require('../controllers/usuario.doacoes.controller')

router.get('/routetest', (req, res, next) => {
    usuarioDoacao_controller.test(req, res)
}); //rota de teste
router.get('/:id', (req, res, next) => {
    usuarioDoacao_controller.get(req, res)
});
router.delete('/delete/:id', (req, res, next) => {
    usuarioDoacao_controller.delete(req, res)
});
router.put('/update/:id', (req, res, next) => {
    usuarioDoacao_controller.put(req, res)
});
router.post('/create', async(req, res, next) => {
    console.log('BODY', req.body)
    await usuarioDoacao_controller.create(req, res)
});
module.exports = router;