import React from 'react';
import ReactDOM from 'react-dom';
import { getUsers } from '../../reduxadmin/saga/actions'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import AdminNavBar from '../../components/adminnavbar/adminnavbar';



function AdminEditForm() {

    const dispatch = useDispatch();
    const admins = useSelector((state) => state.admins.admins)
    const loading = useSelector((state) => state.admins.loading)
    const error = useSelector((state) => state.admins.error)
    useEffect(() => {
      dispatch(getUsers());
    },[dispatch]);
  return (
    <div className="container-fluid" >
    <div className='row'>
      <div className='col-3'>
      <AdminNavBar/>
      </div>
  <div className='card col-9'>
    
      
      <form action ="http://localhost:8000/admin/62434725bddc4f3d46cf9064" method="POST">
      <label className='form-label'>
          Enter your name:</label>
        <input className='form-control' name ="name" id ="name" type="text"  value={admins.name}/>
        <label className='form-label'>Enter your username:</label>
        <input className='form-control' name ="username" id ="username" type="text" value={admins.username}/>
        <label className='form-label'>Enter your branch:</label>
        <input className='form-control' name ="branch" id ="branch" type="text" value={admins.branch
        }/>
        <label className='form-label'>Enter your year:</label>
        <input className='form-control' name ="year" id ="year" type="text" value={admins.year} />
        <label className='form-label'>Enter your phone no:</label>
        <input className='form-control' name ="phoneno" id ="phoneno" type="text" value={admins.phoneno
        } />
        <label className='form-label'>Enter your gender:</label>
        <input className='form-control' name ="gender" id ="gender" type="text" value={admins.gender} />
      <button className='btn btn-primary' type = "submit" value="submit">SUBMIT</button>
    </form>
    </div>
    </div>
    </div>
  )
}



export default AdminEditForm
