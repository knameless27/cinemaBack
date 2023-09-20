import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from '../dto/create-movie.dto';
import { UpdateMovieDto } from '../dto/update-movie.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { standardResponse } from "../../utils/response";
import {MovieModelName} from 'src/models/movie.model';
import { IMovie } from 'src/interfaces/movie/movie.interface';

@Injectable()
export class MovieService {
    constructor(@InjectModel(MovieModelName) private movieModule: Model<IMovie>) { }

    async create(CreateMovieDto: CreateMovieDto) {
        return standardResponse(await this.movieModule.create(CreateMovieDto), 'Pelicula creada exitosamente!', 'success');
    }

    async findAll() {
        return standardResponse(await this.movieModule.find({}).populate(['movie_category', 'movie_clasification']), 'Peliculas encontradas exitosamente!', 'success');
    }

    async findOne(id: string) {
        return standardResponse(await this.movieModule.findById(id).populate(['movie_category', 'movie_clasification']), 'Pelicula encontrada exitosamente!', 'success');
    }

   async update(id: string, UpdateMovieDto: UpdateMovieDto) {
        return standardResponse(await this.movieModule.updateOne({_id: id}, UpdateMovieDto), 'Pelicula editada exitosamente!', 'success');
    }

    async remove(id: string) {
        return standardResponse(await this.movieModule.deleteOne({_id: id}), 'Pelicula eliminada exitosamente!', 'success');
    }
}
