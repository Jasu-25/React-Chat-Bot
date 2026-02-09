import { useState} from 'react';
import { Chatbot } from 'supersimpledev';
export function ChatInput({ chatMessage, setmessag }) {

    let [inputMessage, setInputMessage] = useState("");
    function setInput(e) {
        let result = e.target.value;
        setInputMessage(result);
    }

    function sendChatMessage(e) {
        if (e.key === "Enter") {
            setInput(e);
            setChatMessage();
        }
    }

    function setChatMessage() {

        if (inputMessage.trim() === "") {
            return;
        }

        let newChatMessage = [
            ...chatMessage,
            {
                user: 'user',
                message: inputMessage,
                key: crypto.randomUUID()
            }
        ]

        setmessag([
            ...chatMessage,
            {
                user: 'user',
                message: inputMessage,
                key: crypto.randomUUID()
            }
        ]);

        let respose = Chatbot.getResponse(inputMessage);

        setmessag([
            ...newChatMessage,
            {
                user: 'robo',
                message: respose,
                key: crypto.randomUUID()
            }
        ]);

        setInputMessage("")

    }



    return (
        <div className="input-container">
            <input type="text" name="serach" placeholder="Send a Message To ChatBot" size="20" onChange={setInput} value={inputMessage} className="input-box" onKeyDown={sendChatMessage} />
            <button onClick={setChatMessage} className="serach-btn" >Search</button>
        </div>
    );
}