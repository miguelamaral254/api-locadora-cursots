"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GenreController_1 = require("../controllers/GenreController");
const MovieController_1 = require("../controllers/MovieController");
const RentalController_1 = require("../controllers/RentalController");
const CustomerController_1 = require("../controllers/CustomerController");
const router = (0, express_1.Router)();
// Genre 
router.get('/genres', GenreController_1.getAllGenres);
router.get('/genres/:id', GenreController_1.getGenreById);
router.post('/genres', GenreController_1.createGenre);
router.put('/genres/:id', GenreController_1.updateGenre);
router.delete('/genres/:id', GenreController_1.deleteGenre);
// Movie 
router.get('/movies', MovieController_1.getAllMovies);
router.get('/movies/:id', MovieController_1.getMovieById);
router.post('/movies', MovieController_1.createMovie);
router.put('/movies/:id', MovieController_1.updateMovie);
router.delete('/movies/:id', MovieController_1.deleteMovie);
// Rental 
router.get('/rentals', RentalController_1.getAllRentals);
router.get('/rentals/:id', RentalController_1.getRentalById);
router.post('/rentals', RentalController_1.createRental);
router.put('/rentals/:id', RentalController_1.updateRental);
router.delete('/rentals/:id', RentalController_1.deleteRental);
// Customer
router.get('/customers', CustomerController_1.getAllCustomers);
router.get('/customers/:id', CustomerController_1.getCustomerById);
router.post('/customers', CustomerController_1.createCustomer);
router.put('/customers/:id', CustomerController_1.updateCustomer);
router.delete('/customers/:id', CustomerController_1.deleteCustomer);
exports.default = router;
