// ChatInterface.js
import React, { useState } from 'react';
import ChatMessage from './ChatMessage';
import { sendMessageToChatbot } from './apiService'; // Import the API service function

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (message) => {
    try {
      // Send message to backend server
      const response = await sendMessageToChatbot(message);
      // Assuming the backend echoes back the message with additional information
      setMessages([...messages, { text: response.message, fromUser: true }]);
    } catch (error) {
      console.error('Error sending message:', error.message);
      // Handle error (e.g., display an error message to the user)
    }
  };

  return (
    <div>
      {messages.map((message, index) => (
        <ChatMessage key={index} message={message} />
      ))}
      <input
        type="text"
        placeholder="Type your message..."
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            sendMessage(e.target.value);
            e.target.value = '';
          }
        }}
      />
      <button onClick={() => sendMessage('Hello!')}>Send</button>
    </div>
  );
};

export default ChatInterface;
