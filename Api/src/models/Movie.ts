import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Genre } from './Genre';
import { Rental } from './Rental';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @ManyToOne(() => Genre, genre => genre.movies)
  genre!: Genre;

  @Column()
  releaseDate!: string;

  @OneToMany(() => Rental, rental => rental.movie)
  rentals!: Rental[];

  constructor(title?: string, genre?: Genre, releaseDate?: string) {
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
}
