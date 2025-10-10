import React, { createContext } from 'react'

export const MyContext = createContext();


const userData = 
{
    name: "Arif",
    email: "arif@gmail.com",
    age: 23
}

const ContextProvider = ({children}) => {
    
  return (   
   <MyContext.Provider value={userData}>
        {children}
   </MyContext.Provider>
  )
}

export default ContextProvider