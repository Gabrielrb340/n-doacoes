const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let CartaoSchema = new Schema({
    Nome: { type: String, required: true },
    NumCard: { type: Number, required: true },
    NomeCartao: { type: String, required: true },
    DataValidade: { type: Date, required: true }
});
// Exportar o modelo
module.exports = mongoose.model('Cartao', CartaoSchema);