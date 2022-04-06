import React, { useState, useEffect } from 'react'
import { Outlet, Link } from "react-router-dom";
import './signup.css'
import validation from './signupValidation'
// import studentImg from "../../assets/images/student (1).png";
// import teacherImg from "../../assets/images/woman.png";

const Signup = ({regBy}) => {
  
    const [image, setImage] = useState('')

    useEffect(() => {
        if (regBy === 'student') {
            setImage('images/student (1).png'); 
        }
        else if (regBy === 'faculty') {
            setImage('images/woman.png');  
        }
       }, [regBy]);
   
    return (
    <>
    <h1 className="my-4 text-center text-uppercase"> {regBy} REGISTRATION</h1>
        <div className="mx-auto card mt-3 py-2">
            <div id="icon_circle" className='mx-auto px-5 py-3'>
                <img src={image} alt={image} id="image-content"/>
            </div>
            <div className="card-body">
                <div className="alert alert-danger" id="error_msg"></div>
                <form className='novalidate'>
                    <div className="row">
                        <div className="col-6">
                            <input type="text" className="form-control" required placeholder='Name' id='name'/> <br />
                    
                            <input type="email" className="form-control" required placeholder='Username(abc@xyz.com)' id='username'/> <br />
                    
                            <input type="password" className="form-control" required placeholder='Password' minLength={8} id='password'/> <br />
                    
                        </div>

                        <div className="col-6">
                          
                            <input type="tel" oninput="this.setCustomValidity('')" pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}' className="form-control" required placeholder='Phone Number(111-33-555)' id='pno'/> <br />
                    
                            <input type="text" className="form-control" required placeholder='Subject' id='subject'/> <br />
                    
                            <input type="text" className="form-control" required placeholder='Branch' id='branch'/> <br />
                    
                        </div>
                        <button type="submit" className='btn btn-primary' onClick={validation}> REGISTER</button>
                    </div>
                    
                </form>
                <div className='mt-3'>
                    <Link to={`/login`}>Have an id? Login Here</Link>
                    <Outlet />
                </div>
               
            </div>
        </div>  
    </>
  )
}

export default Signup