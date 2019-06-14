import React, { useState, useEffect, useReducer } from 'react'

//components
import Note from './Note'
import notesReducer from './notesReducer'
import Form from './Form'
import useMousePosition from './useMousePosition'
import NotesContext from './context/NotesContext'

const Notes = () => {
    const [notes, dispatch] = useReducer(notesReducer, [])
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const position = useMousePosition()

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
        localStorage.setItem('notes', JSON.stringify(notes))         
    },[notes])


    const addNote = (e) => {
        e.preventDefault()
        dispatch({
            type:'ADD_NOTE',
            data: {title,body}
        })

        setTitle('')
        setBody('')

    }

    const removeNote = (title) => {
        dispatch({
            type:'REMOVE_NOTE',
            data: notes.filter(n => (n.title !== title))
        })
    }

    return (
        <NotesContext.Provider value={{addNote,notes,removeNote, title, body, setBody, setTitle, addNote}}>
            <h1>Notes Component</h1>
            <p>{position.x}|{position.y}</p>
            <Note/>
            <Form/>
        </NotesContext.Provider>
    )
}

export default Notes
