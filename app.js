var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const avaliacao = require('./routes/avaliacao.route')
const campanha = require('./routes/campanha.route')
const cartao = require('./routes/cartao.route')
const dadosBancarios = require('./routes/dados.bancarios.route')
const doador = require('./routes/doador.route')
const ong = require('./routes/ong.route')
const usuarioDoacoes = require('./routes/usuario.doacoes.route')
const usuario = require('./routes/usuario.route')

var app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/doacoes', { useNewUrlParser: true, useUnifiedTopology: true });
const test = mongoose.model('test', { name: String });
const teste = new test({ name: 'teste' });

//rotas

teste.save().then(() => console.log('working'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/avaliacao', avaliacao);
app.use('/campanha', campanha);
app.use('/cartao', cartao);
app.use('/dadosBancario', dadosBancarios);
app.use('/doador', doador);
app.use('/ong', ong);
app.use('/usuarioDoacao', usuarioDoacoes);
app.use('/usuario', usuario);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});




app.listen(4201, () => { console.log('Aplicação rodando em localhost:4201') })
module.exports = app;