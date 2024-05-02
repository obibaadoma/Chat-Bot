import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'; // Assuming you have a CSS file for styling
import ChatInterface from './components/ChatInterface';
import ShareButton from './components/ShareButton';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to AI Human Chat</h1>
        </header>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route exact path="/" element={<ChatInterface />} />
        </Routes>
        <ShareButton />
      </div>
    </Router>
  );
};

export default App;
