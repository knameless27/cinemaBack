import mongoose from 'mongoose';

export const MovieCategory = {
    name: String,
    state: Boolean,
}

export const MovieCategorySchema = new mongoose.Schema(MovieCategory);
