"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRental = exports.updateRental = exports.createRental = exports.getRentalById = exports.getAllRentals = void 0;
const data_source_1 = __importDefault(require("../data-source"));
const Rental_1 = require("../models/Rental");
const customer_1 = require("../models/customer");
const Movie_1 = require("../models/Movie");
const getRentalRepository = () => data_source_1.default.getRepository(Rental_1.Rental);
const getCustomerRepository = () => data_source_1.default.getRepository(customer_1.Customer);
const getMovieRepository = () => data_source_1.default.getRepository(Movie_1.Movie);
const getAllRentals = () => __awaiter(void 0, void 0, void 0, function* () {
    const rentalRepository = getRentalRepository();
    return yield rentalRepository.find({ relations: ['movie', 'customer'] });
});
exports.getAllRentals = getAllRentals;
const getRentalById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const rentalRepository = getRentalRepository();
    return yield rentalRepository.findOne({ where: { id }, relations: ['movie', 'customer'] });
});
exports.getRentalById = getRentalById;
const createRental = (movieId, customerId, rentalDate, returnDate) => __awaiter(void 0, void 0, void 0, function* () {
    const rentalRepository = getRentalRepository();
    const movieRepository = getMovieRepository();
    const customerRepository = getCustomerRepository();
    const movie = yield movieRepository.findOne({ where: { id: movieId } });
    const customer = yield customerRepository.findOne({ where: { id: customerId } });
    if (!movie || !customer) {
        throw new Error('Movie or Customer not found');
    }
    const rental = new Rental_1.Rental();
    rental.movie = movie;
    rental.customer = customer;
    rental.rentalDate = rentalDate;
    rental.returnDate = returnDate;
    return yield rentalRepository.save(rental);
});
exports.createRental = createRental;
const updateRental = (id, movieId, customerId, rentalDate, returnDate) => __awaiter(void 0, void 0, void 0, function* () {
    const rentalRepository = getRentalRepository();
    const movieRepository = getMovieRepository();
    const customerRepository = getCustomerRepository();
    const rental = yield rentalRepository.findOne({ where: { id } });
    const movie = yield movieRepository.findOne({ where: { id: movieId } });
    const customer = yield customerRepository.findOne({ where: { id: customerId } });
    if (!rental || !movie || !customer) {
        return null;
    }
    rental.movie = movie;
    rental.customer = customer;
    rental.rentalDate = rentalDate;
    rental.returnDate = returnDate;
    return yield rentalRepository.save(rental);
});
exports.updateRental = updateRental;
const deleteRental = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const rentalRepository = getRentalRepository();
    return yield rentalRepository.delete(id);
});
exports.deleteRental = deleteRental;
