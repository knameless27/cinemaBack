import { model } from 'mongoose';
import { UsersSchema } from 'src/modules/users/schema/users.schema';

export const UserModelName = 'User'

export const UserModel = model(UserModelName, UsersSchema);
