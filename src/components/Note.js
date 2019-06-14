import React, { useContext } from 'react'
import NotesContext from './context/NotesContext'

const Note = () => {
    const { notes, dispatch } = useContext(NotesContext)

    const removeNote = (title) => {
        dispatch({
            type:'REMOVE_NOTE',
            data: notes.filter(n => (n.title !== title))
        })
    }

    return (
        <>
            <h1>Note Component</h1>

            {notes.map(n => (
                <div key={n.title}>
                    <h3>{n.title}</h3>
                    <p>{n.body}</p>
                    <button onClick={() => removeNote(n.title)}>Remove {n.title}</button>
                </div>
            ))}
        </>
    )
}

export default Note
