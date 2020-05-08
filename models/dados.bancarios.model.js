const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let DadosBancariosSchema = new Schema({
    Banco: { type: Number, required: true },
    Conta: { type: Number, required: true },
    Agencia: { type: Number, required: true },
    TipoConta: { type: String, required: true }
});
// Exportar o modelo
module.exports = mongoose.model('DadosBancarios', DadosBancariosSchema);