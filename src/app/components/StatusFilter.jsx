'use client';

const OPTIONS = ['All', 'Open', 'In Progress', 'On Hold', 'Resolved'];

export default function StatusFilter({value, onChange}) {
    return (
        <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-white">Status</span>
            <select className="rounded-xl border px-3 py-2 text-sm text-white" value={value} onChange={(e) => onChange(e.target.value)}>
                {OPTIONS.map(opt => (
                    <option key = {opt} value={opt}>{opt}</option>
                ))}
            </select>
        </label>
    );
}