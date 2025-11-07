'use client';

const OPTIONS = ['All', 'Low', 'Medium', 'High', 'Critical'];

export default function PriorityFilter({value, onChange}) {
    return (
        <label className="flex flex-col gap-2">
            <span className="text-sm font-medium">Priority</span>
            <select className="rounded-xl border p-2" value={value} onChange={(e) => onChange(e.target.value)}>
                {OPTIONS.map(opt => (
                    <option key = {opt} value={opt}>{opt}</option>
                ))}
            </select>
        </label>
    );
}