const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let OngSchema = new Schema({
    Nome: { type: String, required: true },
    CPF: { type: String, required: true },
    Email: { type: String, required: true },
    Senha: { type: String, required: true },
    Telefone: { type: String, required: true },
    Endereco: { type: String, required: true },
    TipoUsu: { type: String, required: true },
    Razao_Social: { type: String, required: true },
    Registro_Ong: { type: String, required: true }
});
// Exportar o modelo
module.exports = mongoose.model('Ong', OngSchema);