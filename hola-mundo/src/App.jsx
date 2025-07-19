import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState(null)
  const [option, setOption] = useState('')

  useEffect(() => {
    const fetchData = () => {
      fetch(`https://jsonplaceholder.typicode.com/${option}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Respuesta no válida del servidor');
          }
          return response.json();
        })
        .then(json => setData(json))
        .catch(err => console.error('Error al obtener datos:', err));
      console.log('fetching data for ',option)
    }
    fetchData(); // Primer fetch inmediato
    const intervalId = setInterval(fetchData, 5000)

    //Cleanup function
    return () => clearInterval(intervalId)
  }, [option])

  return (
    <>
      <div>
        <button onClick={() => { setOption('users') }} type='button'>Users</button>
        <button onClick={() => { setOption('posts') }} type='button'>Posts</button>
        <button onClick={() => { setOption('comments') }} type='button'>Comments</button>
        <div>
          {data && (data.map((user, i) => (

            <div key={user.id} className='user'>
              <h3>{user.id}</h3>
              <h3>{user.name}</h3>
              <p>{user.username}</p>
              <p>{user.email}</p>
            </div>

          )))
          }

        </div>
      </div>
    </>
  )
}

export default App
