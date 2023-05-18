import { model } from 'mongoose';
import { MoviesSchema } from 'src/movie/schema/movie.schema';

export const MovieModelName = 'Movie'

export const MovieModel = model(MovieModelName, MoviesSchema);
