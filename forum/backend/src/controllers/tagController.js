// Importa as configurações do banco de dados na variável connection
const connection = require('../config/db');
// Importar o pacote dotenv, gerenciador de variáveis de ambiente
require("dotenv").config();

// Buscar posts
async function listTag (request, response) {
    const query = "SELECT * FROM tag ORDER BY Date DESC";

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

module.exports = {
    listTag
}
