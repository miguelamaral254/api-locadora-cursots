import { Repository } from 'typeorm';
import AppDataSource from '../data-source';
import { Movie } from '../models/Movie';

const getMovieRepository = (): Repository<Movie> => AppDataSource.getRepository(Movie);

export const getAllMovies = async () => {
  const movieRepository = getMovieRepository();
  return await movieRepository.find();
};

export const getMovieById = async (id: number) => {
  const movieRepository = getMovieRepository();
  return await movieRepository.findOne({ where: { id } });
};

export const createMovie = async (title: string, genreId: number, releaseDate: string) => {
  const movieRepository = getMovieRepository();
  const movie = new Movie();
  movie.title = title;
  movie.genre = { id: genreId } as any; 
  movie.releaseDate = releaseDate;
  return await movieRepository.save(movie);
};

export const updateMovie = async (id: number, title: string, genreId: number, releaseDate: string) => {
  const movieRepository = getMovieRepository();
  const movie = await movieRepository.findOne({ where: { id } });
  if (!movie) return null;
  movie.title = title;
  movie.genre = { id: genreId } as any;
  movie.releaseDate = releaseDate;
  return await movieRepository.save(movie);
};

export const deleteMovie = async (id: number) => {
  const movieRepository = getMovieRepository();
  const result = await movieRepository.delete(id);
  return result; 
};
