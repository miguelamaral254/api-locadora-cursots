import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Movie } from './Movie';

@Entity()
export class Genre {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @OneToMany(() => Movie, movie => movie.genre)
  movies!: Movie[]; 

  constructor(name?: string) {
    if (name) {
      this.name = name;
    }
    
  }
}
