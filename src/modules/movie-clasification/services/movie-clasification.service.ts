import { Injectable } from '@nestjs/common';
import { CreateMovieClasificationDto } from '../dto/create-movie-clasification.dto';
import { UpdateMovieClasificationDto } from '../dto/update-movie-clasification.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { standardResponse } from "../../utils/response";
import { MovieClasificationModelName } from 'src/models/movie-clasification.model';
import { IMovieClasification } from 'src/interfaces/movie_clasification/movie_clasification.interface';

@Injectable()
export class MovieClasificationService {
    constructor(@InjectModel(MovieClasificationModelName) private movieClasificationModule: Model<IMovieClasification>) { }

    async create(CreateMovieClasificationDto: CreateMovieClasificationDto) {
        return standardResponse(await this.movieClasificationModule.create(CreateMovieClasificationDto), 'Clasificacion de pelicula creado exitosamente!', 'success');
    }

    async findAll() {
        return standardResponse(await this.movieClasificationModule.find({}), 'Clasificaciones de peliculas encontrados exitosamente!', 'success');
    }

    async findOne(id: string) {
        return standardResponse(await this.movieClasificationModule.findById(id), 'Clasificacion de pelicula encontrado exitosamente!', 'success');
    }

    async update(id: string, UpdateMovieClasificationDto: UpdateMovieClasificationDto) {
        return standardResponse(await this.movieClasificationModule.updateOne({ _id: id }, UpdateMovieClasificationDto), 'Clasificacion de pelicula editado exitosamente!', 'success');
    }

    async remove(id: string) {
        return standardResponse(await this.movieClasificationModule.deleteOne({ _id: id }), 'Clasificacion de pelicula eliminado exitosamente!', 'success');
    }
}
