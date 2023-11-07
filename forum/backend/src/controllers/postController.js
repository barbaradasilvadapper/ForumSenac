// Importa as configurações do banco de dados na variável connection
const connection = require('../config/db');
// Importar o pacote dotenv, gerenciador de variáveis de ambiente
require("dotenv").config();

// Buscar posts
async function listPost(request, response) {
    const query = "SELECT P.PostID, U.nome AS UserName, U.photo AS UserPhoto, P.PostName, P.PostDescription, P.Photo AS PostPhoto, T1.TagName AS TagName1, T2.TagName AS TagName2, T3.TagName AS TagName3, CASE WHEN TIMESTAMPDIFF(SECOND, P.Date, NOW()) < 3600 THEN CONCAT(TIMESTAMPDIFF(MINUTE, P.Date, NOW()), ' minutos') WHEN TIMESTAMPDIFF(SECOND, P.Date, NOW()) >= 86400 THEN CONCAT(TIMESTAMPDIFF(DAY, P.Date, NOW()), ' dias') ELSE CONCAT(TIMESTAMPDIFF(HOUR, P.Date, NOW()), ' horas') END AS PublishedTime FROM post AS P INNER JOIN usuarios AS U ON U.id = P.UserID LEFT JOIN tag AS T1 ON T1.TagID = P.Tag1 LEFT JOIN tag AS T2 ON T2.TagID = P.Tag2 LEFT JOIN tag AS T3 ON T3.TagID = P.Tag3 ORDER BY P.Date DESC;";

    connection.query(query, (error, results) => {
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

// Criar posts
async function createPost(request, response) {
    const tagName1 = request.body.Tag1;
    const getTagID1Query = 'SELECT TagID FROM tag WHERE TagName = ?';

    connection.query(getTagID1Query, [tagName1], (err, res) => {
        try {
            if (res[0].TagID === 0) {
                response.status(400).json({
                    success: false,
                    message: 'TagID não encontrado'
                });
            } else {
                const tagID1 = res[0].TagID;

                const tagName2 = request.body.Tag2;
                const getTagID2Query = 'SELECT TagID FROM tag WHERE TagName = ?';
            
                connection.query(getTagID2Query, [tagName2], (err, res) => {
                    try {
                        if (res[0].TagID === 0) {
                            response.status(400).json({
                                success: false,
                                message: 'TagID não encontrada'
                            });
                        } else {
                            const tagID2 = res[0].TagID;

                            const tagName3 = request.body.Tag3;
                            const getTagID3Query = 'SELECT TagID FROM tag WHERE TagName = ?';
                        
                            connection.query(getTagID3Query, [tagName3], (err, res) => {
                                try {
                                    if (res[0].TagID === 0) {
                                        response.status(400).json({
                                            success: false,
                                            message: 'TagID não encontrada'
                                        });
                                    } else {
                                        const tagID3 = res[0].TagID;

                                        // Preparar o comando de execução no banco para inserir na tabela Users
                                        const query = 'INSERT INTO post(UserID, PostName, PostDescription, Tag1, Tag2, Tag3, Photo) VALUES (?, ?, ?, ?, ?, ?, ?);';
                                                        
                                        // Recuperar os dados enviados na requisição
                                        const params = [
                                            request.body.UserID,
                                            request.body.PostName,
                                            request.body.PostDescription,
                                            tagID1,
                                            tagID2,
                                            tagID3,
                                            request.body.Photo
                                        ];
                                        
                                        connection.query(query, params, (error, result) => {
                                            if (error) {
                                              console.error('Erro ao criar o post: ' + error.message);
                                              return response.status(500).json({ error: 'Erro ao criar o post' });
                                            }
                                        
                                            response.json({ message: 'Post criado com sucesso', postId: result.insertId });
                                        
                                        })
                                    }
                                } catch {
                                    response.status(500).json({
                                        success: false,
                                        message: 'Erro ao buscar o TagID3',
                                        error: err
                                })};
                        })};
                    } catch {
                        response.status(500).json({
                            success: false,
                            message: 'Erro ao buscar o TagID2',
                            error: err
                        });
                    }
                })};
        } catch {
            response.status(500).json({
                success: false,
                message: 'Erro ao buscar o TagID1',
                error: err
            });
        }
    });
}

module.exports = {
    listPost,
    createPost
}
