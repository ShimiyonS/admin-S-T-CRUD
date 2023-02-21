import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddStudentPage from "./Componenets/AddStudent";
import AddStaffPage from "./Componenets/AddTeacher";
import EditStudent from "./Componenets/EditStudent";
import EditTeacher from "./Componenets/EditTeacher";
import SchoolAbout from "./Componenets/SchoolAbout";
import ViewStudent from "./Componenets/SProfile";
import TeacherList from "./Componenets/StaffList";
import StudentsList from "./Componenets/StudentList";
import ViewTeacher from "./Componenets/TProfile";
import WelcomePage from "./Componenets/WelcomePage";
import { student } from "./Date/student";
import { teacher } from "./Date/teacher";

function App() {
  const [studentsData, setStudentsData] = React.useState(student);
  const [teachersData, setTeachersData] = React.useState(teacher);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WelcomePage />}></Route>
        <Route
          path="/StudentList"
          element={
            <StudentsList
              studentsData={studentsData}
              setStudentsData={setStudentsData}
            />
          }
        ></Route>

        <Route
          path="/TeacherList"
          element={
            <TeacherList
              teachersData={teachersData}
              setTeachersData={setTeachersData}
            />
          }
        ></Route>
        <Route
          path="/view-student/:id"
          element={<ViewStudent studentsData={studentsData} />}
        ></Route>

        <Route
          path="/view-staff/:id"
          element={<ViewTeacher teachersData={teachersData} />}
        ></Route>

        <Route
          path="/StudentEdit/:id"
          element={
            <EditStudent
              studentsData={studentsData}
              setStudentsData={setStudentsData}
            />
          }
        ></Route>

        <Route
          path="/edit-staff/:id"
          element={
            <EditTeacher
              teachersData={teachersData}
              setTeachersData={setTeachersData}
            />
          }
        ></Route>

        <Route
          path="/add-student"
          element={
            <AddStudentPage
              studentsData={studentsData}
              setStudentsData={setStudentsData}
            />
          }
        ></Route>

        <Route
          path="/add-teacher"
          element={
            <AddStaffPage
              teachersData={teachersData}
              setTeachersData={setTeachersData}
            />
          }
        ></Route>

        <Route path="/about" element={<SchoolAbout />}></Route>
      </Routes>
    </div>
  );
}

export default App;
