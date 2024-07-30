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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMovie = exports.updateMovie = exports.createMovie = exports.getMovieById = exports.getAllMovies = void 0;
const typeorm_1 = require("typeorm");
const Movie_1 = require("../models/Movie");
const getMovieRepository = () => (0, typeorm_1.getRepository)(Movie_1.Movie);
const getAllMovies = () => __awaiter(void 0, void 0, void 0, function* () {
    const movieRepository = getMovieRepository();
    return yield movieRepository.find();
});
exports.getAllMovies = getAllMovies;
const getMovieById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const movieRepository = getMovieRepository();
    return yield movieRepository.findOne({ where: { id } });
});
exports.getMovieById = getMovieById;
const createMovie = (title, genreId, releaseDate) => __awaiter(void 0, void 0, void 0, function* () {
    const movieRepository = getMovieRepository();
    const movie = new Movie_1.Movie();
    movie.title = title;
    movie.genre = { id: genreId };
    movie.releaseDate = releaseDate;
    return yield movieRepository.save(movie);
});
exports.createMovie = createMovie;
const updateMovie = (id, title, genreId, releaseDate) => __awaiter(void 0, void 0, void 0, function* () {
    const movieRepository = getMovieRepository();
    const movie = yield movieRepository.findOne({ where: { id } });
    if (!movie)
        return null;
    movie.title = title;
    movie.genre = { id: genreId };
    movie.releaseDate = releaseDate;
    return yield movieRepository.save(movie);
});
exports.updateMovie = updateMovie;
const deleteMovie = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const movieRepository = (0, typeorm_1.getRepository)(Movie_1.Movie);
    const result = yield movieRepository.delete(id);
    return result;
});
exports.deleteMovie = deleteMovie;
