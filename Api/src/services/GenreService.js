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
exports.deleteGenre = exports.updateGenre = exports.createGenre = exports.getGenreById = exports.getAllGenres = void 0;
const data_source_1 = __importDefault(require("../data-source")); // Certifique-se de que o caminho está correto
const Genre_1 = require("../models/Genre");
const getGenreRepository = () => data_source_1.default.getRepository(Genre_1.Genre);
const getAllGenres = () => __awaiter(void 0, void 0, void 0, function* () {
    const genreRepository = getGenreRepository();
    return yield genreRepository.find();
});
exports.getAllGenres = getAllGenres;
const getGenreById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const genreRepository = getGenreRepository();
    return yield genreRepository.findOne({ where: { id } });
});
exports.getGenreById = getGenreById;
const createGenre = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const genreRepository = getGenreRepository();
    const genre = new Genre_1.Genre();
    genre.name = name;
    return yield genreRepository.save(genre);
});
exports.createGenre = createGenre;
const updateGenre = (id, name) => __awaiter(void 0, void 0, void 0, function* () {
    const genreRepository = getGenreRepository();
    const genre = yield genreRepository.findOne({ where: { id } });
    if (!genre)
        return null;
    genre.name = name;
    return yield genreRepository.save(genre);
});
exports.updateGenre = updateGenre;
const deleteGenre = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const genreRepository = getGenreRepository();
    const result = yield genreRepository.delete(id);
    return result;
});
exports.deleteGenre = deleteGenre;
