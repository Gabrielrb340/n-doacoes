const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let CampanhaSchema = new Schema({
    NotaAvaliacao: { type: Number, required: true },
    Descricao: { type: String },
    Quantidade: { type: Number, required: true },
    DescricaoCampanha: { type: Number, required: true },
    NomeParceiro: { type: Number, required: true },
    Usuario: { type: Number, required: true }
});
// Exportar o modelo
module.exports = mongoose.model('Campanha', CampanhaSchema);