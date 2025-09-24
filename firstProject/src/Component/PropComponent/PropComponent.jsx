import React from 'react'

export const PropComponent = ({username, email,age,designation}) => {
  
  
    return (
    <>
        <div style={{border: '2px solid tomato', padding: 20, margin: 40}}>


            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>Age: {age}</p>
            <p>Designation: {designation}</p>





            </div>  


    
    
    
    
    </>
  )
}
