import React, { useState,useEffect } from 'react'

const Counter = (props) => {
    const [count, setCount] = useState(props.count)
    const [text, setText] = useState('count')
  
    useEffect(() => {
      document.title = count
    }, [count])

    return (
        <>
        <h1>Counter Component</h1>
        <p>{text} is {count}</p>
        <input value={text} placeholder="Change count" onChange={(e) => setText(e.target.value)}/>
        <button onClick={() => setCount(count + 1)}>increment count</button>
        <button onClick={() => setCount(count - 1)}>decrement count</button>
        <button onClick={() => setCount(props.count)}>reset count</button>
        </>
    )
}

Counter.defaultProps = {
    count:0
  }

export default Counter
