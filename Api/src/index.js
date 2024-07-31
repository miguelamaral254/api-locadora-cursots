"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_source_1 = __importDefault(require("./data-source"));
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
// Inicializando a conexão com o banco de dados
data_source_1.default.initialize()
    .then(() => {
    console.log('Connected to the database');
    // Usando o roteador para definir as rotas
    app.use(index_1.default); // Prefixo '/api' para as rotas
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
})
    .catch((error) => {
    console.error('Error connecting to the database', error);
});
