import React from 'react';
import './App.css';
import Home from './pages/Home';
import Router from './Router';

function App() {
  return (
    <div className='container'>
      <h1 className='logo'>Xbox-Live</h1>
      <div className='content'>
        <Router/>
      </div>
    </div>
  );
}

export default App;
