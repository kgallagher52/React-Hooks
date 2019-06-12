import React, { useState } from 'react'

const Notes = () => {
    const [notes, setNotes] = useState([])
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')


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
            {notes.map(n => (
                    <div key={n.title}>
                        <h3>{n.title}</h3>
                        <p>{n.body}</p>
                        <button onClick={() => removeNote(n.title)}>Remove {n.title}</button>
                    </div>
            ))}
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
