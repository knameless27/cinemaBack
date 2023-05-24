import mongoose from 'mongoose';

export const Ticket = {
    name: String,
    state: Boolean,
    ticket_status: { type: mongoose.Schema.Types.ObjectId, ref: 'Ticket_Status' },
    chair_room: { type: mongoose.Schema.Types.ObjectId, ref: 'Chair_Room' },
    function: { type: mongoose.Schema.Types.ObjectId, ref: 'Function' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}

export const TicketSchema = new mongoose.Schema(Ticket);
