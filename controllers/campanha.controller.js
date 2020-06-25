var Campanha = require('../models/campanha.model');
exports.create = async function(req, res) {
    let aval = new Campanha({
        NotaAvaliacao: req.body.NotaAvaliacao,
        Descricao: req.body.Descricao,
        Quantidade: req.body.Quantidade,
        DescricaoCampanha: req.body.DescricaoCampanha,
        NomeParceiro: req.body.NomeParceiro,
        Usuario: req.body.Usuario,
    });
    aval.save(function(err) {
        if (err) {
            return err;
        }
        res.send("Registo de avaliação criado com sucesso")
    })
};

exports.get = function(req, res) {
    Campanha.findById(req.params.id, function(err, aval) {
        if (err) return next(err);
        console.log('campanha get', aval)
        res.send(aval);
    })
};
exports.delete = function(req, res) {
    Campanha.findOneAndDelete(req.params.id, function(err, aval) {
        if (err) { console.log("ERRO", err); return err };
        console.log('Avaliaçao delete')
        res.send(aval);
    })
};
exports.put = (req, res) => {
    console.log('REQ', req.body)
    Campanha.findByIdAndUpdate(
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