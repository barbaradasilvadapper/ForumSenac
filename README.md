# Fórum Online sobre Intervenções - README

Este é o repositório do projeto do Fórum Online sobre Intervenções, desenvolvido pelos alunos do 3º ano do EM Senac São Leopoldo, com o objetivo de criar um espaço seguro de debate sobre intervenções municipais, estaduais ou federais para solucionar situações-problema. O tema central do projeto é o posicionamento de trabalhadores marginalizados no mundo do trabalho. O projeto visa explorar as competências e habilidades em diversas áreas, além de abordar a 5ª competência da redação do ENEM.

## Visão Geral do Projeto

O projeto consiste em um fórum online onde os usuários podem se cadastrar, fazer login e participar de discussões sobre intervenções relacionadas a problemas sociais. Os usuários podem postar no feed, interagir com as postagens de outros usuários e utilizar APIs externas para se autenticar e realizar operações de CRUD.

## Funcionalidades Principais

- Cadastro de Usuários: Os usuários podem criar uma conta fornecendo informações básicas, como nome, email e senha. Esses dados serão armazenados em um banco de dados PostgreSQL.
- Login de Usuários: Os usuários cadastrados podem fazer login no fórum usando suas credenciais.
- Feed e Postagens: Os usuários podem criar postagens no feed, compartilhando suas intervenções e soluções para situações-problema. Eles também podem visualizar, comentar e interagir com as postagens de outros usuários.
- Interação de APIs para Cadastro/Login: O projeto utiliza APIs externas para fornecer um espaço seguro de debate. Essas APIs permitem a interação entre os usuários e garantem a autenticação segura.
- Interação de APIs CRUD: Além das operações básicas de cadastro e login, as APIs também permitem a realização de operações CRUD (Create, Read, Update, Delete) nas postagens do fórum.

## Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- Front-end: ReactJS e Styled-components
- Back-end: NodeJS
- Banco de Dados: PostgreSQL
- Controle de Versão: Git e GitHub

## Estrutura do Projeto

O projeto está organizado em duas partes principais: front-end e back-end.

- A pasta `frontend` contém o código do front-end, desenvolvido utilizando ReactJS e Styled-components. Aqui estão todas as telas, componentes e estilos relacionados à interface do fórum.
- A pasta `backend` contém o código do back-end, desenvolvido utilizando NodeJS. Aqui estão as APIs responsáveis por lidar com o cadastro, login e interações do fórum.

## Configuração do Ambiente

Para configurar o ambiente de desenvolvimento e executar o projeto, siga as instruções abaixo:

1. Certifique-se de ter o NodeJS instalado em sua máquina.
2. Clone este repositório para o seu ambiente local.
3. Navegue até a pasta `frontend` e execute o seguinte comando para instalar as dependências do front-end:

   ```
   npm install
   ```

4. Em seguida, execute o comando abaixo para iniciar o servidor de desenvolvimento do front-end:

   ```
   npm start
   ```

5. Navegue até a pasta `backend` e execute o seguinte comando para instalar as dependências do back-end:

   ```
   npm install
   ```

6. Em seguida, execute o comando abaixo para iniciar o servidor de desenvolvimento do back-end:

   ```
   npm start
   ```

Certifique-se de que as configurações do banco de dados estejam corretas no back-end para garantir a funcionalidade adequada.

## Contribuição

Se você deseja contribuir para o projeto, siga as diretrizes abaixo:

1. Crie um fork deste repositório e clone-o para o seu ambiente local.
2. Crie uma branch para a sua feature ou correção de bug: `git checkout -b minha-feature`.
3. Faça as alterações necessárias e faça commit das suas mudanças: `git commit -m 'Minha nova feature'`.
4. Envie suas alterações para o repositório remoto: `git push origin minha-feature`.
5. Abra um pull request no GitHub e descreva suas alterações em detalhes.

## Equipe

O projeto foi desenvolvido pelos alunos do 3º ano sob a orientação dos professores responsáveis pelo projeto.

- Aluno 1: [Bárbara Dapper](https://github.com/aluno1)
- Aluno 2: [Bernardo Haisser](https://github.com/aluno2)
- Aluno 3: [Gabriela Munari](https://github.com/aluno3)
- Aluno 4: [Julia Yume](https://github.com/juliayume)
