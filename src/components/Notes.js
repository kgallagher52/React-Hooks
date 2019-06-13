import React, { useState, useEffect, useReducer } from 'react'

//components
import Note from './Note'
import notesReducer from './notesReducer'
import Form from './Form'
import NotesContext from './context/NotesContext'

const Notes = () => {
    const [notes, dispatch] = useReducer(notesReducer, [])
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

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
        <NotesContext.Provider value={{notes,dispatch,removeNote,body,title,setTitle,setBody,addNote }}>
            <h1>Notes Component</h1>
            <Note/>
            <Form/>
        </NotesContext.Provider>
    )
}

export default Notes
