import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId } from 'mongoose';
import { Roles } from 'src/roles/schema/roles.schema';

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
  state: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Role' })
  role: Roles;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
