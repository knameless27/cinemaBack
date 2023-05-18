import { model } from 'mongoose';
import { ChairStatusesSchema } from 'src/modules/chair-status/schema/chair-status.schema';

export const ChairStatusModelName = 'Chair_Status'

export const ChairStatusModel = model(ChairStatusModelName, ChairStatusesSchema);
