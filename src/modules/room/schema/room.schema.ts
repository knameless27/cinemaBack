import mongoose from 'mongoose';

export const Room = {
    name: String,
    rows: Number,
    columns: Number,
    state: Boolean
}

export const RoomsSchema = new mongoose.Schema(Room);
