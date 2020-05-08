const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let AvaliacaoSchema = new Schema({
    NotaAvaliacao: { type: Number, required: true },
    Descricao: { type: String },
});
// Exportar o modelo
module.exports = mongoose.model('Avaliacao', AvaliacaoSchema);