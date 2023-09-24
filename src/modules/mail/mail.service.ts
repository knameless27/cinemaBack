import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
    constructor(private readonly mailerService: MailerService) { }

    sendMail(data: any): void {
        try {
            this.mailerService.sendMail({
                to: data.to,
                from: process.env.EMAIL,
                subject: data.subject,
                html: data.html,
            })
        } catch (error) {
            console.log(error);
        }
    }
}