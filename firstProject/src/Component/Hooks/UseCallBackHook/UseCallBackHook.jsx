import React, { useCallback, useState } from 'react'

 const UseCallBackHook = () => {
  
  
  

  
  
  
  
      const [count, setCount] = useState(2);
  

    const handleClick = useCallback(()=>{
 
        setCount(count+10);

    },[count])
  
  
  
    return (
      <>
      
      <div className="App">
        <button className='btn btn-primary' onClick={handleClick}>Increment Count</button>
        <p>Count: {count}</p>
      </div>
      
      
      </>
    )
}
export default UseCallBackHook