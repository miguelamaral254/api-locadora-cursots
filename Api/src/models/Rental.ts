// src/models/Rental.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Movie } from './Movie';
import { Customer } from './customer';

@Entity()
export class Rental {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  rentalDate!: string;

  @Column()
  returnDate!: string;

  @ManyToOne(() => Movie, movie => movie.rentals)
  movie!: Movie;

  @ManyToOne(() => Customer, customer => customer.rentals)
  customer!: Customer;

  constructor(rentalDate?: string, returnDate?: string, movie?: Movie, customer?: Customer) {
    if (rentalDate) {
      this.rentalDate = rentalDate;
    }
    if (returnDate) {
      this.returnDate = returnDate;
    }
    if (movie) {
      this.movie = movie;
    }
    if (customer) {
      this.customer = customer;
    }
  }
}
