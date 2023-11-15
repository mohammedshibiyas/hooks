import React, { useState } from 'react'

const Nav = () => {
    const[val,setval]=useState({
        name:"",
        email:"",
        phone:"",
        pincode:""
    })

    const handlechange=(e)=>{
        setval((pre)=>{
            return {...pre,[e.target.name]:e.target.value}
        })
    }
    console.log("name is",val.name,"email is",val.email,"phone is",val.phone,"pincode is",val.pincode);
  return (
    <div>
      {/* <button onClick={()=>setval(val+1)}>Count {val}</button> */}
      <input type="text" name='name' onChange={handlechange} placeholder='name' />
      <input type="text" name='email' onChange={handlechange} placeholder='email' />
      <input type="text" name='phone' onChange={handlechange} placeholder='phone' />
      <input type="text" name='pincode' onChange={handlechange} placeholder='pincode' />
    </div>
  )
}

export default Nav
