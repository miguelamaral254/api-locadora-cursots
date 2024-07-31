"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Movie_1 = require("./models/Movie");
const Rental_1 = require("./models/Rental");
const Genre_1 = require("./models/Genre");
const customer_1 = require("./models/customer");
const AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'miguel',
    password: '32412294',
    database: 'locadora',
    entities: [Movie_1.Movie, Rental_1.Rental, Genre_1.Genre, customer_1.Customer],
    synchronize: true,
    //logging: true,
});
exports.default = AppDataSource;
