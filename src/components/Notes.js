import React, { useState, useEffect } from 'react'

//components
import Note from './Note'

const Notes = () => {
    const [notes, setNotes] = useState([])
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    useEffect(() => {
        const notesData = JSON.parse(localStorage.getItem('notes'))
        if(notesData) {
            setNotes(notesData)       

        } 
    },[]) // Setting data only once when componet is mounted. to keep presisted data when [] dependencies runs everytime
    
    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))         
    },[notes])


    const addNote = (e) => {
        e.preventDefault()
        setNotes([
            ...notes,
            { title,body },
        ])
        setTitle('')
        setBody('')

    }

    const removeNote = (title) => {
        setNotes(notes.filter(n => (
            n.title !== title
        )))
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
