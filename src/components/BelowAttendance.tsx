type BelowAttendanceProps = {
    isActive: boolean;
    onToggle: () => void;
}

function BelowAttendance({ isActive, onToggle }: BelowAttendanceProps) {
    function getClassName(isActive2: boolean) {
        const base = "px-4 py-2 text-sm font-medium rounded-md border transition duration-150";
        const active = "bg-indigo-500 border-indigo-500 text-white";
        const inactive = "bg-slate-900 border-slate-700 text-slate-200 hover:bg-slate-800";

        return `${base} ${isActive2 ? active : inactive}`;
    }

    return (
        <div className="flex gap-2">
            <button
                type="button"
                className={getClassName(isActive)}
                onClick={onToggle}
            >
                Show &lt;75%
            </button>
        </div>
    )
    
}

export default BelowAttendance