import React from 'react';
import ReactDOM from 'react-dom';
import { getUsers } from '../../reduxstudent/saga/actions'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import NavBar from '../../components/navbar/navbar';



function MyForm() {

    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users)
    const loading = useSelector((state) => state.users.loading)
    const error = useSelector((state) => state.users.error)
    useEffect(() => {
      dispatch(getUsers());
    },[dispatch]);
  return (
    <div className="container-fluid" >
      <div className='row'>
        <div className='col-3'>
        <NavBar/>
        </div>
    <div className='card col-9'>
      
      <form action ="http://localhost:8000/student/624480aff5cf7bb1d5f5adff" method="POST">
      <label className='form-label'>
          Enter your name:</label>
        <input className='form-control' name ="name" id ="name" type="text"  value={users.name}/>
        <label className='form-label'>Enter your username:</label>
        <input className='form-control' name ="username" id ="username" type="text" value={users.username}/>
        <label className='form-label'>Enter your branch:</label>
        <input className='form-control' name ="branch" id ="branch" type="text" value={users.branch
        }/>
        <label className='form-label'>Enter your year:</label>
        <input className='form-control' name ="year" id ="year" type="text" value={users.year} />
        <label className='form-label'>Enter your phone no:</label>
        <input className='form-control' name ="phoneno" id ="phoneno" type="text" value={users.phoneno
        } />
        <label className='form-label'>Enter your gender:</label>
        <input className='form-control' name ="gender" id ="gender" type="text" value={users.gender} />
      <button className='btn btn-primary' type = "submit" value="submit">SUBMIT</button>
    </form>
    </div>
    </div>
    
    </div>
  )
}



export default MyForm
