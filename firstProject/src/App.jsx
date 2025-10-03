import React from 'react'
import { PropComponent } from './Component/PropComponent/PropComponent';


const data = [
{
    username: 'Zahid',
    email:'zahid@gmail.com',
    age: 23,
    designation: 'Peon'
},
{
    username: 'Arif',
    email:'arif@gmail.com',
    age: 43,
    designation: 'Peon'
},
{
    username: 'Amjad',
    email:'amjad@gmail.com',
    age: 45,
    designation: 'Peon'
},
]





 const App = () => {
  return (
    <>

    {
        data.map((a,i)=> (

            <PropComponent key={i} username={a.username} designation={a.designation} email={a.email} age={a.age}></PropComponent>
        )
        )
    }
    
    
    </>

  )
}
export default App;