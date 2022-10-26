import React from 'react';
import NavBar from './components/nav/NavBar';
import { Routes, Route } from 'react-router-dom';
import Main from './main';
import Links from './links';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/user/:id" element={<Main />} />
        <Route path="/" element={<Links />} />
      </Routes>
    </div>
  );
}

export default App;


