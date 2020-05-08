const express = require('express')
const router = express.Router()
const campanha_controller = require('../controllers/campanha.controller')

router.get('/routetest', (req, res, next) => {
    campanha_controller.test(req, res)
}); //rota de teste
router.get('/:id', (req, res, next) => {
    campanha_controller.get(req, res)
});
router.delete('/delete/:id', (req, res, next) => {
    campanha_controller.delete(req, res)
});
router.put('/update/:id', (req, res, next) => {
    campanha_controller.put(req, res)
});
router.post('/create', async(req, res, next) => {
    console.log('BODY', req.body)
    await campanha_controller.create(req, res)
});
module.exports = router;