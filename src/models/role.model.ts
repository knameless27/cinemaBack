import { model } from 'mongoose';
import { RolesSchema } from 'src/roles/schema/roles.schema';

export const RoleModelName = 'Role'

export const RoleModel = model(RoleModelName, RolesSchema);
