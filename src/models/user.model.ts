import { model } from 'mongoose';
import { UsersSchema } from 'src/users/schema/users.schema';

const UserModel = model('User', UsersSchema);

export default UserModel;
