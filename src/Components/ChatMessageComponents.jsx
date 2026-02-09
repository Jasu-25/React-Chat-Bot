import { useRef , useEffect } from 'react';
import {ChatMessageBox} from './ChatMessageBox';
export function ChatMessageComponents({ chatMessage }) {

  let chatBoxRef = useRef(null);

  useEffect(() => {
    let containerElem = chatBoxRef.current;
    if (containerElem) {
      containerElem.scrollTo({
        top: containerElem.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [chatMessage]);

  return (
    <div className="ChatBox-container" ref={chatBoxRef}>
      {chatMessage.map((chat) => {
        return (
          <ChatMessageBox key={chat.key} user={chat.user} message={chat.message} />
        );
      })}
    </div>
  )
}
