var UsuarioDoacoes = require('../models/usuario.doacoes.model');
var crypto = require('crypto');
exports.test = (req, res) => {
    res.send('Working');
}
exports.create = async function(req, res) {
    let aval = new UsuarioDoacoes({
        NotaAvaliacao: req.body.notaAvalicao,
        Descricao: req.body.descricao,
        Quantidade: req.body.quantidade,
        DescricaoLista: req.body.descricaoLista,
        Usuario: req.body.usuario
    });
    aval.save(function(err) {
        if (err) {
            return err;
        }
        res.send("Registo de ong criado com sucesso")
    })
};

exports.get = function(req, res) {
    UsuarioDoacoes.findById(req.params.id, function(err, aval) {
        if (err) return next(err);
        console.log('ong get', aval)
        res.send(aval);
    })
};
exports.delete = function(req, res) {
    UsuarioDoacoes.findOneAndDelete(req.params.id, function(err, aval) {
        if (err) { console.log("ERRO", err); return err };
        console.log('ong delete')
        res.send(aval);
    })
};
exports.put = (req, res) => {
    console.log('REQ', req.body)
    UsuarioDoacoes.findByIdAndUpdate(
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