type StudentTableProps = {
    all : number,
    present : number,
    absent : number
}

function StudentStats({all, present, absent} : StudentTableProps) {
    return (
        <div className="flex gap-2 sm:gap-4">
        <div className="text-xs sm:text-lg h-8 sm:h-12 shadow-sm bg-slate-800 border border-slate-700 rounded-lg flex items-center px-2 sm:px-4 text-slate-100">All - {all}</div>
        <div className="text-xs sm:text-lg h-8 sm:h-12 shadow-sm bg-slate-800 border border-slate-700 rounded-lg flex items-center px-2 sm:px-4 text-slate-200">Present - {present}</div>
        <div className="text-xs sm:text-lg h-8 sm:h-12 shadow-sm bg-slate-800 border border-slate-700 rounded-lg flex items-center px-2 sm:px-4 text-slate-100">Absent - {absent}</div>
        </div>
    )
}

export default StudentStats