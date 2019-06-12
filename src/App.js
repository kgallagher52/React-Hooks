import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0)

  return(
    <div>
      <p>Count is {count}</p>
      <button onClick={() => setCount(count + 1)}>increment count</button>
      <button onClick={() => setCount(count - 1)}>decrement count</button>
    </div>
  )
}

export default App;
