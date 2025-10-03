import React, { useState } from 'react'

 const UseStateHook = () => {
//   let count = 0;

const [isCount,setCount] = useState(0);

  function countHandler(){
    console.log(isCount)
   setCount(isCount+1)
  }  

    return (
    <>

        <p>{isCount}</p>
        <button onClick={countHandler}>Increment</button>
    </>
  )
}
export default UseStateHook;

// import React from 'react'

// const UseStateHook = () => {
//   return (
//     <div>UseStateHook</div>
//   )
// }

// export default UseStateHook