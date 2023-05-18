import { Module } from '@nestjs/common';
import { MovieService } from './services/movie.service';
import { MoviesController } from './controllers/movie.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MovieModel, MovieModelName } from 'src/models/movie.model';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: MovieModelName,
                schema: MovieModel.schema
            }
        ])
    ],
    providers: [MovieService],
    controllers: [MoviesController]
})
export class MoviesModule { }
