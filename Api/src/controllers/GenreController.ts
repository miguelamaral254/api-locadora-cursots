import { Request, Response } from 'express';
import * as genreService from '../services/GenreService';

export const getAllGenres = async (req: Request, res: Response) => {
  try {
    const genres = await genreService.getAllGenres();
    res.json(genres);
  } catch (error) {
    res.status(500).send(error instanceof Error ? error.message : 'An unknown error occurred');
  }
};

export const getGenreById = async (req: Request, res: Response) => {
  try {
    const genre = await genreService.getGenreById(Number(req.params.id));
    if (genre) {
      res.json(genre);
    } else {
      res.status(404).send('Genre not found');
    }
  } catch (error) {
    res.status(500).send(error instanceof Error ? error.message : 'An unknown error occurred');
  }
};

export const createGenre = async (req: Request, res: Response) => {
  const { name } = req.body;
  try {
    if (!name) {
      return res.status(400).send('Name is required');
    }
    const newGenre = await genreService.createGenre(name);
    res.status(201).json(newGenre);
  } catch (error) {
    res.status(500).send(error instanceof Error ? error.message : 'An unknown error occurred');
  }
};

export const updateGenre = async (req: Request, res: Response) => {
  const { name } = req.body;
  try {
    if (!name) {
      return res.status(400).send('Name is required');
    }
    const updatedGenre = await genreService.updateGenre(Number(req.params.id), name);
    if (updatedGenre) {
      res.json(updatedGenre);
    } else {
      res.status(404).send('Genre not found');
    }
  } catch (error) {
    res.status(500).send(error instanceof Error ? error.message : 'An unknown error occurred');
  }
};

export const deleteGenre = async (req: Request, res: Response) => {
  try {
    const result = await genreService.deleteGenre(Number(req.params.id));
    if (result.affected === 1) { 
      res.status(204).send();
    } else {
      res.status(404).send('Genre not found');
    }
  } catch (error) {
    res.status(500).send(error instanceof Error ? error.message : 'An unknown error occurred');
  }
};
