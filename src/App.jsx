import { useState } from 'react'
import './App.css'
//import PaymentValidation from './paymentValidation'
import Main from './react-componentA-componentB-state-management/Main'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
        <Main />
      </section>
      
    </>
  )
}

export default App
