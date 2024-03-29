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
import { ChairStatusModule } from './modules/chair-status/chair-status.module';
import { RoomsModule } from './modules/room/room.module';
import { ChairsModule } from './modules/chair/chair.module';
import { TicketsModule } from './modules/ticket/ticket.module';
import { AuthModule } from './modules/auth/auth.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailModule } from './modules/mail/mail.module';
import { join } from 'path';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        MongooseModule.forRoot(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cinema.mycfuis.mongodb.net/?`),
        RolesModule,
        UsersModule,
        AuthModule,
        TicketStatusModule,
        MovieCategoryModule,
        MovieClasificationModule,
        MoviesModule,
        FunctionModule,
        ChairStatusModule,
        RoomsModule,
        ChairsModule,
        TicketsModule,
        MailerModule.forRoot({
            transport: `smtps://${process.env.EMAIL}:${process.env.PASSWORD_EMAIL}@smtp.${process.env.DOMAIN}.com`,
            defaults: {
                from: `"No Reply" <${process.env.EMAIL}>`,
            },
            template: {
                dir: join(__dirname, 'templates'),
                adapter: new HandlebarsAdapter(),
                options: {
                    strict: true,
                },
            },
        }),
        MailModule,
    ],
})
export class AppModule { }
