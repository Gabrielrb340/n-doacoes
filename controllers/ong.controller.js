var Ong = require('../models/ong.model');
var crypto = require('crypto');
exports.test = (req, res) => {
    res.send('Working');
}
exports.create = async function(req, res) {
    let aval = new Ong({
        Nome: req.body.nome,
        CPF: req.body.cpf,
        Email: req.body.email,
        Senha: crypto.createHash('md5').update(req.body.senha).digest("hex"),
        Telefone: req.body.telefone,
        Endereco: req.body.endereco,
        TipoUsu: req.body.tipoUsu,
        Razao_Social: req.body.razaoSocial,
        Registro_Ong: req.body.registroOng,
    });
    aval.save(function(err) {
        if (err) {
            return err;
        }
        res.send("Registo de ong criado com sucesso")
    })
};

exports.get = function(req, res) {
    Ong.findById(req.params.id, function(err, aval) {
        if (err) return next(err);
        console.log('ong get', aval)
        res.send(aval);
    })
};
exports.delete = function(req, res) {
    Ong.findOneAndDelete(req.params.id, function(err, aval) {
        if (err) { console.log("ERRO", err); return err };
        console.log('ong delete')
        res.send(aval);
    })
};
exports.put = (req, res) => {
    console.log('REQ', req.body)
    Ong.findByIdAndUpdate(
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