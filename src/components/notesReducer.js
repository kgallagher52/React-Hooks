const notesReducer = (state, action) => {
   switch(action.type) {
       case 'POPULATE_NOTES':
           return action.notes
        case 'ADD_NOTE':
            return [...state, action.data]
        case 'REMOVE_NOTE':
            return action.data
       default:
           return state
   }
}

export default notesReducer
