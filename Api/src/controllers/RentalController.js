"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRental = exports.updateRental = exports.createRental = exports.getRentalById = exports.getRentals = exports.getAllRentals = void 0;
const rentalService = __importStar(require("../services/RentalService"));
const getAllRentals = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rentals = yield rentalService.getAllRentals();
        res.json(rentals);
    }
    catch (error) {
        res.status(500).send('An error occurred');
    }
});
exports.getAllRentals = getAllRentals;
const getRentals = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rentals = yield rentalService.getAllRentals();
        res.json(rentals);
    }
    catch (error) {
        res.status(500).send('An error occurred');
    }
});
exports.getRentals = getRentals;
const getRentalById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rental = yield rentalService.getRentalById(Number(req.params.id));
        if (rental) {
            res.json(rental);
        }
        else {
            res.status(404).send('Rental not found');
        }
    }
    catch (error) {
        res.status(500).send('An error occurred');
    }
});
exports.getRentalById = getRentalById;
const createRental = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { movieId, customerId, rentalDate, returnDate } = req.body;
        if (!movieId || !customerId || !rentalDate || !returnDate) {
            return res.status(400).send('All fields are required');
        }
        const newRental = yield rentalService.createRental(movieId, customerId, rentalDate, returnDate);
        res.status(201).json(newRental);
    }
    catch (error) {
        res.status(500).send('An error occurred');
    }
});
exports.createRental = createRental;
const updateRental = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { movieId, customerId, rentalDate, returnDate } = req.body;
        if (!movieId || !customerId || !rentalDate || !returnDate) {
            return res.status(400).send('All fields are required');
        }
        const updatedRental = yield rentalService.updateRental(Number(req.params.id), movieId, customerId, rentalDate, returnDate);
        if (updatedRental) {
            res.json(updatedRental);
        }
        else {
            res.status(404).send('Rental not found');
        }
    }
    catch (error) {
        res.status(500).send('An error occurred');
    }
});
exports.updateRental = updateRental;
const deleteRental = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield rentalService.deleteRental(Number(req.params.id));
        if (result.affected && result.affected > 0) {
            res.status(204).send();
        }
        else {
            res.status(404).send('Rental not found');
        }
    }
    catch (error) {
        res.status(500).send('An error occurred');
    }
});
exports.deleteRental = deleteRental;
