type StudentTableProps = {
    all : number,
    present : number,
    absent : number
}

function StudentStats({all, present, absent} : StudentTableProps) {
    return (
        <div className="flex gap-4">
        <div className="text-lg h-12 shadow-sm bg-slate-800 border border-white-700 rounded-lg flex items-center px-4 text-slate-100">All - {all}</div>
        <div className="text-lg h-12 shadow-sm bg-slate-800 border border-white-900 rounded-lg flex items-center px-4 text-slate-200">Present - {present}</div>
        <div className="text-lg h-12 shadow-sm bg-slate-800 border border-white-900 rounded-lg flex items-center px-4 text-slate-100">Absent - {absent}</div>
        </div>
    )
}

export default StudentStats