import StatusBadge from "./StatusBadge";

export type Student = {
  id: number;
  name: string;
  email: string;
  presentToday: boolean;
  attendance: number;
};

type StudentTableProps = {
  students: Student[];
};

function StudentTable({ students }: StudentTableProps) {
  return (
    <>
      <div className="table-wrapper w-full bg-slate-900 rounded-xl shadow-sm border border-slate-800 overflow-hidden mt-6">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border-collapse">
            <thead className="bg-slate-800">
              <tr>
                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-300">
                  #
                </th>
                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Name
                </th>
                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Email
                </th>
                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Attendance %
                </th>
                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {students.map((student) => {

                return (
                  <tr
                    key={student.id}
                    className="hover:bg-gray-700 text-center transition duration-150 cursor-pointer text-slate-200"
                  >

                    <td className="">
                      {student.id}
                    </td>

                    <td className="px-6 py-4 font-medium text-slate-100">
                      {student.name}
                    </td>

                    <td>
                      {student.email}
                    </td>

                    <td className="px-6 py-4 text-slate-300">
                      {student.attendance}%
                    </td>

                    <td className="px-6 py-4">
                      <StatusBadge presentToday={student.presentToday} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default StudentTable;
