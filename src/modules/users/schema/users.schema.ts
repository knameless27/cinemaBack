import mongoose from 'mongoose';

export const User = {
    name: String,
    age: Number,
    email: String,
    dni: String,
    password: String,
    state: Boolean,
    role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role' }
}

export const UsersSchema = new mongoose.Schema(User);
