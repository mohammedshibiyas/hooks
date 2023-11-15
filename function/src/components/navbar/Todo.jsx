import React,{useState} from 'react'
import Test from './Test'

const Todo = () => {
    const [show,setshow]=useState(true)
    const toggle=()=>{
        setshow(!show)
    }
  return (
    <div>
      {show?<Test/>:null}
      <button onClick={toggle}>toggle</button>
    </div>
  )
}

export default Todo
