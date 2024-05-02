// ShareButton.js
import React from 'react';

const ShareButton = () => {
  const handleShare = () => {
    // Add your share functionality here
    alert('Share button clicked!');
  };

  return (
    <button onClick={handleShare}>Share</button>
  );
};

export default ShareButton;