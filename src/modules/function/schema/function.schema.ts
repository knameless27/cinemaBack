import mongoose from 'mongoose';

export const Functions = {
    name: String,
    state: Boolean,
    duration: Number,
    movie_clasification: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie_Clasification' },
    movie_category: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie_Category' }
}

export const FunctionsSchema = new mongoose.Schema(Functions);
