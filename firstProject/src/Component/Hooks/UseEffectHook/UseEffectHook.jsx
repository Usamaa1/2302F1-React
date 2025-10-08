import React, { useEffect, useRef, useState } from 'react'

const UseEffectHook = () => {


    // const [isCount, setCount] = useState(0);
    // const [isCount1, setCount1] = useState(0);

    // const incrementHandler = ()=>{
    //     setCount(isCount + 1);
    // }
    // const decrementHandler = ()=>{
    //     setCount1(isCount1 - 1);
    // }

    // useEffect(()=>{
    //     console.log(isCount);
    // })

    // useEffect(()=>{
    //     console.log(isCount);
    // },[])


    // useEffect(()=>{
    //     console.log(isCount);

    //     return ()=>{
    //         console.log("Clean up Function")
    //     }

    // },[isCount1])



    // Form Submission

    const [firstName,setFirstName] = useState(()=>{
 
       return JSON.parse(localStorage.getItem('formData')).firstName
    });
    const [lastName,setLastName] = useState(()=>{
 
        return JSON.parse(localStorage.getItem('formData')).lastName
     });
    const [email,setEmail] = useState(()=>{

        return JSON.parse(localStorage.getItem('formData')).email
     });

    //  useEffect(()=>{
    //     console.log(JSON.parse(localStorage.getItem('formData')).firstName)
    //  })


    useEffect(()=>{
        localStorage.setItem('formData',JSON.stringify({firstName,lastName,email}))
    },[firstName,lastName,email])







    return (
        <>

            {/* <p>Count: {isCount}</p>
        <p>Count 1: {isCount1}</p>
        <button className='btn btn-primary' onClick={incrementHandler}>Increment</button>
        <button className='btn btn-primary' onClick={decrementHandler}>Decrement</button> */}


            <form action="">
                <div className="m-3">
                    First Name: <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)} className='form-control' />
                </div>
                <div className="m-3">
                    Last Name: <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} className='form-control'  />
                </div>
                <div className="m-3">
                    Email: <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control' />
                </div>
                <button className='btn btn-primary' onClick={(e) => submitHandler(e)}>Submit</button>
            </form>


        </>
    )
}

export default UseEffectHook