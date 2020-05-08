const express = require('express')
const router = express.Router()
const avaliacao_controller = require('../controllers/cartao.controller')

router.get('/routetest', (req, res, next) => {
    avaliacao_controller.test(req, res)
}); //rota de teste
router.get('/:id', (req, res, next) => {
    avaliacao_controller.get(req, res)
});
router.delete('/delete/:id', (req, res, next) => {
    avaliacao_controller.delete(req, res)
});
router.put('/update/:id', (req, res, next) => {
    avaliacao_controller.put(req, res)
});
router.post('/create', async(req, res, next) => {
    console.log('BODY', req.body)
    await avaliacao_controller.create(req, res)
});
module.exports = router;