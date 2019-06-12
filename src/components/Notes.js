import React, { useState, useEffect, useReducer } from 'react'

//components
import Note from './Note'
import notesReducer from './notesReducer'

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
        <div>
            <h1>Notes Component</h1>
            <Note notes={notes} removeNote={removeNote}/>
            <p>Add Note!!!</p>
            <form onSubmit={addNote}>
                <input placeholder="TITLE" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <textarea placeholder="BODY" value={body} onChange={(e) => setBody(e.target.value)}/>
                <button>Add Note</button>
            </form>
        </div>
    )
}

export default Notes
