import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './modules/users/users.module';
import { RolesModule } from './modules/roles/roles.module';
import { TicketStatusModule } from './modules/ticket-status/ticket-status.module';
import { MovieCategoryModule } from './modules/movie-category/movie-category.module';
import { MovieClasificationModule } from './modules/movie-clasification/movie_clasification.module';
import { MoviesModule } from './modules/movie/movie.module';
import { FunctionModule } from './modules/function/function.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        MongooseModule.forRoot(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cinema.mycfuis.mongodb.net/?`),
        RolesModule,
        UsersModule,
        TicketStatusModule,
        MovieCategoryModule,
        MovieClasificationModule,
        MoviesModule,
        FunctionModule
    ],
})
export class AppModule { }
