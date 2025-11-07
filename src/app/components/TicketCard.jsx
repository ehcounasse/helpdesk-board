'use client'

function formatWhen(iso){
    try{
        return new Date(iso).toLocaleString();
    } catch {
        return iso;
    }
    }

    export default function TicketCard({ticket, isQueued, onAdd}){
        return (
            <article className="rounded-2xl border p-4 shadow-sm bg-white">
                <header className="mb-2">
                    <h3 className="text-lg font-semibold">{ticket.title}</h3>
                </header>
                <p className="text-sm text-gray-700 mb-3">{ticket.description}</p>
                <dl className="text-sm grid grid-cols-2 gap-y-1 mb-4">
                    <div><dt className="font-medium">Priority</dt><dd>{ticket.priority}</dd></div>
                    <div><dt className="font-medium">Status</dt><dd>{ticket.status}</dd></div>
                    <div><dt className="font-medium">Assignee</dt><dd>{ticket.assignee}</dd></div>
                    <div><dt className="font-medium">Updated</dt><dd>{formatWhen(ticket.updatedAT)}</dd></div>
                </dl>
                <button className="w-full rounded-xl border px-3 py-2 text-sm font-medium disabled:opacity-50" disabled={isQueued} onClick={onAdd}>
                    {isQueued ? 'Already in My Queue' : 'Add to My Queue'}
                </button>
                {isQueued && (
                    <p className="mt-2 text-xs text-gray-500">This ticket is already in your queue</p>
                )}
            </article>
        );
    }
