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
import { 
  getAllCustomers, 
  getCustomerById, 
  createCustomer, 
  updateCustomer, 
  deleteCustomer 
} from '../controllers/CustomerController';
const router = Router();

// Genre 
router.get('/genres', getAllGenres);
router.get('/genres/:id', getGenreById);
router.post('/genres', createGenre);
router.put('/genres/:id', updateGenre);
router.delete('/genres/:id', deleteGenre);

// Movie 
router.get('/movies', getAllMovies);
router.get('/movies/:id', getMovieById);
router.post('/movies', createMovie);
router.put('/movies/:id', updateMovie);
router.delete('/movies/:id', deleteMovie);

// Rental 
router.get('/rentals', getAllRentals);
router.get('/rentals/:id', getRentalById);
router.post('/rentals', createRental);
router.put('/rentals/:id', updateRental);
router.delete('/rentals/:id', deleteRental);
// Customer
router.get('/customers', getAllCustomers);
router.get('/customers/:id', getCustomerById);
router.post('/customers', createCustomer);
router.put('/customers/:id', updateCustomer);
router.delete('/customers/:id', deleteCustomer);
export default router;
