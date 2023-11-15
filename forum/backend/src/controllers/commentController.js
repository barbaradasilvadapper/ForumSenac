// Importa as configurações do banco de dados na variável connection
const connection = require('../config/db');
// Importar o pacote dotenv, gerenciador de variáveis de ambiente
require("dotenv").config();

// Buscar posts
async function listComment(request, response) {
    const postID = request.body.postID
    const query = "SELECT C.CommentID, C.PostID, U.nome AS UserName, C.CommentTitle, C.Comment, CASE WHEN TIMESTAMPDIFF(SECOND, C.Date, NOW()) < 3600 THEN CONCAT(TIMESTAMPDIFF(MINUTE, C.Date, NOW()), ' minutos') WHEN TIMESTAMPDIFF(SECOND, C.Date, NOW()) >= 86400 THEN CONCAT(TIMESTAMPDIFF(DAY, C.Date, NOW()), ' dias') ELSE CONCAT(TIMESTAMPDIFF(HOUR, C.Date, NOW()), ' horas') END AS PublishedTime FROM comments AS C INNER JOIN usuarios AS U ON U.id = C.UserID WHERE C.PostID = ? ORDER BY C.Date DESC;";

    connection.query(query, [postID], (error, results) => {
        try {
            if (!error) { // Se não houver erro
                response.status(200).json({
                    success: true,
                    message: 'Retorno de usuários com sucesso!',
                    data: results
                });
            } else { // Retorno com informações de erros
                response.status(400).json({
                    success: false,
                    message: `Não foi possível retornar os usuários.`,
                    query: error.sql,
                    sqlMessage: error.sqlMessage
                });
            }
        } catch (error) { // Caso aconteça qualquer erro no processo na requisição, retorna uma mensagem amigável
            response.status(500).json({
                success: false,
                message: "Ocorreu um erro. Não foi possível realizar sua requisição!",
                error: e
            });
        }
    });
}

module.exports = {
    listComment
}
