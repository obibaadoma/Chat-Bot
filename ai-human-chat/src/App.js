import React from 'react';
import './App.css'; // Assuming you have a CSS file for styling
import ChatInterface from './components/ChatInterface';
import ShareButton from './components/ShareButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to AI Human Chat</h1>
        <ChatInterface />
        <ShareButton />
      </header>
    </div>
  );
}

export default App;
