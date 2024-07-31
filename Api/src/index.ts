import express from 'express';
import AppDataSource from './data-source';
import router from './routes/index'; 

const app = express();
const port = 3000;

app.use(express.json());
AppDataSource.initialize()
  .then(() => {
    console.log('Connected to the database');    
    app.use(router); 
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch((error: any) => {
    console.error('Error connecting to the database', error);
  });
