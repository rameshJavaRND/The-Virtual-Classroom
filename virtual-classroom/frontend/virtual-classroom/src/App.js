
import './App.css';
// import FacultyRegistration from './screens/faculty/FacultyRegistration';
// import StudentRegistration from './screens/student/StudentRegistration';
import AdminProfilePage from './screens/admin/AdminProfilePage';
import StudentProfilepage from './screens/student/StudentProfilepage';
import NavBar from './components/navbar/navbar';
import AdminNavBar from './components/adminnavbar/adminnavbar';
import FacultyNavBar from './components/Facultynavbar/Facultynavbar';
import FacultyProfilePage from './screens/faculty/FacultyProfilePage';

import Login from './screens/login/login';
function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <FacultyRegistration /> */}
      {/* <StudentRegistration /> */}
      <div className="container-fluid">
      <div className="row">
        <div className="col-3">
          {/* <AdminNavBar/> */}
          {/* <FacultyNavBar/> */}
           <NavBar /> 
        </div>
        <div className="col-9">
          {/* <AdminProfilePage /> */}
          {/* <FacultyProfilePage/> */}
          <StudentProfilepage />

        </div>
      </div>
      </div>
      
    </div>
  );
}

export default App;
