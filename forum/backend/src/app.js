// Módulo de configuração da webapi, módulo de aplicação

// Importar o pacote express (servidor)
const express = require('express');
// Responsável por lidar com requisições externas
const cors = require('cors');

// Importar as rotas para serem executadas na aplicação
const userRouter = require('./routes/usersRouter');
const loginRouter = require('./routes/loginRouter');
const postRouter = require('./routes/postRouter');
const postDetailRouter = require('./routes/postDetailRouter');
const tagRouter = require('./routes/tagRouter');
const commentRouter = require('./routes/commentRouter');

// Importar o pacote dotenv, gerenciador de variáveis de ambiente
const dotenv = require('dotenv').config();

// Instanciar o express na variável app
const app = express();

// Habilitar o recebimento de requests em formato JSON
app.use(express.json());
// Habilitar o recebimento de requests em formato JSON
app.use(cors())

// Habilitar as rotas na aplicação
app.use('/api', userRouter);
app.use('/api/auth', loginRouter);
app.use('/api/post', postRouter);
app.use('/api/post', postDetailRouter);
app.use('/api/tag', tagRouter);
app.use('/api/comment', commentRouter);

// Setar a porta do servidor, a parir do arquivo .env
app.set('port', process.env.PORT || 1903);

module.exports = app;
 