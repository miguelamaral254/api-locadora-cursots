// src/data-source.ts
import { DataSource } from 'typeorm';
import { Movie } from './models/Movie';
import { Rental } from './models/Rental';
import { Genre } from './models/Genre';

const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'miguel',
  password: '32412294',
  database: 'locadora',
  entities: [Movie, Rental, Genre],
  synchronize: true, 
});

export default AppDataSource;
