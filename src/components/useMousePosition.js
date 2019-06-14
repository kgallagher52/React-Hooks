// Custom HOOK
import { useState, useEffect } from 'react'

// Can call it what you want but use at the beginning is best practice for custom hooks
const useMousePosition = () => {
    const [position, setPosition] = useState({ x:0,y:0 }) // Fine to store as an object because x & y will always be changed together

    useEffect(() => {
        const handleMouseEvent = (e) => {
            setPosition({
                x: e.pageX,
                y: e.pageY
            })
        }
    document.addEventListener('mousemove', handleMouseEvent)

    return () => {
        document.removeEventListener('mousemove', handleMouseEvent)
    }
    },[])
  
    return position // Only cares about the position and if it's updated
}

export default useMousePosition
