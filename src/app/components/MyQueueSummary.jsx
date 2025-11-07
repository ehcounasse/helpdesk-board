'use client';

export default function MyQueueSummary({tickets, queuedIds, onRemove, onClear}){
    const queuedSet = new Set(queuedIds);
    const queuedTickets = tickets.filter(t => queuedSet.has(t.id));

    return (
        <aside className="rounded-2xl border p-4 text-white">
            <div className= "flex items-center justify-between mb-3">
                <h2 className="text-lg font-semibold text-white">My Queue</h2>
                <span className="text-sm text-white">Selected: <strong>{queuedTickets.length}</strong></span>
            </div>

            {queuedTickets.length === 0 ? (
                <p className="text-sm text-gray-600">No tickets selected.</p>
            ) : (
                <>
                <ul className="space-y-2 mb-4">
                    {queuedTickets.map(t => (
                        <li key={t.id} className="flex items-center justify-between gap-2">
                            <div className="min-w-0">
                                <p className="truncate text-sm">
                                    <span className="font-medium">{t.id}</span> - {t.title}
                                </p>
                            </div>
                            <button className="rounded-lg border px-2 py-1 text-xs" onClick={() => onRemove(t.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
                <button className="rounded-xl border px-3 py-2 text-sm text-white" onClick={onClear}>Clear Queue</button>
              </>
            )}
        </aside>
    );
}