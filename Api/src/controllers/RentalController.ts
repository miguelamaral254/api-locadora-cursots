import { Request, Response } from 'express';
import * as rentalService from '../services/RentalService';

export const getAllRentals = async (req: Request, res: Response) => {
  try {
    const rentals = await rentalService.getAllRentals();
    res.json(rentals);
  } catch (error) {
    res.status(500).send(error instanceof Error ? error.message : 'An unknown error occurred');
  }
};

export const getRentalById = async (req: Request, res: Response) => {
  try {
    const rental = await rentalService.getRentalById(Number(req.params.id));
    if (rental) {
      res.json(rental);
    } else {
      res.status(404).send('Rental not found');
    }
  } catch (error) {
    res.status(500).send(error instanceof Error ? error.message : 'An unknown error occurred');
  }
};

export const createRental = async (req: Request, res: Response) => {
  try {
    const { movieId, customerId, rentalDate, returnDate } = req.body;
    if (!movieId || !customerId || !rentalDate || !returnDate) {
      return res.status(400).send('All fields are required');
    }
    const newRental = await rentalService.createRental(movieId, customerId, rentalDate, returnDate);
    res.status(201).json(newRental);
  } catch (error) {
    res.status(500).send('An error occurred');
  }
};

export const updateRental = async (req: Request, res: Response) => {
  try {
    const { movieId, customerId, rentalDate, returnDate } = req.body;
    if (!movieId || !customerId || !rentalDate || !returnDate) {
      return res.status(400).send('All fields are required');
    }
    const updatedRental = await rentalService.updateRental(Number(req.params.id), movieId, customerId, rentalDate, returnDate);
    if (updatedRental) {
      res.json(updatedRental);
    } else {
      res.status(404).send('Rental not found');
    }
  } catch (error) {
    res.status(500).send('An error occurred');
  }
};

export const deleteRental = async (req: Request, res: Response) => {
  try {
    const result = await rentalService.deleteRental(Number(req.params.id));
    if (result.affected && result.affected > 0) {
      res.status(204).send();
    } else {
      res.status(404).send('Rental not found');
    }
  } catch (error) {
    res.status(500).send('An error occurred');
  }
};
