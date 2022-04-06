import React from 'react'
import { getUsers } from '../../reduxadmin/saga/actions'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import ProfilePage from '../onboarding/ProfilePage'
import './AdminProfilePage.css'

const AdminProfilePage = () => {
  const dispatch = useDispatch();
  const admins = useSelector((state) => state.admins.admins)
  const loading = useSelector((state) => state.admins.loading)
  const error = useSelector((state) => state.admins.error)
  useEffect(() => {
    dispatch(getUsers());
  },[dispatch]);
  return (
    <>


{/*         
          <div id='admin-navbar' className='float-start'>
            <img src="images/admin-navbar.jpg" alt="navbar" />
          </div>  */}
            <div className='alert alert-success'><h1>ADMIN PROFILE PAGE</h1></div>
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
                  <h5> Name:{admins.name}</h5> <br />
                  <h5>User Name:{admins.username}</h5> <br />
                  <h5>Branch:{admins.branch}</h5> <br />
                  <h5>year:{admins.year}</h5> <br />
                  <h5>Phone Number:{admins.phoneno}</h5> <br />
                
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

export default AdminProfilePage



