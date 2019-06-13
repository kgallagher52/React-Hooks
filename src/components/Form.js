import React from 'react'

const Form = ({ title, body, setBody, setTitle, addNote }) => {
    return (
        <span>
            <p>Add Note!!!</p>
            <form onSubmit={addNote}>
                <input placeholder="TITLE" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <textarea placeholder="BODY" value={body} onChange={(e) => setBody(e.target.value)}/>
                <button>Add Note</button>
            </form>

        </span>

    )
}

export default Form
