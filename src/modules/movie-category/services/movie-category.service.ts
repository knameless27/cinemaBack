import { Injectable } from '@nestjs/common';
import { CreateMovieCategoryDto } from '../dto/create-movie-category.dto';
import { UpdateMovieCategoryDto } from '../dto/update-movie-category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { standardResponse } from "../../utils/response";
import { MovieCategoryModelName } from 'src/models/movie-category.model';
import { IMovieCategory } from 'src/interfaces/movie_category/movie_category.interface';

@Injectable()
export class MovieCategoryService {
    constructor(@InjectModel(MovieCategoryModelName) private movieCategoryModule: Model<IMovieCategory>) { }

    async create(CreateMovieCategoryDto: CreateMovieCategoryDto) {
        return standardResponse(await this.movieCategoryModule.create(CreateMovieCategoryDto), 'Categoria de pelicula creado exitosamente!', 'success');
    }

    async findAll() {
        return standardResponse(await this.movieCategoryModule.find({}), 'Categoria de peliculas encontrados exitosamente!', 'success');
    }

    async findOne(id: string) {
        return standardResponse(await this.movieCategoryModule.findById(id), 'Categoria de pelicula encontrado exitosamente!', 'success');
    }

    async update(id: string, UpdateMovieCategoryDto: UpdateMovieCategoryDto) {
        return standardResponse(await this.movieCategoryModule.updateOne({ _id: id }, UpdateMovieCategoryDto), 'Categoria de pelicula editado exitosamente!', 'success');
    }

    async remove(id: string) {
        return standardResponse(await this.movieCategoryModule.deleteOne({ _id: id }), 'Categoria de pelicula eliminado exitosamente!', 'success');
    }
}
