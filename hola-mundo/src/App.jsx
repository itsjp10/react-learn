import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState(null)

  const handleUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setData(json))
  }


  return (
    <>
      <div>
        <button onClick={handleUsers} type='button'>Users</button>
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
