import mongoose from 'mongoose';

export const Room = {
    name: String,
    state: Boolean
}

export const RoomsSchema = new mongoose.Schema(Room);
