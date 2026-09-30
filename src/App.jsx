import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const total = 5
  const [disponibles, setDisponibles] = useState(total)
  // const [count, setCount] = useState(67)

  function prestar() {
    setDisponibles((d) => d > 0 ? d - 1 : d)
  }

  function devolver() {
    setDisponibles((d) => d < total ? d + 1 : d)
  }

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Mi primera app</h1>
          <p>
            Marco Antonio Beltrán Rosales 
          </p>
        </div>

        <main>
          <h2>Raspberry Pi 5</h2>
          <p>{disponibles} de {total} disponibles</p>
          <button type="button" onClick={prestar} disabled={disponibles === 0}>
            Prestar
          </button>
          <button type="button" onClick={devolver} disabled={disponibles === total}>
            Devolver
          </button>
        </main>

      </section>

    </>
  )
}

export default App