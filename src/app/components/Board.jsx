'use client';

import { useEffect, useMemo, useRef, useState} from 'react';
import StatusFilter from './StatusFilter';
import PriorityFilter from './PriorityFilter';
import SearchBox from './SearchBox';
import TicketList from './TicketList';
import MyQueueSummary from './MyQueueSummary';
import StatusMessage from './StatusMessage';

const STATUSES = ['Open', 'In Progress', 'On Hold', 'Resolved'];
const PRIORITIES = ['Low', 'Medium', 'High', 'Critical'];

function nextStatus(current) {
    const order = { 'Open': 0, 'In Progress': 1, 'On Hold': 2, 'Resolved': 3};
    const r = Math.random();
    if (current === 'Open') return r < 0.75 ? 'In Progress' : 'On Hold'
    if (current === 'In Progress') return r < 0.7 ? 'Resolved' : 'On Hold'
    if (current === 'On Hold') return r < 0.7 ? 'In Progress' : 'Open'
    return r < 0.9 ? 'Resolved' : 'In Progress'
}

function nudgePriority(current) {
    const idx = PRIORITIES.indexOf(current);
    const r = Math.random();
    if (r < 0.45 && idx < PRIORITIES.length - 1) return PRIORITIES[idx + 1];
    if (r < 0.9 && idx > 0) return PRIORITIES[idx - 1];
    return current;
}

export default function Board() {
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState({status: 'All', priority: 'All'});
    const [search, setSearch] = useState('');
    const [ queue, setQueue] = useState({});

    useEffect(() => {
        const ac = new AbortController();
        (async () => {
            try{
                setLoading(true);
                setError(null);
                const res= await fetch('/api/tickets', {signal: ac.signal});
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const data = await res.json();
                setTickets(Array.isArray(data) ? data : []);
            } catch (e) {
                if (e.name !== 'AbortError') setError('Unable to load tickets.');
            } finally {
                setLoading(false);
            }
          })();
          return () => ac.abort();
    }, []);

    const timeoutRef = useRef(null);
    useEffect(() => {
        function tick(){
            setTickets(prev => {
                if (!prev.length) return prev;
                const index = Math.floor(Math.random()* prev.length);
                const changeStatus = Math.random() < 0.55;

                return prev.map((t, i) => {
                    if (i !== index) return t;
                    const updated = {...t};
                    if (changeStatus) {
                        updated.status = nextStatus(t.status);
                    } else {
                        updated.priority = nudgePriority(t.priority);
                    }
                    updated.updatedAt = new Date().toISOString();
                    return updated
                });
            });
            schedule();
        }
        function schedule() {
            const delay = 6000 + Math.floor(Math.random() * 4000);
            timeoutRef.current = setTimeout(tick, delay);
        }
        schedule();
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    const visibleTickets = useMemo(() => {
    const q = search.trim().toLowerCase();
    return tickets.filter(t => {
    const statusOk =
      filters.status === 'All' ||
      t.status.trim().toLowerCase() === filters.status.toLowerCase();

    const priorityOk =
      filters.priority === 'All' ||
      t.priority.trim().toLowerCase() === filters.priority.toLowerCase();

    const searchOk =
      !q ||
      t.title.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q);

    return statusOk && priorityOk && searchOk;
  });
}, [tickets, filters, search]);


    const queuedIds = useMemo (() => Object.keys(queue), [queue]);
    function onAddToQueue(id) {
        setQueue(prev => (prev[id] ? prev : {...prev, [id] : true}));
    }
    function onRemoveFromQueue(id){
        setQueue(prev => {
            const { [id] : _ignore, ...rest} =prev;
            return rest;
        });
    }
    function onClearQueue() {
        setQueue({});
    }
    return (
        <section className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-3">
                <StatusFilter value={filters.status} onChange={val => setFilters(f => ({...f, status: val}))}/>
                    <PriorityFilter value={filters.priority} onChange={val => setFilters(f => ({...f, priority: val}))}/>
                        <SearchBox value={search} onChange={setSearch}/>
            </div>
            <StatusMessage loading={loading} error={error} isEmpty={! loading && !error && visibleTickets.length === 0}/>
            {!loading && !error && visibleTickets.length > 0 && (
                <TicketList tickets={visibleTickets} queueMap= {queue} onAddToQueue={onAddToQueue}/>
            )}
            <MyQueueSummary tickets = {tickets} queuedIds={queuedIds} onRemove={onRemoveFromQueue} onClear={onClearQueue}/>
        </section>
    );
}
