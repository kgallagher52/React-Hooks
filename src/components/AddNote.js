import React, { useContext, useState } from 'react'

//Components
import NotesContext from './context/NotesContext'
import useMousePosition from './useMousePosition'

const Form = () => {

    const { dispatch } = useContext(NotesContext)

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const position = useMousePosition()

    const addNote = (e) => {
        e.preventDefault()
        dispatch({
            type:'ADD_NOTE',
            data: {title,body}
        })
        setTitle('')
        setBody('')
    }

    return (
        /*
        Switched to fragment, if you where to look in the console 
        you would only see <p></p> and <form></form> instead of <div><p></p><form></form></div>
        */
        <> 
            <h1>Add Note Component</h1>
            <p>Mouse Position from form to show logic being reused {position.x}|{position.y}</p>
            <form onSubmit={addNote}>
                <input placeholder="TITLE" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <textarea placeholder="BODY" value={body} onChange={(e) => setBody(e.target.value)}/>
                <button>Add Note</button>
            </form>

        </>

    )
}

export default Form
