import './App.css'
import Hola from './Hola.jsx'
import Counter from './Counter.jsx'
import { useState } from 'react'

function App() {
  const [person, setPerson] = useState("Mundo")
  const [count, setCount] = useState(0);
  
  const changeName = () =>{
    setPerson(person == "Mundo" ? "Jean" : "Mundo");
  }

  return (
    <>
      {/*primer proyecto*/}
      <Hola person={person}></Hola>
      <button onClick={changeName}></button>

      {/*contador*/}
      <Counter count={count}></Counter>
      <button onClick={() => setCount(count-1)}>-</button>
      <button onClick={()=> setCount(0)}>Reset</button>
      <button onClick={()=> setCount(count+1)}>+</button>
    </>
  )
}

export default App
