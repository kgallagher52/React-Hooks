import React, { useState, useEffect } from 'react'

//Components
import Notes from './components/Notes'
import Counter from './Counter'

//Style sheets
import './App.css';

const App = () => {
  return(
    <>
      <Notes/>
      <Counter/>
    </>
  )
}

export default App;
