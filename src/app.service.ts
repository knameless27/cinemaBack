import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    let xd = process.env.DB_USER;
    console.log(process.env.XDD);
    return xd;
  }
}
