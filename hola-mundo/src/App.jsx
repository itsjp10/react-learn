import './App.css'


import { useState, useEffect } from 'react'

function App() {

  const [isStopped, setIsStopped] = useState(true)
  let [counter, setCounter] = useState(0 )

  function count(){
    setCounter(counter + 1)
  }

  useEffect(()=>{
    setInterval(count, 1000)
  }, [isStopped])

  return (
    <>
      <div>
        <h1>Cronometro</h1>
        <button type='button' onClick={()=>{setIsStopped(isStopped ? false : true)}}>{isStopped ? 'Iniciar' : 'Reanudar'}</button>
        <p>{counter}</p>
      </div>
    </>
  )
}

export default App
