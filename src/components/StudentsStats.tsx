type StudentTableProps = {
    all : number,
    present : number,
    absent : number
}

function StudentStats({all, present, absent} : StudentTableProps) {
    return (
        <div className="flex gap-4">
        <div className="text-lg bg-white border rounded flex items-center px-4">All - {all}</div>
        <div className="text-lg bg-white border rounded flex items-center px-4">Present - {present}</div>
        <div className="text-lg bg-white border rounded flex items-center px-4">Absent - {absent}</div>
        </div>
    )
}

export default StudentStats