import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { join } from 'path';

@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: async () => ({
        transport: {
          host: 'smtp.gmail.com',
          auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD_EMAIL,
          },
          defaults: {
            from: process.env.EMAIL,
            template: {
              dir: join(__dirname, './templates'),
              adapter: new HandlebarsAdapter(),
              options: {
                strict: true,
              },
            }
          }
        }
      }),
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})

export class MailModule { }