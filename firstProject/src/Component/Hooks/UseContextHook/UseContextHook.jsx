import React, { useContext } from 'react'
import { MyContext } from './ContextProvider'

const UseContextHook = () => {


    const useData = useContext(MyContext)

    console.log(useData);

  return (
    <>

    <h1>Use Context</h1>

    
    </>
  )
}

export default UseContextHook