import { model } from 'mongoose';
import { RolesSchema } from 'src/modules/roles/schema/roles.schema';

export const RoleModelName = 'Role'

export const RoleModel = model(RoleModelName, RolesSchema);
