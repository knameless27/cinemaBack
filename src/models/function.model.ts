import { model } from 'mongoose';
import { FunctionsSchema } from 'src/modules/function/schema/function.schema';

export const FunctionModelName = 'Function'

export const FunctionModel = model(FunctionModelName, FunctionsSchema);
