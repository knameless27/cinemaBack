import mongoose from 'mongoose';

export const Roles = {
    name: String,
    state: Boolean,
}

export const RolesSchema = new mongoose.Schema(Roles);
