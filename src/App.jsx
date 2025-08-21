import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)

  return (
    <div className="App">
      <div className="card">
        <h1>Counter App</h1>
        <div className="counter-display">
          <span className="count-value" data-testid="counter-value">{count}</span>
        </div>
        <div className="button-group">
          <button 
            onClick={decrement} 
            className="counter-btn decrement"
            data-testid="decrement-button"
          >
            -
          </button>
          <button 
            onClick={reset} 
            className="counter-btn reset"
            data-testid="reset-button"
          >
            Reset
          </button>
          <button 
            onClick={increment} 
            className="counter-btn increment"
            data-testid="increment-button"
          >
            +
          </button>
        </div>
        <p className="description">
          Click the buttons to change the counter value
        </p>
      </div>
    </div>
  )
}

export default App