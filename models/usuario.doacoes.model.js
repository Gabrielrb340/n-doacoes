const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let UsuarioDoacaoSchema = new Schema({
    NotaAvaliacao: { type: Number, required: true },
    Descricao: { type: String },
    Quantidade: { type: Number, required: true },
    DescricaoLista: { type: Number, required: true },
    Usuario: { type: Number, required: true }
});
// Exportar o modelo
module.exports = mongoose.model('UsuarioDoacao', UsuarioDoacaoSchema);