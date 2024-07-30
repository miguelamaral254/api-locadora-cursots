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
const express_1 = __importDefault(require("express"));
const data_source_1 = __importDefault(require("./data-source")); // Importando o DataSource
const Movie_1 = require("./models/Movie");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
// Conectar ao banco de dados
data_source_1.default.initialize().then(() => {
    console.log('Connected to the database');
    // GET todos os filmes
    app.get('/movies', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const movieRepository = data_source_1.default.getRepository(Movie_1.Movie); // Usando AppDataSource para obter o repositório
            const movies = yield movieRepository.find();
            res.json(movies);
        }
        catch (error) {
            res.status(500).send('Internal Server Error');
        }
    }));
    app.get('/movies/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const movieRepository = data_source_1.default.getRepository(Movie_1.Movie);
            const movieId = parseInt(req.params.id, 10);
            const movie = yield movieRepository.findOne({ where: { id: movieId } });
            if (movie) {
                res.json(movie);
            }
            else {
                res.status(404).send('Movie not found');
            }
        }
        catch (error) {
            res.status(500).send('Internal Server Error');
        }
    }));
    app.post('/movies', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { title, releaseDate } = req.body;
            if (!title || !releaseDate) {
                return res.status(400).send('Title and releaseDate are required');
            }
            const movieRepository = data_source_1.default.getRepository(Movie_1.Movie);
            const newMovie = movieRepository.create({ title, releaseDate });
            yield movieRepository.save(newMovie);
            res.status(201).json(newMovie);
        }
        catch (error) {
            res.status(500).send('Internal Server Error');
        }
    }));
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}).catch((error) => {
    console.error('Error connecting to the database', error);
});
