import { model } from 'mongoose';
import { ChairRoomsSchema } from 'src/modules/chair-rooms/schema/chair-room.schema';

export const ChairRoomModelName = 'Chair_Room'

export const ChairRoomModel = model(ChairRoomModelName, ChairRoomsSchema);
