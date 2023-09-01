import React, { useState } from 'react';
import "./styles.scss";

const ChatButton = () => {
  const [showChatBot, setShowChatBot] = useState(false);

  const openChatBot = () => {
    setShowChatBot(true);
  };

  return (
    <div className="chat-button-container">
      {!showChatBot && (
        <button onClick={openChatBot} className="chat-button">
          Open Chat
        </button>
      )}
      {showChatBot && (
        <div className="chat-container">
           <p style={{ color: "red", fontSize:"1.2rem" }}>Ask like College,Name etc to get to know more about me</p>
          <button onClick={() => setShowChatBot(false)} className="close-button">
            Close Chat
          </button>
          <iframe
            width="350"
            height="430"
            allow="microphone;"
            src="https://console.dialogflow.com/api-client/demo/embedded/63af7806-06da-4174-9974-6530dbd4d155"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default ChatButton;
