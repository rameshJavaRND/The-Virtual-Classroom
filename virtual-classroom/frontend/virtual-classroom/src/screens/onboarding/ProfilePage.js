import React from 'react'

const ProfilePage = ({profileOf}) => {
  return (
    <>
        <h1>{profileOf} PROFILE PAGE</h1>
        <div className="row mt-5">
            <div className="col-md-6">Name: //ADMIN NAME</div>
            <div className="col-md-6">Category: //ADMIN</div>
        </div>
    </>
  )
}

export default ProfilePage