import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './components/navbar/Nav'
import './App.css'
import Todo from './components/navbar/todo'
import Test from './components/navbar/Test'
import DataFetchingComponent from './components/navbar/Hook'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Nav/> */}
    {/* <Test/> */}
    {/* <Todo/> */}
    <DataFetchingComponent/>
    </>
  )
}

export default App
