import React from 'react'
import { getUsers } from '../../reduxstudent/saga/actions'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import ProfilePage from '../onboarding/ProfilePage'
import './StudentProfilePage.css'
import NavBar from '../../components/navbar/navbar';

const StudentProfilepage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users)
  const loading = useSelector((state) => state.users.loading)
  const error = useSelector((state) => state.users.error)
  useEffect(() => {
    dispatch(getUsers());
  },[dispatch]);
  return (
    <>
    


        
          {/* <div id='admin-navbar' className='float-start'> */}
            {/* <img src="images/admin-navbar.jpg" alt="navbar" /> */}
          {/* </div>   */}
            <div className='alert alert-success'><h1>STUDENT PROFILE PAGE</h1></div>
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
                  <h5> Name:{users.name}</h5> <br />
                  <h5>User Name:{users.username}</h5> <br />
                  <h5>Branch:{users.branch}</h5> <br />
                  <h5>year:{users.year}</h5> <br />
                  <h5>Phone Number:{users.phoneno}</h5> <br />
                  <h5>Gender:{users.gender}</h5> 
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

export default StudentProfilepage


