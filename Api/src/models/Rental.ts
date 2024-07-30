import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Movie } from './Movie';

@Entity()
export class Rental {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Movie, movie => movie.rentals)
  @JoinColumn({ name: 'movieId' })
  movie!: Movie;

  @Column()
  clientId!: number;

  @Column()
  rentalDate!: string;

  @Column()
  returnDate!: string;

  constructor(movie?: Movie, clientId?: number, rentalDate?: string, returnDate?: string) {
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
}
