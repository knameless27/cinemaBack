import mongoose from 'mongoose';

export const ChairStatus = {
    name: String,
    state: Boolean
}

export const ChairStatusesSchema = new mongoose.Schema(ChairStatus);
