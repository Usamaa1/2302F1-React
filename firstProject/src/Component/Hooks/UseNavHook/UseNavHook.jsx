import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router'

 const UseNavHook = () => {


    const navigate = useNavigate()
  const redirectHandler =  ()=> navigate('/')

  return (
    <>
    
    <h1>Use Nav Hook</h1>
    
    <Button variant='dark' onClick={redirectHandler}>Go to Home Page</Button>
    
    </>
  )
}
export default UseNavHook;