const express = require('express')
const router = express.Router()
const ong_controller = require('../controllers/ong.controller')

router.get('/routetest', (req, res, next) => {
    ong_controller.test(req, res)
}); //rota de teste
router.get('/:id', (req, res, next) => {
    ong_controller.get(req, res)
});
router.delete('/delete/:id', (req, res, next) => {
    ong_controller.delete(req, res)
});
router.put('/update/:id', (req, res, next) => {
    ong_controller.put(req, res)
});
router.post('/create', async(req, res, next) => {
    console.log('BODY', req.body)
    await ong_controller.create(req, res)
});
module.exports = router;