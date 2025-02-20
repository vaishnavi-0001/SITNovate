import React from 'react';
import styled from 'styled-components';

const Messages = () => {
  return (
    <Wrapper>
      <div className="chat-container">
        <div className="header">
          <h2>Fast</h2>
        </div>
        <div className="chat-display" id="chatDisplay">
          <div className="chat-message user">Hello! How can I assist you today?</div>
          <div className="chat-message bot">Hello! I need a Chatbot!</div>
        </div>
        <div className="input-container">
          <input placeholder="Type your message..." id="chatInput" type="text" />
          <button id="sendButton">Send</button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1e1e1e;
  color: #213547;

  .chat-container {
    background:  #1e1e1e;
    color: black;
    width: 400px;
    height: 500px;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 15px;
  }

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background:  #1e1e1e;
    color: white;
    font-weight: bold;
    font-size: 18px;
    border-radius: 10px 10px 0 0;
  }

  .chat-display {
    flex: 1;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    overflow-y: auto;
    margin-top: 10px;
  }

  .chat-message {
    max-width: 80%;
    padding: 12px 16px;
    border-radius: 10px;
    font-size: 14px;
    line-height: 1.4;
    word-wrap: break-word;
  }

  .user {
    align-self: flex-end;
    background:  #1e1e1e;
    color: white;
  }

  .bot {
    align-self: flex-start;
    background: #444;
    color: white;
  }

  .input-container {
    display: flex;
    padding: 10px;
    border-top: 1px solid #ddd;
    background:  #1e1e1e;
    border-radius: 0 0 10px 10px;
  }

  input {
    flex: 1;
    padding: 10px 15px;
    border: 1px solid #ccc;
    border-radius: 20px;
    font-size: 14px;
    outline: none;
    transition: border-color 0.3s;
  }

  input:focus {
    border-color:  #1e1e1e;
  }

  button {
    background:  #1e1e1e;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    margin-left: 10px;
    cursor: pointer;
    transition: background 0.3s, transform 0.2s;
  }

  button:hover {
    background:  #1e1e1e;
    transform: scale(1.05);
  }

  button:focus {
    outline: none;
  }
`;

export default Messages;
