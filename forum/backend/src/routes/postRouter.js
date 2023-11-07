// Importar o modulo de Router do express
const { Router } = require('express');
// Instanciar o Router na variável router
const router = Router();
// Importar as funções (processamento da requisição) do controller
const { listPost, createPost } = require('../controllers/postController');

router.get('/post', listPost);
router.get('/post/create', createPost);

module.exports = router;