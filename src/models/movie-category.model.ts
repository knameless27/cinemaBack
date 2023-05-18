import { model } from 'mongoose';
import { MovieCategorySchema } from 'src/modules/movie-category/schema/movie-category.schema';

export const MovieCategoryModelName = 'Movie_Category'

export const MovieCategoryModel = model(MovieCategoryModelName, MovieCategorySchema);
