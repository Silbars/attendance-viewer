import { useEffect, useState } from "react";
import FilterButtons from "./components/FilterButtons";
import type { FilterType } from "./components/FilterButtons";
import type { Student } from "./components/StudentTable"
import Header from "./components/Header"
import PageContainer from "./components/PageContainer";
import StudentTable from "./components/StudentTable";

function App() {
    const [activeFilter, setActiveFilter] = useState<FilterType>("all");
    const [students, setStudents] = useState<Student[]>([]);

    useEffect(() => {
        fetch("./api/students.json")
            .then((res) => res.json())
            .then((data: { students: Student[] }) => setStudents(data.students));
    }, []);

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
            <Header/>
            <FilterButtons activeFilter={activeFilter} onFilterChange={setActiveFilter} />
            <StudentTable students={filteredStudents}/>
        </PageContainer>
        
    )
}

export default App