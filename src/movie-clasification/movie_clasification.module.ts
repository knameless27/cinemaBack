import { Module } from '@nestjs/common';
import { MovieClasificationService } from './services/movie-clasification.service';
import { MovieClasificationController } from './controllers/movie-clasification.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MovieClasificationModel, MovieClasificationModelName } from 'src/models/movie-clasification.model';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: MovieClasificationModelName,
                schema: MovieClasificationModel.schema
            }
        ])
    ],
    providers: [MovieClasificationService],
    controllers: [MovieClasificationController]
})
export class MovieClasificationModule { }
