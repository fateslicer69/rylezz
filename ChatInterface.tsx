import React, { useState, useEffect } from "react";
import "./ChatInterface.css"; // Import the CSS file
import { sendOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { attachOutline } from "ionicons/icons";
import { Icon } from "ionicons/dist/types/components/icon/icon";

interface Message {
  text: string;
  isUser: boolean;
}

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    // Fetch initial messages from backend (if any)
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      // Example API call to fetch messages
      // const response = await fetch('/api/messages');
      // const data = await response.json();
      // setMessages(data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const sendMessage = async (message: string) => {
    try {
      // Example API call to send message
      // await fetch('/api/send', {
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json' },
      //     body: JSON.stringify({ text: message }),
      // });

      // Simulate sending message
      setMessages([...messages, { text: message, isUser: true }]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    sendMessage(input);
    setInput("");
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <div className="chat-interface">
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.isUser ? "user-message" : "bot-message"}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <IonIcon icon={attachOutline} className="attach-icon" />{" "}
        {/* Attach icon */}
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage} className="send-button">
          <IonIcon icon={sendOutline} />
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;
