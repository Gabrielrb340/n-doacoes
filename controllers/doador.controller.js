var Doador = require('../models/doador.model');
var crypto = require('crypto');
exports.test = (req, res) => {
    res.send('Working');
}
exports.create = async function(req, res) {
    let aval = new Doador({
        Nome: req.body.nome,
        CPF: req.body.cpf,
        Email: req.body.email,
        Senha: crypto.createHash('md5').update(req.body.senha).digest("hex"),
        Telefone: req.body.telefone,
        Endereco: req.body.endereco,
        TipoUsu: req.body.tipoUsu,
        Data_Nascimento: req.body.dataNascimento,
        Genero: req.body.genero,
        Cartoes: req.body.cartoes,
    });
    aval.save(function(err) {
        if (err) {
            return err;
        }
        res.send("Registo de doador criado com sucesso")
    })
};

exports.get = function(req, res) {
    Doador.findById(req.params.id, function(err, aval) {
        if (err) return next(err);
        console.log('doador get', aval)
        res.send(aval);
    })
};
exports.delete = function(req, res) {
    Doador.findOneAndDelete(req.params.id, function(err, aval) {
        if (err) { console.log("ERRO", err); return err };
        console.log('doador delete')
        res.send(aval);
    })
};
exports.put = (req, res) => {
    console.log('REQ', req.body)
    Doador.findByIdAndUpdate(
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