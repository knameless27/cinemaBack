import { model } from 'mongoose';
import { TicketSchema } from 'src/modules/ticket/schema/ticket.schema';

export const TicketModelName = 'Ticket'

export const TicketModel = model(TicketModelName, TicketSchema);
