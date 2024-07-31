import { Request, Response } from 'express';
import * as movieService from '../services/MovieService';

export const getAllMovies = async (req: Request, res: Response) => {
  try {
    const movies = await movieService.getAllMovies();
    res.json(movies);
  } catch (error) {
    res.status(500).send(error instanceof Error ? error.message : 'An unknown error occurred');
  }
};

export const getMovieById = async (req: Request, res: Response) => {
  try {
    const movie = await movieService.getMovieById(Number(req.params.id));
    if (movie) {
      res.json(movie);
    } else {
      res.status(404).send('Movie not found');
    }
  } catch (error) {
    res.status(500).send(error instanceof Error ? error.message : 'An unknown error occurred');
  }
};

export const createMovie = async (req: Request, res: Response) => {
  try {
    const { title, genreId, releaseDate } = req.body;
    if (!title || !genreId || !releaseDate) {
      return res.status(400).send('All fields are required');
    }
    const newMovie = await movieService.createMovie(title, genreId, releaseDate);
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(500).send(error instanceof Error ? error.message : 'An unknown error occurred');
  }
};

export const updateMovie = async (req: Request, res: Response) => {
  try {
    const { title, genreId, releaseDate } = req.body;
    if (!title || !genreId || !releaseDate) {
      return res.status(400).send('All fields are required');
    }
    const updatedMovie = await movieService.updateMovie(Number(req.params.id), title, genreId, releaseDate);
    if (updatedMovie) {
      res.json(updatedMovie);
    } else {
      res.status(404).send('Movie not found');
    }
  } catch (error) {
    res.status(500).send(error instanceof Error ? error.message : 'An unknown error occurred');
  }
};

export const deleteMovie = async (req: Request, res: Response) => {
  try {
    const result = await movieService.deleteMovie(Number(req.params.id));
    if (result.affected === 1) { 
      res.status(204).send();
    } else {
      res.status(404).send('Movie not found');
    }
  } catch (error) {
    res.status(500).send(error instanceof Error ? error.message : 'An unknown error occurred');
  }
};
