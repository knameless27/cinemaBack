import { model } from 'mongoose';
import { MovieClasificationSchema } from 'src/movie-clasification/schema/movie-clasification.schema';

export const MovieClasificationModelName = 'Movie_Clasification'

export const MovieClasificationModel = model(MovieClasificationModelName, MovieClasificationSchema);
