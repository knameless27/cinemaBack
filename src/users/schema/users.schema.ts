import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UsersDocument = HydratedDocument<Users>;

@Schema()
export class Users {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  dni: string;

  @Prop()
  password: string;

  @Prop()
  state: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
