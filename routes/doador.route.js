const express = require('express')
const router = express.Router()
const doador_controller = require('../controllers/doador.controller')

router.get('/routetest', (req, res, next) => {
    doador_controller.test(req, res)
}); //rota de teste
router.get('/:id', (req, res, next) => {
    doador_controller.get(req, res)
});
router.delete('/delete/:id', (req, res, next) => {
    doador_controller.delete(req, res)
});
router.put('/update/:id', (req, res, next) => {
    doador_controller.put(req, res)
});
router.post('/create', async(req, res, next) => {
    console.log('BODY', req.body)
    await doador_controller.create(req, res)
});
module.exports = router;