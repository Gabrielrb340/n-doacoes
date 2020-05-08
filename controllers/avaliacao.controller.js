var Avaliacao = require('../models/avaliacoes.model');
exports.test = (req, res) => {
    res.send('Working');
}
exports.create = async function(req, res) {
    let aval = new Avaliacao({
        NotaAvaliacao: req.body.notaAvaliacao,
        Descricao: req.body.descricao
    });
    aval.save(function(err) {
        if (err) {
            return err;
        }
        res.send("Registo de avaliação criado com sucesso")
    })
};

exports.get = function(req, res) {
    Avaliacao.findById(req.params.id, function(err, aval) {
        if (err) return next(err);
        console.log('Avaliacaoget', aval)
        res.send(aval);
    })
};
exports.delete = function(req, res) {
    Avaliacao.findOneAndDelete(req.params.id, function(err, aval) {
        if (err) { console.log("ERRO", err); return err };
        console.log('Avaliaçao delete')
        res.send(aval);
    })
};
exports.put = (req, res) => {
    console.log('REQ', req.body)
    Avaliacao.findByIdAndUpdate(
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