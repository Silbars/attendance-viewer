import FilterButtons from "./components/FilterButtons";
import Header from "./components/Header"
import PageContainer from "./components/PageContainer";
import StudentTable from "./components/StudentTable";

function App() {
    const students = [
  { id: 1, name: "Arjun", attendance: 92 },
  { id: 2, name: "Meera", attendance: 89 },
  { id: 3, name: "Ravi", attendance: 73 },
  { id: 4, name: "Sneha", attendance: 75 },
  { id: 5, name: "Karan", attendance: 60 },
];
    return(
        <PageContainer>
            <Header/>
            <FilterButtons/>
            <StudentTable students={students}/>
        </PageContainer>
        
    )
}

export default App