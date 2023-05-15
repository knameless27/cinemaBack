import mongoose from 'mongoose';

export const TicketStatus = {
    name: String,
    state: Boolean,
}

export const TicketStatusSchema = new mongoose.Schema(TicketStatus);
