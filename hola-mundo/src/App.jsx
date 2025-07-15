import './App.css'
import Hola from './Hola.jsx'
import Counter from './Counter.jsx'
import Formulario from './Formulario.jsx'
import { useState } from 'react'

function App() {
  const [person, setPerson] = useState("Mundo")
  const [count, setCount] = useState(0);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
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

      {/*formulario*/}      
      <h1>Formulario padre</h1>
            <form>
                <label htmlFor="name">Nombre:</label>
                <input onChange={e => setName(e.target.value)} value={name} type="text" id="name" name="name" />
                <br />
                <label htmlFor="email">Email:</label>
                <input onChange={e => setEmail(e.target.value)} value={email} type="email" id="email" name="email" />
                <br />
                <label htmlFor="message">Mensaje:</label>
                <textarea  onChange={e => setMessage(e.target.value)} value={message} id="message" name="message"></textarea>
                <br />
            </form>
      <Formulario name={name} email={email} message={message}></Formulario>

    </>
  )
}

export default App
