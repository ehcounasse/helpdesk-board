'use client';

 import TicketCard from './components/TicketCard'

 export default function TicketList({tickets, queueMap, onAddToQueue}) {
    return(
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tickets.map(ticket => (
            <TicketCard key = {ticket.id} ticket={ticket} isQueued={!!queueMap[ticket.id]} onAdd={() => onAddToQueue(ticket.id)}/>
        ))}
    </div>
    );
 }





