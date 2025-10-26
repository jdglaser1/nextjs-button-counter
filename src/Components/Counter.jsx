'use client'
import{ useState} from 'react'

// Here I added the props
export default function Counter({initialCount = 0, initialStep = 1}) {
  const [count, setCount] = useState(initialCount)
  const [step, setStep] = useState(initialStep)

  // Below i added the aria accessability and the buttons
  return (
    <div>
      <h2 aria-live="polite"> {count} Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Add one</button>
      <button onClick={() => setCount(count - 1)}>Minus One </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}