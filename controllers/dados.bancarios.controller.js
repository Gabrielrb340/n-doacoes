var DadosBancarios = require('../models/dados.bancarios.model');
exports.test = (req, res) => {
    res.send('Working');
}
exports.create = async function(req, res) {
    let aval = new DadosBancarios({
        Banco: req.body.banco,
        Conta: req.body.conta,
        Agencia: req.body.agencia,
        TipoConta: req.body.tipoConta
    });
    aval.save(function(err) {
        if (err) {
            return err;
        }
        res.send("Registo de dados bancarios criado com sucesso")
    })
};

exports.get = function(req, res) {
    DadosBancarios.findById(req.params.id, function(err, aval) {
        if (err) return next(err);
        console.log('dados bancarios get', aval)
        res.send(aval);
    })
};
exports.delete = function(req, res) {
    DadosBancarios.findOneAndDelete(req.params.id, function(err, aval) {
        if (err) { console.log("ERRO", err); return err };
        console.log('dados bancarios delete')
        res.send(aval);
    })
};
exports.put = (req, res) => {
    console.log('REQ', req.body)
    DadosBancarios.findByIdAndUpdate(
        // the id of the item to find
        req.params.id, req.body,

        function(err, result) {

            if (err) {
                res.send(err)
            } else {
                res.send(result)
            }
        })
}