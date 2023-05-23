import mongoose from 'mongoose';

export const ChairRoom = {
    chair: { type: mongoose.Schema.Types.ObjectId, ref: 'Chair' },
    room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
    state: Boolean
}

export const ChairRoomsSchema = new mongoose.Schema(ChairRoom);
