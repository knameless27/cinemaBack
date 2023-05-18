import { Module } from '@nestjs/common';
import { MovieCategoryService } from './services/movie-category.service';
import { MovieCategoryController } from './controllers/movie-category.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MovieCategoryModel, MovieCategoryModelName } from 'src/models/movie-category.model';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: MovieCategoryModelName,
                schema: MovieCategoryModel.schema
            }
        ])
    ],
    providers: [MovieCategoryService],
    controllers: [MovieCategoryController]
})
export class MovieCategoryModule { }
