import mongoose from 'mongoose';

export const Chairs = {
    name: String,
    state: Boolean,
    row: Number,
    column: Number,
    number: String,
    chair_status: { type: mongoose.Schema.Types.ObjectId, ref: 'Chair_Status' },
    room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
}

export const ChairsSchema = new mongoose.Schema(Chairs);
