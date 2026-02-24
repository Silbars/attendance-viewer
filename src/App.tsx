import StudentTable from "./components/StudentTable";

function App() {
    const students = [
  { id: 1, name: "Arjun", attendance: 92 },
  { id: 2, name: "Meera", attendance: 78 },
  { id: 3, name: "Ravi", attendance: 75 },
  { id: 4, name: "Sneha", attendance: 74 },
  { id: 5, name: "Karan", attendance: 60 },
];
    return(
        <StudentTable students={students}/>
    )
}

export default App