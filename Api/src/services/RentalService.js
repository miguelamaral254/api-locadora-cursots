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
const data_source_1 = __importDefault(require("../data-source")); // Certifique-se de que o caminho está correto
const Rental_1 = require("../models/Rental");
const getRentalRepository = () => data_source_1.default.getRepository(Rental_1.Rental);
const getAllRentals = () => __awaiter(void 0, void 0, void 0, function* () {
    const rentalRepository = getRentalRepository();
    return yield rentalRepository.find({ relations: ['movie'] });
});
exports.getAllRentals = getAllRentals;
const getRentalById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const rentalRepository = getRentalRepository();
    return yield rentalRepository.findOne({ where: { id }, relations: ['movie'] });
});
exports.getRentalById = getRentalById;
const createRental = (movieId, clientId, rentalDate, returnDate) => __awaiter(void 0, void 0, void 0, function* () {
    const rentalRepository = getRentalRepository();
    const rental = new Rental_1.Rental();
    rental.movie = { id: movieId }; // Temporário para associar filme
    rental.clientId = clientId;
    rental.rentalDate = rentalDate;
    rental.returnDate = returnDate;
    return yield rentalRepository.save(rental);
});
exports.createRental = createRental;
const updateRental = (id, movieId, clientId, rentalDate, returnDate) => __awaiter(void 0, void 0, void 0, function* () {
    const rentalRepository = getRentalRepository();
    const rental = yield rentalRepository.findOne({ where: { id } });
    if (!rental)
        return null;
    rental.movie = { id: movieId };
    rental.clientId = clientId;
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
