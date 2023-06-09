import mongoose from 'mongoose';

export const Functions = {
    name: String,
    state: Boolean,
    date: Date,
    movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
    room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
}

export const FunctionsSchema = new mongoose.Schema(Functions);
