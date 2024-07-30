"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rental = void 0;
const typeorm_1 = require("typeorm");
const Movie_1 = require("./Movie");
let Rental = class Rental {
    constructor(movie, clientId, rentalDate, returnDate) {
        if (movie) {
            this.movie = movie;
        }
        if (clientId) {
            this.clientId = clientId;
        }
        if (rentalDate) {
            this.rentalDate = rentalDate;
        }
        if (returnDate) {
            this.returnDate = returnDate;
        }
    }
};
exports.Rental = Rental;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Rental.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Movie_1.Movie, movie => movie.rentals),
    (0, typeorm_1.JoinColumn)({ name: 'movieId' }),
    __metadata("design:type", Movie_1.Movie)
], Rental.prototype, "movie", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Rental.prototype, "clientId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Rental.prototype, "rentalDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Rental.prototype, "returnDate", void 0);
exports.Rental = Rental = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Movie_1.Movie, Number, String, String])
], Rental);
