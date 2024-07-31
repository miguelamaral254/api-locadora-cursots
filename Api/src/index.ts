import express from 'express';
import AppDataSource from './data-source';
import router from './routes/index'; 

const app = express();
const port = 3000;

app.use(express.json());

// Inicializando a conexão com o banco de dados
AppDataSource.initialize()
  .then(() => {
    console.log('Connected to the database');

    // Usando o roteador para definir as rotas
    app.use(router); // Prefixo '/api' para as rotas

    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch((error: any) => {
    console.error('Error connecting to the database', error);
  });
