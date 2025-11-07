'use client';

const OPTIONS = ['All', 'Open', 'In Progress', 'On Hold', 'Resolved'];

export default function PriorityFilter({value, onChange}) {
    return (
        <label className="flex flex-col gap-2">
            <span className="text-sm font-medium">Status</span>
            <select className="rounded-xl border p-2" value={value} onChange={(e) => onChange(e.target.value)}>
                {OPTIONS.map(opt => (
                    <option key = {opt} value={opt}>{opt}</option>
                ))}
            </select>
        </label>
    );
}