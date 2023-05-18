import { model } from 'mongoose';
import { TicketStatusSchema } from 'src/modules/ticket-status/schema/ticket-status.schema';

export const TicketStatusModelName = 'Ticket_Status'

export const TicketStatusModel = model(TicketStatusModelName, TicketStatusSchema);
