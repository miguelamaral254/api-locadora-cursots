import { DeleteResult, Repository } from 'typeorm';
import AppDataSource from '../data-source'; // Certifique-se de que o caminho está correto
import { Rental } from '../models/Rental';

const getRentalRepository = (): Repository<Rental> => AppDataSource.getRepository(Rental);

export const getAllRentals = async () => {
  const rentalRepository = getRentalRepository();
  return await rentalRepository.find({ relations: ['movie'] });
};

export const getRentalById = async (id: number) => {
  const rentalRepository = getRentalRepository();
  return await rentalRepository.findOne({ where: { id }, relations: ['movie'] });
};

export const createRental = async (movieId: number, clientId: number, rentalDate: string, returnDate: string) => {
  const rentalRepository = getRentalRepository();
  const rental = new Rental();
  rental.movie = { id: movieId } as any; // Temporário para associar filme
  rental.clientId = clientId;
  rental.rentalDate = rentalDate;
  rental.returnDate = returnDate;
  return await rentalRepository.save(rental);
};

export const updateRental = async (id: number, movieId: number, clientId: number, rentalDate: string, returnDate: string) => {
  const rentalRepository = getRentalRepository();
  const rental = await rentalRepository.findOne({ where: { id } });
  if (!rental) return null;
  rental.movie = { id: movieId } as any;
  rental.clientId = clientId;
  rental.rentalDate = rentalDate;
  rental.returnDate = returnDate;
  return await rentalRepository.save(rental);
};

export const deleteRental = async (id: number): Promise<DeleteResult> => {
  const rentalRepository = getRentalRepository();
  return await rentalRepository.delete(id);
};
