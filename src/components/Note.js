import React, { useEffect, useContext } from 'react'
import NotesContext from './context/NotesContext'

const Note = () => {
    const { notes, removeNote } = useContext(NotesContext)

    useEffect(() => {
        console.log("Setting up effect");
        return () => {
            console.log('Cleaning up effect called after component unmounts');
        }
    }, [])

    return (
        <div>
            {notes.map(n => (
                    <div key={n.title}>
                        <h3>{n.title}</h3>
                        <p>{n.body}</p>
                        <button onClick={() => removeNote(n.title)}>Remove {n.title}</button>
                    </div>
            ))}
        </div>
    )
}

export default Note
