import { DeleteResult, Repository } from 'typeorm';
import AppDataSource from '../data-source';
import { Rental } from '../models/Rental';
import { Customer } from '../models/customer';
import { Movie } from '../models/Movie';

const getRentalRepository = (): Repository<Rental> => AppDataSource.getRepository(Rental);
const getCustomerRepository = (): Repository<Customer> => AppDataSource.getRepository(Customer);
const getMovieRepository = (): Repository<Movie> => AppDataSource.getRepository(Movie);

export const getAllRentals = async () => {
  const rentalRepository = getRentalRepository();
  return await rentalRepository.find({
    relations: ['movie', 'movie.genre', 'customer'], 
  });
};

export const getRentalById = async (id: number) => {
  const rentalRepository = getRentalRepository();
  return await rentalRepository.findOne({
    where: { id },
    relations: ['movie', 'movie.genre', 'customer'], 
  });
};

export const createRental = async (movieId: number, customerId: number, rentalDate: string, returnDate: string) => {
  const rentalRepository = getRentalRepository();
  const movieRepository = getMovieRepository();
  const customerRepository = getCustomerRepository();

  const movie = await movieRepository.findOne({ where: { id: movieId } });
  const customer = await customerRepository.findOne({ where: { id: customerId } });

  if (!movie || !customer) {
    throw new Error('Movie or Customer not found');
  }

  const rental = new Rental();
  rental.movie = movie;
  rental.customer = customer;
  rental.rentalDate = rentalDate;
  rental.returnDate = returnDate;
  return await rentalRepository.save(rental);
};

export const updateRental = async (id: number, movieId: number, customerId: number, rentalDate: string, returnDate: string) => {
  const rentalRepository = getRentalRepository();
  const movieRepository = getMovieRepository();
  const customerRepository = getCustomerRepository();

  const rental = await rentalRepository.findOne({ where: { id } });
  const movie = await movieRepository.findOne({ where: { id: movieId } });
  const customer = await customerRepository.findOne({ where: { id: customerId } });

  if (!rental || !movie || !customer) {
    return null;
  }

  rental.movie = movie;
  rental.customer = customer;
  rental.rentalDate = rentalDate;
  rental.returnDate = returnDate;
  return await rentalRepository.save(rental);
};

export const deleteRental = async (id: number): Promise<DeleteResult> => {
  const rentalRepository = getRentalRepository();
  return await rentalRepository.delete(id);
};
