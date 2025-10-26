'use client'
import{ useState} from 'react'

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Add one</button>
      <button onClick={() => setCount(count - 1)}>Minus One </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}