// Importar o modulo de Router do express
const { Router } = require('express');
// Instanciar o Router na variável router
const router = Router();
// Importar as funções (processamento da requisição) do controller
const { detailPost } = require('../controllers/postDetailController');

router.post('/post/detail', detailPost);

module.exports = router;