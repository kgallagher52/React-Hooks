import React, { useState, useEffect } from 'react'

// Can call it what you want but use at the beginning is best practice for custom hooks
const useMousePosition = () => {
  const [position, setPosition] = useState({ x:0,y:0 }) // Fine to store as an object because x & y will always be changed together
    document.addEventListener('mousemove', (e) => { // Right now this will crash because it is calling again ang again 
        setPosition({
            x: e.pageX,
            y: e.pageY
        })
    })
    
    return position // Only cares about the position and if it's updated
}

export default useMousePosition
