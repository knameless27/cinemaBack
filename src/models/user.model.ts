import { model } from 'mongoose';
import { UsersSchema } from 'src/users/schema/users.schema';

export const UserModelName = 'User'

export const UserModel = model(UserModelName, UsersSchema);
