import React, { useState } from 'react';
import styled from 'styled-components';

const MessagingContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 600px;
  margin: 0 auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  padding: 20px;
  background: #007bff;
  color: #fff;
  border-radius: 10px 10px 0 0;
  text-align: center;
`;

const MessagesList = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`;

const Message = styled.div<{ isOwnMessage: boolean }>`
  display: flex;
  justify-content: ${({ isOwnMessage }) => (isOwnMessage ? 'flex-end' : 'flex-start')};
  margin-bottom: 10px;
`;

const MessageBubble = styled.div<{ isOwnMessage: boolean }>`
  max-width: 70%;
  padding: 10px;
  background: ${({ isOwnMessage }) => (isOwnMessage ? '#007bff' : '#e5e5ea')};
  color: ${({ isOwnMessage }) => (isOwnMessage ? '#fff' : '#000')};
  border-radius: 10px;
`;

const Form = styled.form`
  display: flex;
  padding: 20px;
  border-top: 1px solid #ccc;
  background: #f9f9f9;
  border-radius: 0 0 10px 10px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

interface MessageData {
    id: number;
    text: string;
    isOwnMessage: boolean;
}

const Messaging: React.FC = () => {
    const [messages, setMessages] = useState<MessageData[]>([
        { id: 1, text: 'Hello!', isOwnMessage: false },
        { id: 2, text: 'Hi there!', isOwnMessage: true },
        { id: 3, text: 'How are you?', isOwnMessage: false },
    ]);

    const [newMessage, setNewMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewMessage(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newMessage.trim() === '') return;

        const newMessageData: MessageData = {
            id: messages.length + 1,
            text: newMessage,
            isOwnMessage: true,
        };

        setMessages([...messages, newMessageData]);
        setNewMessage('');
    };

    return (
        <MessagingContainer>
            <Header>Messaging</Header>
        <MessagesList>
        {messages.map((message) => (
                <Message key={message.id} isOwnMessage={message.isOwnMessage}>
            <MessageBubble isOwnMessage={message.isOwnMessage}>{message.text}</MessageBubble>
                </Message>
    ))}
    </MessagesList>
    <Form onSubmit={handleSubmit}>
    <Input
        type="text"
    value={newMessage}
    onChange={handleChange}
    placeholder="Type your message..."
    />
    <Button type="submit">Send</Button>
        </Form>
        </MessagingContainer>
);
};

export default Messaging;
