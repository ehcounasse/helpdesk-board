'use client';

const OPTIONS = ['All', 'Low', 'Medium', 'High', 'Critical'];

export default function PriorityFilter({value, onChange}) {
    return (
        <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-white">Priority</span>
            <select className="rounded-xl border px-3 py-2 text-sm text-white" value={value} onChange={(e) => onChange(e.target.value)}>
                {OPTIONS.map(opt => (
                    <option key = {opt} value={opt}>{opt}</option>
                ))}
            </select>
        </label>
    );
}