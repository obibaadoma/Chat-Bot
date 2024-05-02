// ForkConversation.js
import React from 'react';
import { forkConversation } from './apiService'; // Import the API service function

const ForkConversation = ({ conversationLink }) => {
  const handleForkConversation = async () => {
    try {
      // Send request to backend to fork conversation
      const response = await forkConversation(conversationLink);
      console.log('Forked conversation:', response);
      // Assuming the backend responds with the forked conversation details
      // Handle success (e.g., show a success message to the user)
    } catch (error) {
      console.error('Error forking conversation:', error.message);
      // Handle error (e.g., display an error message to the user)
    }
  };

  return (
    <div>
      <p>You've been invited to join a conversation!</p>
      <button onClick={handleForkConversation}>Fork Conversation</button>
    </div>
  );
};

export default ForkConversation;
