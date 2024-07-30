import { Router } from 'express';
import { 
  getAllGenres, 
  getGenreById, 
  createGenre, 
  updateGenre, 
  deleteGenre 
} from '../controllers/GenreController';

import { 
  getAllMovies, 
  getMovieById, 
  createMovie, 
  updateMovie, 
  deleteMovie 
} from '../controllers/MovieController';

import { 
  getAllRentals, 
  getRentalById, 
  createRental, 
  updateRental, 
  deleteRental 
} from '../controllers/RentalController';

const router = Router();

// Genre routes
router.get('/genres', getAllGenres);
router.get('/genres/:id', getGenreById);
router.post('/genres', createGenre);
router.put('/genres/:id', updateGenre);
router.delete('/genres/:id', deleteGenre);

// Movie routes
router.get('/movies', getAllMovies);
router.get('/movies/:id', getMovieById);
router.post('/movies', createMovie);
router.put('/movies/:id', updateMovie);
router.delete('/movies/:id', deleteMovie);

// Rental routes
router.get('/rentals', getAllRentals);
router.get('/rentals/:id', getRentalById);
router.post('/rentals', createRental);
router.put('/rentals/:id', updateRental);
router.delete('/rentals/:id', deleteRental);

export default router;
