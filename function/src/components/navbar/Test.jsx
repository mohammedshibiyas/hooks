import React, { useEffect } from 'react'

const Test = () => {
    useEffect(()=>{
        console.log("test running");
        return()=>{
            console.log("unmount");
        }
    },[])
  return (
    <div>
      <h1>hello</h1>
    </div>
  )
}

export default Test
