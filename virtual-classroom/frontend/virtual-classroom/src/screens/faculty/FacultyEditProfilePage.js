import React from 'react';
import ReactDOM from 'react-dom';
import { getUsers } from '../../reduxfaculty/saga/actions'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import FacultyNavBar from '../../components/Facultynavbar/Facultynavbar';


function FacultyEditForm() {

    const dispatch = useDispatch();
    const faculties = useSelector((state) => state.faculties.faculties)
    const loading = useSelector((state) => state.faculties.loading)
    const error = useSelector((state) => state.faculties.error)
    useEffect(() => {
      dispatch(getUsers());
    },[dispatch]);
  return (
    <div className="container-fluid" >
      <div className='row'>
        <div className='col-3'>
        <FacultyNavBar/>
        </div>
    <div className='card col-9'>
      
      <form action ="http://localhost:8000/faculty/624afc3974d780ef8eeb50e3" method="POST">
      <label className='form-label'>
          Enter your name:</label>
        <input className='form-control' name ="name" id ="name" type="text"  value={faculties.name}/>
        <label className='form-label'>Enter your username:</label>
        <input className='form-control' name ="username" id ="username" type="text" value={faculties.username}/>
        <label className='form-label'>Enter your branch:</label>
        <input className='form-control' name ="branch" id ="branch" type="text" value={faculties.branch
        }/>
        <label className='form-label'>Enter your year:</label>
        <input className='form-control' name ="year" id ="year" type="text" value={faculties.year} />
        <label className='form-label'>Enter your phone no:</label>
        <input className='form-control' name ="phoneno" id ="phoneno" type="text" value={faculties.phoneno
        } />
        <label className='form-label'>Enter your gender:</label>
        <input className='form-control' name ="gender" id ="gender" type="text" value={faculties.gender} />
      <button className='btn btn-primary' type = "submit" value="submit">SUBMIT</button>
    </form>
    </div>
    </div>
    </div>
  )
}



export default FacultyEditForm
