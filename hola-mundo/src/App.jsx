import './App.css'


import { useState, useEffect, useRef } from 'react'

function App() {

  const [isStopped, setIsStopped] = useState(true)
  let [counter, setCounter] = useState(0)
  const intervalRef = useRef(null)
  const [isDark, setIsDark] = useState(false)

  function count() {
    setCounter(prev => prev + 1)
  }

  function handleReiniciar(){
    setIsStopped(true)
    setCounter(0)
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

  //class for moon is bi bi-moon
  //class for sun is bi bi-sun

  return (
    <>
      <div className={isDark ? 'dark': 'light'}>
        <button className={isDark ? 'Bdark': 'Blight'} type='button' onClick={() => {setIsDark(isDark ? false : true)}}><i class={isDark ? 'bi bi-sun' : 'bi bi-moon'}></i></button>      
        <h1 className={isDark ? 'Tdark': 'Tlight'}>Cronometro</h1>
        <button className={isDark ? 'Bdark': 'Blight'} type='button' onClick={() => { setIsStopped(isStopped ? false : true) }}>{isStopped ? 'Iniciar' : 'Parar'}</button>
        <p className={isDark ? 'Tdark': 'Tlight'}>{counter}</p>
        <button className={isDark ? 'Bdark': 'Blight'} type='button' onClick={handleReiniciar}>Reiniciar</button>

      </div>
    </>
  )
}

export default App
