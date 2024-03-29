const express = require('express')
const router = express.Router()
const dadosBancarios_controller = require('../controllers/dados.bancarios.controller')

router.get('/routetest', (req, res, next) => {
    dadosBancarios_controller.test(req, res)
}); //rota de teste
router.get('/:id', (req, res, next) => {
    dadosBancarios_controller.get(req, res)
});
router.delete('/delete/:id', (req, res, next) => {
    dadosBancarios_controller.delete(req, res)
});
router.put('/update/:id', (req, res, next) => {
    dadosBancarios_controller.put(req, res)
});
router.post('/create', async(req, res, next) => {
    console.log('BODY', req.body)
    await dadosBancarios_controller.create(req, res)
});
module.exports = router;