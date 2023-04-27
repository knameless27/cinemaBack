import { model } from 'mongoose';
import { RolesSchema } from 'src/roles/schema/roles.schema';

const RoleModel = model('Role', RolesSchema);

export default RoleModel;
