// chatbot.jsx
import React, { useState } from 'react';

const pairs = [
  { regex: /hi|hey|hello/i, responses: ["Hello, how can I assist you today?", "Hi there", "How can I assist you?"] },
  { regex: /how are you/i, responses: ["I'm doing great, thanks for asking", "I'm good, how about you?"] },
  { regex: /.*what are you selling online.*/i, responses: ["We are selling computer accessories, computers, laptops and gaming PC's"] },
  { regex: /.*Could you give me some examples of the products you sell.*/i, responses: ["Of course, I sell T-shirts, trousers, pajamas, smart watches, marvins, school uniforms, and many more"] },
  { regex: /.*what is the name of your business.*/i, responses: ["My business is called Antony Styles"] },
  { regex: /.*where are you guys located.*/i, responses: ["We are located at River Road, Jogoo House, House number 28"] },
  { regex: /.*Do you guys do delivery.*/i, responses: ["Yes we do deliveries countrywide"] },
  { regex: /.*Where can I place my complaints.*/i, responses: ["You can text 0708673580 on Whatsapp and then place your complaint"] },
  { regex: /.*what payment methods do you accept.*/i, responses: ["We accept cash,mpesa and cheques"] },
  { regex: /.*Do you offer personal styling and fashion consultations.*/i, responses: ["Yes we do have"] },
  { regex: /.*Do you have a store near me.*/i, responses: ["Unfortunately we only have one in Nairobi but do plan on setting up more branches soon"] },

  { regex: /.*/i, responses: ["Sorry, I didn't understand that. Could you ask something else?", "Can you please clarify?"] },
];

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: 'user', text: input }]);
      setInput('');
      
      const botResponse = getBotResponse(input);
      setMessages(prevMessages => [
        ...prevMessages, 
        { sender: 'bot', text: botResponse }
      ]);
    }
  };

  const getBotResponse = (userInput) => {
    for (let pair of pairs) {
      if (pair.regex.test(userInput)) {
        return pair.responses[Math.floor(Math.random() * pair.responses.length)];
      }
    }
    return "Sorry, I didn't understand that. Could you ask something else?";
  };

  return (
    <div className="chatbot-container ">
      <div className="chat-window">
        <div className="chat-messages">
        <h3 className='p'>Welcome to Future Tech Gear Customer Care</h3>
        <p>How can we help you?</p>
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              <div className="message-text">{msg.text}</div>
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            placeholder="Type your message..." 
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
