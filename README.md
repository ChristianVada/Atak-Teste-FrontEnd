## Teste Atak - Frontend React
Este projeto é parte de um teste técnico que serve como a interface web para uma aplicação backend. Ele se conecta a uma API ASP.NET e interage com o sistema de autenticação JWT.

### Tecnologias Utilizadas
- **React** 18
- Vite para build e desenvolvimento
- **Axios** para requisições HTTP
- **JWT** para autenticação

### Requisitos
Para rodar este projeto, é necessário ter o **Node.js** instalado.

### Instalação e Execução
1. Clone o repositório
2. Acesse o diretório do projeto
3. Instale as dependências: ```npm install```
4. Para consumir o BackEnd em Deploy o arquivo ```api.js``` que está nesse caminho: ```src\services\api.js``` está configurado para ```https://atak-teste-backend-production.up.railway.app```, caso for rodar em LocalHost trocar para a url do servidor em questão
5. Rode o projeto: ```npm run dev```
6. Acesse o link gerado

### Observações
- Caso ocorra um problema de CORS ao tentar conectar o frontend ao backend, verifique se a URL do frontend está incluída nas políticas de CORS do backend.
- Troque também a url do arquivo ```api.js```
- Link do BackEnd: <https://github.com/ChristianVada/Atak-Teste-BackEnd>
