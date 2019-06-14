import React, { useEffect, useReducer } from 'react'

//components
import Note from './Note'
import notesReducer from './notesReducer'
import AddNote from './AddNote'
import useMousePosition from './useMousePosition'
import NotesContext from './context/NotesContext'


//Styling
const notesContainer = {
    display:'inline-block',
  
} 

const Notes = () => {
    const [notes, dispatch] = useReducer(notesReducer, [])
    const position = useMousePosition() //Custom hook

    useEffect(() => {
        const notes = JSON.parse(localStorage.getItem('notes'))
        if(notes) {
            dispatch({
                type:'POPULATE_NOTES',
                notes
            })
        } 
    },[])
    
    useEffect(() => {
       const storeNote =  () => {
           localStorage.setItem('notes', JSON.stringify(notes)) 
       } 

       return (() => {
            storeNote()
       })       
    },[notes])


    return (
        <NotesContext.Provider value={{ notes,dispatch }} style={notesContainer} >
            <p>Mouse Position:{position.x}|{position.y}</p>
            <Note />
            <AddNote/>
        </NotesContext.Provider>
    )
}

export default Notes
