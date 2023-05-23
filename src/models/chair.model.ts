import { model } from 'mongoose';
import { ChairsSchema } from 'src/modules/chair/schema/chair.schema';

export const ChairModelName = 'Chair'

export const ChairModel = model(ChairModelName, ChairsSchema);
