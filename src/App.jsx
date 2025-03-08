import { useState } from 'react'
import doggoLogo from './assets/doggo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">

        </a>
        <a  target="_blank">
          <img src={doggoLogo} className="logo react" alt="React logo"/>
        </a>
      </div>
      <h1>Doggo App Version 1.0</h1>
      <div className="card">
      </div>
    </>
  )
}

export default App
