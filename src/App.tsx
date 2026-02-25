import { useEffect, useState } from "react";
import FilterButtons from "./components/FilterButtons";
import type { FilterType } from "./components/FilterButtons";
import type { Student } from "./components/StudentTable"
import Header from "./components/Header"
import PageContainer from "./components/PageContainer";
import StudentTable from "./components/StudentTable";
import StudentStats from "./components/StudentsStats";

function App() {
    const [activeFilter, setActiveFilter] = useState<FilterType>("all");
    const [students, setStudents] = useState<Student[]>([]);

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
    let presentStuds = students.filter(student => student.presentToday === true).length;
    let absentStuds = allStuds - presentStuds;

    const filteredStudents = students.filter((student) => {
        if (activeFilter === "all") {
            return true;
        }

        if (activeFilter === "present") {
            return student.presentToday;
        }

        return !student.presentToday;
    });

    return(
        <PageContainer>
            <div className="mb-8 pb-4 border-b border-gray-200 flex justify-between">
            <Header/> 
            <StudentStats all={allStuds} present={presentStuds} absent={absentStuds}/>
            </div>
            <FilterButtons activeFilter={activeFilter} onFilterChange={setActiveFilter} />
            <StudentTable students={filteredStudents}/>
        </PageContainer>
        
    )
}

export default App