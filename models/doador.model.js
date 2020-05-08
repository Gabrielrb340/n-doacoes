const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let DoadorSchema = new Schema({
    Nome: { type: String, required: true },
    CPF: { type: String, required: true },
    Email: { type: String, required: true },
    Senha: { type: String, required: true },
    Telefone: { type: String, required: true },
    Endereco: { type: String, required: true },
    TipoUsu: { type: String, required: true },
    Data_Nascimento: { type: String, required: true },
    Genero: { type: String, required: true },
    Cartoes: []
});
// Exportar o modelo
module.exports = mongoose.model('Doador', DoadorSchema);