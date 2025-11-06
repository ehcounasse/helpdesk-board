'use client'
export default function StatusMessage({ loading, error, isEmpty}) {
    if (loading) {
        return (
            <div className="rounded-xl border p-4 bg-white">
                <p className="text-sm">Loading...</p>
            </div>
        );
    }
    if(error){
        return(
            <div className="rounded-xl border p-4 bg-red-50">
                <p className="text-sm font-medium text-red-700">Unable to load tickets.</p>
            </div>
        );
    }
    if (isEmpty){
        return(
            <div className="rounded-xl border p-4 bg-white">
                <p className="text-sm">No tickets match your filters</p>
            </div>
        );
    }
    return null;
}