import React from 'react';
import ChatInput from './ChatInput';
import ChatOutput from './ChatOutput';

const Conversation = () => (
  <div className="bg-conversation vh-100 m-0">
    test
    <div className="d-flex flex-column align-items-center justify-content-center">
      <ChatOutput />
      <ChatInput />
    </div>
  </div>
);

export default Conversation;
