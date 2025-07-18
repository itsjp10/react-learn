import './App.css'


import { useState, useEffect, useRef } from 'react'

function App() {

  const [isStopped, setIsStopped] = useState(true)
  let [counter, setCounter] = useState(0)
  const intervalRef = useRef(null)

  function count() {
    setCounter(prev => prev + 1)
  }

  useEffect(() => {
    if (!isStopped) {
      console.log('Starting interval')
      intervalRef.current = setInterval(count, 1)
    } else {
      console.log('Stopping interval')
      clearInterval(intervalRef.current)
    }
    return () => {
      clearInterval(intervalRef.current)
    }
  }, [isStopped])

  return (
    <>
      <div>
        <h1>Cronometro</h1>
        <button type='button' onClick={() => { setIsStopped(isStopped ? false : true) }}>{isStopped ? 'Iniciar' : 'Reanudar'}</button>
        <p>{counter}</p>
      </div>
    </>
  )
}

export default App
