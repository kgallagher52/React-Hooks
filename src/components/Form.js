import React, { useContext } from 'react'
import NotesContext from './context/NotesContext'

const Form = () => {
    const { title, body, setBody, setTitle, addNote } = useContext(NotesContext)

    return (
        /*
        Switched to fragment, if you where to look in the console 
        you would only see <p></p> and <form></form> instead of <div><p></p><form></form></div>
        */
        <> 
            <p>Add Note!!!</p>
            <form onSubmit={addNote}>
                <input placeholder="TITLE" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <textarea placeholder="BODY" value={body} onChange={(e) => setBody(e.target.value)}/>
                <button>Add Note</button>
            </form>

        </>

    )
}

export default Form
