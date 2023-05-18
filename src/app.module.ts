import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { TicketStatusModule } from './ticket-status/ticket-status.module';
import { MovieCategoryModule } from './movie-category/movie-category.module';
import { MovieClasificationModule } from './movie-clasification/movie_clasification.module';

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
        MovieClasificationModule
    ],
})
export class AppModule { }
