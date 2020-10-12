import React from 'react';
import Video from './Video'

import './App.css';
import Header from './Header.js'

function App() {

  return (
    <div className='app'>
      <h1>Hello! I am tik-tok</h1>
    <div className="app__videos">
     <Video/>
     <Video/>
     <Video/>
    </div>
    </div>
  );
}

export default App;
