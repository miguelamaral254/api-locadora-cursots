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
exports.deleteGenre = exports.updateGenre = exports.createGenre = exports.getGenreById = exports.getAllGenres = void 0;
const genreService = __importStar(require("../services/GenreService"));
const getAllGenres = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const genres = yield genreService.getAllGenres();
        res.json(genres);
    }
    catch (error) {
        res.status(500).send(error instanceof Error ? error.message : 'An unknown error occurred');
    }
});
exports.getAllGenres = getAllGenres;
const getGenreById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const genre = yield genreService.getGenreById(Number(req.params.id));
        if (genre) {
            res.json(genre);
        }
        else {
            res.status(404).send('Genre not found');
        }
    }
    catch (error) {
        res.status(500).send(error instanceof Error ? error.message : 'An unknown error occurred');
    }
});
exports.getGenreById = getGenreById;
const createGenre = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.body;
    try {
        if (!name) {
            return res.status(400).send('Name is required');
        }
        const newGenre = yield genreService.createGenre(name);
        res.status(201).json(newGenre);
    }
    catch (error) {
        res.status(500).send(error instanceof Error ? error.message : 'An unknown error occurred');
    }
});
exports.createGenre = createGenre;
const updateGenre = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.body;
    try {
        if (!name) {
            return res.status(400).send('Name is required');
        }
        const updatedGenre = yield genreService.updateGenre(Number(req.params.id), name);
        if (updatedGenre) {
            res.json(updatedGenre);
        }
        else {
            res.status(404).send('Genre not found');
        }
    }
    catch (error) {
        res.status(500).send(error instanceof Error ? error.message : 'An unknown error occurred');
    }
});
exports.updateGenre = updateGenre;
const deleteGenre = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield genreService.deleteGenre(Number(req.params.id));
        if (result.affected === 1) { // Verificar o número de linhas afetadas
            res.status(204).send();
        }
        else {
            res.status(404).send('Genre not found');
        }
    }
    catch (error) {
        res.status(500).send(error instanceof Error ? error.message : 'An unknown error occurred');
    }
});
exports.deleteGenre = deleteGenre;
