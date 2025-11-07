'use client'

export default function SearchBox({ value, onChange}) {
    return (
        <label className= "flex flex-col gap-2">
            <span className="text-sm font-medium">Search</span>
            <input type="text" placeholder="Search title or description..." className="rounded-xl border p-2" value={value} onChange={(e) => onChange(e.target.value)}/>
        </label>
    );
}