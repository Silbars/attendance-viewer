import { useEffect, useState } from "react";
import FilterButtons from "./components/FilterButtons";
import type { FilterType } from "./components/FilterButtons";
import type { Student } from "./components/StudentTable"
import type { SortType } from "./components/Sort";
import Header from "./components/Header"
import PageContainer from "./components/PageContainer";
import StudentTable from "./components/StudentTable";
import StudentStats from "./components/StudentsStats";
import BelowAttendance from "./components/BelowAttendance";
import Sort from "./components/Sort";

function App() {
    const [activeFilter, setActiveFilter] = useState<FilterType>("all");
    const [students, setStudents] = useState<Student[]>([]);
    const [show75, setShow75] = useState(false); 
    const [sortType, setSortType] = useState<SortType>("none")

    useEffect(() => {
        fetch(new URL("./api/students.json", import.meta.url).href)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Failed to fetch students: ${res.status}`);
                }
                return res.json();
            })
            .then((data: { students: Student[] }) => setStudents(data.students))
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const allStuds = students.length;
    const presentStuds = students.filter(student => student.presentToday === true).length;
    const absentStuds = allStuds - presentStuds;

    const filteredStudents = students.filter((student) => {
        if (activeFilter === "all") {
            return true;
        }

        if (activeFilter === "present") {
            return student.presentToday;
        }

        return !student.presentToday;
    });

    const below75Students = filteredStudents.filter(student => {
        if (show75) {
            return student.attendance < 75;
        }
        return true;
    }); 

    const sortedStudents = [...below75Students].sort((a, b) => {
        if (sortType === "ascending") {
            return a.attendance - b.attendance;
        }

        if (sortType === "descending") {
            return b.attendance - a.attendance;
        }

        return 0;
    });

    return(
        <PageContainer>
            <div className="mb-8 pb-4 border-b border-slate-800 flex justify-between">
            <Header/> 
            <StudentStats all={allStuds} present={presentStuds} absent={absentStuds}/>
            </div>
            <div className="flex justify-between">
                <FilterButtons activeFilter={activeFilter} onFilterChange={setActiveFilter} />
                <div className="flex gap-2">
                    <BelowAttendance isActive={show75} onToggle={() => setShow75((prev) => !prev)} />
                    <Sort sortType={sortType} onSort={setSortType} />
                </div>
            </div>
            <StudentTable students={sortedStudents}/>
        </PageContainer>
        
    )
}

export default App