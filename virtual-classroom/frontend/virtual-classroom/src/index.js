import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './index.css';
import App from './App';
import AdminProfilePage from './screens/admin/AdminProfilePage';
 import StudentProfilepage from './screens/student/StudentProfilepage';
 import FacultyProfilePage from './screens/faculty/FacultyProfilePage';
//  import Edit from '/StudentEdit';
import MyForm from './screens/student/Edit';
import AdminEditForm from './screens/admin/AdminEditProfilePage';
import FacultyEditForm from './screens/faculty/FacultyEditProfilePage';

import rootsaga from './rootsaga';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import reportWebVitals from './reportWebVitals';
// import store from './redux/store'
import { Provider } from "react-redux";

import studentrootSaga from './reduxstudent/saga/sagas/studentrootSaga'
import adminrootSaga from './reduxadmin/saga/sagas/adminrootSaga'
import { createStore, applyMiddleware } from "redux"

import createSagaMiddleware from "redux-saga"
import combinereducers from './combinereducers';
import users from "./reduxstudent/saga/reducer";
import admins from './reduxadmin/saga/reducer';
import Login from './screens/login/login';
import StudentRegistration from './screens/student/StudentRegistration';
import FacultyRegistration from './screens/faculty/FacultyRegistration';
// import rootsaga from './rootsaga';
const sagaMiddleWare = createSagaMiddleware();
const store = createStore(combinereducers,applyMiddleware(sagaMiddleWare))

sagaMiddleWare.run(rootsaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <BrowserRouter>
      {/* <AdminProfilePage /> */}
      {/* <StudentProfilepage/> */}
      {/* <FacultyProfilePage/> */}
      {/* <MyForm /> */}
      
        <Routes>
          <Route path="/" element= {<App />}></Route>
           <Route path="/login" element={<Login />}></Route> 
          <Route path="/studentRegistration" element={<StudentRegistration />}></Route>
          <Route path="/StudentEdit" element={<MyForm />}></Route>
          <Route path="/AdminEdit" element={<AdminEditForm />}></Route>
          <Route path="/FacultyEdit" element={<FacultyEditForm />}></Route>
          <Route path="/facultyRegistration" element={<FacultyRegistration />}></Route>
          <Route path="/FacultyHome" element={<FacultyProfilePage />}></Route>
          <Route path="/AdminHome" element={<AdminProfilePage />}></Route>
          <Route path="/StudentHome" element={<StudentProfilepage />}></Route>
          
        </Routes>
      </BrowserRouter>

    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

