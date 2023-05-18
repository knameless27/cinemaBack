import mongoose from 'mongoose';

export const MovieClasification = {
    name: String,
    min_age: Number,
    state: Boolean,
}

export const MovieClasificationSchema = new mongoose.Schema(MovieClasification);
