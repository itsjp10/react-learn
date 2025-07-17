import './App.css'
import Hola from './Hola.jsx'
import Counter from './Counter.jsx'
import Formulario from './Formulario.jsx'
import Tarea from './Tarea.jsx'


import { useState } from 'react'

function App() {
  const [person, setPerson] = useState("Mundo")
  const [count, setCount] = useState(0);

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [isDone, setIsdone] = useState(false);

  const [tasks, setTasks] = useState([])

  const changeName = () => {
    setPerson(person == "Mundo" ? "Jean" : "Mundo");
  }

  const createTask = () => { //create the task and update the fields
    console.log('creando task')
    setTasks([...tasks, [name, desc, isDone]])
    setName('')
    setDesc('')
    setIsdone(false)
  }

  const eliminateTask = (id) =>{
    console.log('eliminando task', id);
    const newTasks = tasks.filter((_, index) => index !== id);
    setTasks(newTasks);
  }

  return (
    <>
      {/*primer proyecto*/}
      <Hola person={person}></Hola>
      <button onClick={changeName}></button>

      {/*contador*/}
      <Counter count={count}></Counter>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>+</button>

      {/*ListaTareas*/}
      <h1>Lista de tareas</h1>
      <div className='Tasks'>
        <form>
          <label htmlFor="name">Nombre:</label>
          <input onChange={e => setName(e.target.value)} value={name} type="text" id="name" name="name" />
          <br />
          <label htmlFor="description">Descripción</label>
          <input onChange={e => setDesc(e.target.value)} value={desc} type="text" id="description" name="description" />
          <br />
          <label htmlFor="isDone">¿Terminado?</label>
          <input onChange={e => setIsdone(e.target.checked)} checked={isDone} type="checkbox" id="isDone" name="isDone"></input>
          {console.log(isDone)}
          <button type='button' onClick={createTask}>Crear tarea</button>
          <br />
        </form>

        <ul>
          {tasks.map((task, i) => (
            <Tarea key={i} task={task} isDone={task[2]} eliminateTask={() => eliminateTask(i)} id={i}></Tarea>
          ))}
        </ul>
      </div>



    </>
  )
}

export default App
