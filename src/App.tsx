import React from 'react';

import './App.css';
import ListItems from './components/list-component';
import LogoComponent from './components/logo-component';
import {  } from 'react-dom'
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate()
  return (
    <div className="App">
      <header className="App-header">
        
        <LogoComponent />

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

      <ListItems items={[]} />

      <button onClick={() => navigate('/login')} >Go to Login</button>
      </header>
    </div>
  );
}

export default App;
