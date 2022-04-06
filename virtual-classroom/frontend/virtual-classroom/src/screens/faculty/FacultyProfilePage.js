import React from 'react'
import { getUsers } from '../../reduxfaculty/saga/actions'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import ProfilePage from '../onboarding/ProfilePage'
// import './FacultyProfilePage.css'

const FacultyProfilePage = () => {
  const dispatch = useDispatch();
  const faculties = useSelector((state) => state.faculties.faculties)
  const loading = useSelector((state) => state.faculties.loading)
  const error = useSelector((state) => state.faculties.error)
  useEffect(() => {
    dispatch(getUsers());
  },[dispatch]);
  return (
    <>


{/*         
          <div id='admin-navbar' className='float-start'>
            <img src="images/admin-navbar.jpg" alt="navbar" />
          </div>  */}
            <div className='alert alert-success'><h1> FACULTY PROFILE PAGE</h1></div>
            {loading && <h2>Loading...</h2>}
            { error &&!loading && <h2>{error}</h2>}


            
      <div className="row mt-5">
            {
              // users.map((user, i) => (
              <>
                {/* <h1 key={i}></h1> */}
                <div className="col-md-2" id='profile_image'>
                  <img className='img-thumbnail' src="/images/profileImg.jpg" alt="" />
                </div>
                <div className="col-md-5">
                  <h5> Name:{faculties.name}</h5> <br />
                  <h5>User Name:{faculties.username}</h5> <br />
                  <h5>Branch:{faculties.branch}</h5> <br />
                  <h5>year:{faculties.year}</h5> <br />
                  <h5>Phone Number:{faculties.phoneno}</h5> <br />
                
                </div>
                <div className="col-md-5">
                  {/* <h5>Address:{users.address.street},{users.address.city},{users.address.state},{users.address.country}</h5> <br /> */}
                  
                </div>
              </>
              // ))
            }
        
        </div>

            
        
    
  
      

    
    
    
    
    </>
    
  )
}

export default FacultyProfilePage