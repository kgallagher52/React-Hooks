import React, { useState } from 'react';
import './App.css';

const App = (props) => {
  const [count, setCount] = useState(props.count)

  return(
    <div>
      <p>Count is {count}</p>
      <button onClick={() => setCount(count + 1)}>increment count</button>
      <button onClick={() => setCount(count - 1)}>decrement count</button>
      <button onClick={() => setCount(props.count)}>reset count</button>

    </div>
  )
}

App.defaultProps = {
  count:0
}

export default App;
