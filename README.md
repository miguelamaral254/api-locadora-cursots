Claro, aqui está o README atualizado com as instruções corretas para configurar o `ormconfig.json`:

---

# API Locadora

Este projeto é uma API para gerenciar uma locadora de filmes, incluindo funcionalidades para gerenciar filmes, gêneros, clientes e locações. A API é desenvolvida com TypeScript, Node.js, e TypeORM, utilizando MySQL como banco de dados.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no lado do servidor.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática.
- **TypeORM**: ORM (Object-Relational Mapper) para TypeScript e JavaScript.
- **MySQL**: Sistema de gerenciamento de banco de dados relacional.
- **Express**: Framework para construção de APIs em Node.js.

## Configuração do Projeto

### Pré-requisitos

Antes de iniciar o projeto, certifique-se de que você tem os seguintes softwares instalados:

- **Node.js** (versão 14.x ou superior)
- **MySQL** (versão 8.0 ou superior)

### Instalação

1. **Clone o Repositório**

   Clone o repositório para sua máquina local:
   ```bash
   git clone https://github.com/seu-usuario/api-locadora.git
   cd api-locadora
   ```

2. **Instale as Dependências**

   Navegue até o diretório do projeto e instale as dependências necessárias:
   ```bash
   npm install
   ```

3. **Configure o Banco de Dados**

   Crie um arquivo `ormconfig.json` no diretório raiz do projeto e adicione as seguintes configurações:

   ```json
   {
     "type": "mysql",
     "host": "sua.host",
     "port": 3306,
     "username": "seu.username",
     "password": "sua.senha",
     "database": "sua.database",
     "entities": ["src/models/*.ts"],
     "synchronize": true,
     "logging": false
   }
   ```

   **Certifique-se de ajustar os valores para `host`, `port`, `username`, `password`, e `database` conforme necessário para corresponder ao seu ambiente MySQL.**

4. **Inicie o Servidor**

   Após configurar o banco de dados, você pode iniciar o servidor:
   ```bash
   npm start
   ```

   O servidor estará rodando por padrão em `http://localhost:3000`.

## Rotas da API

Aqui estão algumas das rotas disponíveis na API:

### **Gêneros**

- `GET /genres` - Lista todos os gêneros.
- `GET /genres/:id` - Obtém um gênero específico pelo ID.
- `POST /genres` - Adiciona um novo gênero.
- `PUT /genres/:id` - Atualiza um gênero existente pelo ID.
- `DELETE /genres/:id` - Remove um gênero pelo ID.

### **Filmes**

- `GET /movies` - Lista todos os filmes.
- `GET /movies/:id` - Obtém um filme específico pelo ID.
- `POST /movies` - Adiciona um novo filme.
- `PUT /movies/:id` - Atualiza um filme existente pelo ID.
- `DELETE /movies/:id` - Remove um filme pelo ID.

### **Locações**

- `GET /rentals` - Lista todas as locações.
- `GET /rentals/:id` - Obtém uma locação específica pelo ID.
- `POST /rentals` - Adiciona uma nova locação.
- `PUT /rentals/:id` - Atualiza uma locação existente pelo ID.
- `DELETE /rentals/:id` - Remove uma locação pelo ID.

### **Clientes**

- `GET /customers` - Lista todos os clientes.
- `GET /customers/:id` - Obtém um cliente específico pelo ID.
- `POST /customers` - Adiciona um novo cliente.
- `PUT /customers/:id` - Atualiza um cliente existente pelo ID.
- `DELETE /customers/:id` - Remove um cliente pelo ID.

## Contribuição

Se você quiser contribuir para o projeto, fique à vontade para fazer um fork do repositório e enviar pull requests. Qualquer contribuição é bem-vinda!

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).

---

Sinta-se à vontade para ajustar qualquer parte do README conforme necessário para corresponder às especificidades do seu projeto.
