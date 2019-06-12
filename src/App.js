import React, { useState, useEffect } from 'react';

//Components
import Notes from './components/Notes';

//Style sheets
import './App.css';

const App = (props) => {
  const [count, setCount] = useState(props.count)
  const [text, setText] = useState('count')

  useEffect(() => {
    document.title = count
  }, [count])

  return(
    <div>
      <Notes/>
      <p>{text} is {count}</p>
      <input value={text} placeholder="Change count" onChange={(e) => setText(e.target.value)}/>
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
