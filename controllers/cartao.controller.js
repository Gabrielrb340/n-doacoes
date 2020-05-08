var Cartao = require('../models/cartao.model');
exports.test = (req, res) => {
    res.send('Working');
}
exports.create = async function(req, res) {
    let aval = new Cartao({
        Nome: req.body.nome,
        NumCard: req.body.numCard,
        NomeCartao: req.body.nomeCartao,
        DataValidade: req.body.dataValidade
    });
    aval.save(function(err) {
        if (err) {
            return err;
        }
        res.send("Registo de cartão de credito criado com sucesso")
    })
};

exports.get = function(req, res) {
    Cartao.findById(req.params.id, function(err, aval) {
        if (err) return next(err);
        console.log('cartao get', aval)
        res.send(aval);
    })
};
exports.delete = function(req, res) {
    Cartao.findOneAndDelete(req.params.id, function(err, aval) {
        if (err) { console.log("ERRO", err); return err };
        console.log('cartao delete')
        res.send("Cartão de credito Deletado com sucesso!");
    })
};
exports.put = (req, res) => {
    console.log('REQ', req.body)
    Cartao.findByIdAndUpdate(
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