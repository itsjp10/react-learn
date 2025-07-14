import './App.css'
import Hola from './Hola.jsx'
import { useState } from 'react'

function App() {
  const [person, setPerson] = useState("Mundo")
  
  const handleClick = () =>{
    setPerson(person == "Mundo" ? "Jean" : "Mundo");
  }

  return (
    <>
      <Hola person={person}></Hola>
      <button onClick={handleClick}></button>
    </>
  )
}

export default App
