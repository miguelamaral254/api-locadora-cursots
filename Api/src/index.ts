import express, { Request, Response } from 'express';
import AppDataSource from './data-source'; // Importando o DataSource
import { Movie } from './models/Movie';

const app = express();
const port = 3000;

app.use(express.json());
AppDataSource.initialize().then(() => {
  
    console.log('Connected to the database');

  app.get('/movies', async (req: Request, res: Response) => {
    try {
      const movieRepository = AppDataSource.getRepository(Movie); // Usando AppDataSource para obter o repositório
      const movies = await movieRepository.find();
      res.json(movies);
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
  });

  app.get('/movies/:id', async (req: Request, res: Response) => {
    try {
      const movieRepository = AppDataSource.getRepository(Movie); 
      const movieId = parseInt(req.params.id, 10); 
      const movie = await movieRepository.findOne({ where: { id: movieId } });
      if (movie) {
        res.json(movie);
      } else {
        res.status(404).send('Movie not found');
      }
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
  });
  app.post('/movies', async (req: Request, res: Response) => {
    try {
      const { title, releaseDate } = req.body;
      if (!title || !releaseDate) {
        return res.status(400).send('Title and releaseDate are required');
      }
      const movieRepository = AppDataSource.getRepository(Movie); 
      const newMovie = movieRepository.create({ title, releaseDate });
      await movieRepository.save(newMovie);
      res.status(201).json(newMovie);
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
  });

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}).catch((error) => {
  console.error('Error connecting to the database', error);
});
