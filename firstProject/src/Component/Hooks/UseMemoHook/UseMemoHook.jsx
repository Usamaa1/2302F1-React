import React, {useMemo, useState} from 'react'


function calculate() {
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    return result;
  }


const UseMemoHook = () => {

    const [count, setCount] = useState(0);
    const [second,setSecond] = useState(0)
    // const value = calculate();

    const value = useMemo(calculate,[second])



  return (
    <>
    
    <div className="App">
      <button className='btn btn-primary' onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Count: {count}</p>
    </div>
    
    
    </>
  )
}

export default UseMemoHook