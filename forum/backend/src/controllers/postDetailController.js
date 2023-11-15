// Importa as configurações do banco de dados na variável connection
const connection = require('../config/db');
// Importar o pacote dotenv, gerenciador de variáveis de ambiente
require("dotenv").config();

// Buscar posts
async function detailPost(request, response) {
    const postID = request.body.postID
    const query = "SELECT P.PostID, U.nome AS UserName, U.photo AS UserPhoto, P.PostName, P.PostDescription, P.Photo AS PostPhoto, T1.TagName AS TagName1, T2.TagName AS TagName2, T3.TagName AS TagName3, CASE WHEN TIMESTAMPDIFF(SECOND, P.Date, NOW()) < 3600 THEN CONCAT(TIMESTAMPDIFF(MINUTE, P.Date, NOW()), ' minutos') WHEN TIMESTAMPDIFF(SECOND, P.Date, NOW()) >= 86400 THEN CONCAT(TIMESTAMPDIFF(DAY, P.Date, NOW()), ' dias') ELSE CONCAT(TIMESTAMPDIFF(HOUR, P.Date, NOW()), ' horas') END AS PublishedTime FROM post AS P INNER JOIN usuarios AS U ON U.id = P.UserID LEFT JOIN tag AS T1 ON T1.TagID = P.Tag1 LEFT JOIN tag AS T2 ON T2.TagID = P.Tag2 LEFT JOIN tag AS T3 ON T3.TagID = P.Tag3 WHERE P.PostID = ? ORDER BY P.Date DESC;";

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
    detailPost
}
