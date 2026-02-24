type Student = {
    id: number,
    name : string, 
    attendance : number
}

type StudentTableProps = {
    students : Student[];
}

function StudentTable({ students } : StudentTableProps) {
  return (
    <>
      <div className="table-wrapper w-full bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mt-6">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border-collapse">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-600">
                  Name
                </th>
                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-600">
                  Attendance %
                </th>
                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-600">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
                {students.map((student) => {

                    let isLow = student.attendance < 75
                    return(
                        <tr key={student.id} className="hover:bg-gray-50 text-center transition duration-150 cursor-pointer">

                            <td className="px-6 py-4 font-medium text-gray-900">
                                {student.name}
                            </td>

                            <td className="px-6 py-4 text-gray-700">
                                {student.attendance}%
                            </td>

                            <td className="px-6 py-4">
                                <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${isLow ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>
                                    {isLow ? "Low" : "Good"}
                                </span>
                            </td>
                        </tr>
                    )})}

            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default StudentTable;
