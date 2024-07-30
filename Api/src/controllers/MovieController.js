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
exports.deleteMovie = exports.updateMovie = exports.createMovie = exports.getMovieById = exports.getAllMovies = void 0;
const movieService = __importStar(require("../services/MovieService"));
const getAllMovies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movies = yield movieService.getAllMovies();
        res.json(movies);
    }
    catch (error) {
        res.status(500).send(error instanceof Error ? error.message : 'An unknown error occurred');
    }
});
exports.getAllMovies = getAllMovies;
const getMovieById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movie = yield movieService.getMovieById(Number(req.params.id));
        if (movie) {
            res.json(movie);
        }
        else {
            res.status(404).send('Movie not found');
        }
    }
    catch (error) {
        res.status(500).send(error instanceof Error ? error.message : 'An unknown error occurred');
    }
});
exports.getMovieById = getMovieById;
const createMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, genreId, releaseDate } = req.body;
        if (!title || !genreId || !releaseDate) {
            return res.status(400).send('All fields are required');
        }
        const newMovie = yield movieService.createMovie(title, genreId, releaseDate);
        res.status(201).json(newMovie);
    }
    catch (error) {
        res.status(500).send(error instanceof Error ? error.message : 'An unknown error occurred');
    }
});
exports.createMovie = createMovie;
const updateMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, genreId, releaseDate } = req.body;
        if (!title || !genreId || !releaseDate) {
            return res.status(400).send('All fields are required');
        }
        const updatedMovie = yield movieService.updateMovie(Number(req.params.id), title, genreId, releaseDate);
        if (updatedMovie) {
            res.json(updatedMovie);
        }
        else {
            res.status(404).send('Movie not found');
        }
    }
    catch (error) {
        res.status(500).send(error instanceof Error ? error.message : 'An unknown error occurred');
    }
});
exports.updateMovie = updateMovie;
const deleteMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield movieService.deleteMovie(Number(req.params.id));
        if (result.affected === 1) { // Verificar o número de linhas afetadas
            res.status(204).send();
        }
        else {
            res.status(404).send('Movie not found');
        }
    }
    catch (error) {
        res.status(500).send(error instanceof Error ? error.message : 'An unknown error occurred');
    }
});
exports.deleteMovie = deleteMovie;
