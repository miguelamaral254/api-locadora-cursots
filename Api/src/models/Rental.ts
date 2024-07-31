// src/models/Rental.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Movie } from './Movie';
import { Customer } from './customer';

@Entity()
export class Rental {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Movie, movie => movie.rentals)
  @JoinColumn({ name: 'movieId' })
  movie!: Movie;

  @ManyToOne(() => Customer, customer => customer.rentals)
  @JoinColumn({ name: 'customerId' })
  customer!: Customer;

  @Column()
  rentalDate!: string;

  @Column()
  returnDate!: string;

  constructor(movie?: Movie, customer?: Customer, rentalDate?: string, returnDate?: string) {
    if (movie) {
      this.movie = movie;
    }
    if (customer) {
      this.customer = customer;
    }
    if (rentalDate) {
      this.rentalDate = rentalDate;
    }
    if (returnDate) {
      this.returnDate = returnDate;
    }
  }
}
