import { Repository } from 'typeorm';
import AppDataSource from '../data-source'; // Certifique-se de que o caminho está correto
import { Genre } from '../models/Genre';

const getGenreRepository = (): Repository<Genre> => AppDataSource.getRepository(Genre);

export const getAllGenres = async () => {
  const genreRepository = getGenreRepository();
  return await genreRepository.find();
};

export const getGenreById = async (id: number) => {
  const genreRepository = getGenreRepository();
  return await genreRepository.findOne({ where: { id } });
};

export const createGenre = async (name: string) => {
  const genreRepository = getGenreRepository();
  const genre = new Genre();
  genre.name = name;
  return await genreRepository.save(genre);
};

export const updateGenre = async (id: number, name: string) => {
  const genreRepository = getGenreRepository();
  const genre = await genreRepository.findOne({ where: { id } });
  if (!genre) return null;
  genre.name = name;
  return await genreRepository.save(genre);
};

export const deleteGenre = async (id: number) => {
  const genreRepository = getGenreRepository();
  const result = await genreRepository.delete(id);
  return result; 
};
