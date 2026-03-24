import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    fetch('http://localhost:8787')
      .then(res => res.text())
      .then(data => setMessage(data))
      .catch(() => setMessage('Failed to connect to API'))
  }, [])

  return (
    <div className="container">
      <h1>Hello, something</h1>
      <p className="response">{message}</p>
    </div>
  )
}

export default App;