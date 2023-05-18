import mongoose from 'mongoose';

export const Movies = {
    name: String,
    state: Boolean,
    duration: Number,
    movie_clasification: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie_Clasification' },
    movie_category: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie_Category' }
}

export const MoviesSchema = new mongoose.Schema(Movies);
