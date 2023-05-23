import { model } from 'mongoose';
import { RoomsSchema } from 'src/modules/room/schema/room.schema';

export const RoomModelName = 'Room'

export const RoomModel = model(RoomModelName, RoomsSchema);
