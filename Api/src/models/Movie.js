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
exports.Movie = void 0;
const typeorm_1 = require("typeorm");
const Genre_1 = require("./Genre");
const Rental_1 = require("./Rental");
let Movie = class Movie {
    constructor(title, genre, releaseDate) {
        if (title) {
            this.title = title;
        }
        if (genre) {
            this.genre = genre;
        }
        if (releaseDate) {
            this.releaseDate = releaseDate;
        }
    }
};
exports.Movie = Movie;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Movie.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Movie.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Genre_1.Genre, genre => genre.movies),
    __metadata("design:type", Genre_1.Genre)
], Movie.prototype, "genre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Movie.prototype, "releaseDate", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Rental_1.Rental, rental => rental.movie),
    __metadata("design:type", Array)
], Movie.prototype, "rentals", void 0);
exports.Movie = Movie = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [String, Genre_1.Genre, String])
], Movie);
