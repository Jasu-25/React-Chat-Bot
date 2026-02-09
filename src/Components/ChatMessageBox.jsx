import roboImage from '../assets/robo.png';
import userImage from '../assets/user.png';
export function ChatMessageBox({ user, message }) {

    return (
        <div >
            <div className={user === "user" ? "chat-message-user" : "chat-message-robo"}>
                {user === "robo" && <img src={roboImage} />}
                <div>{message}</div>
                {user === "user" && <img src={userImage} />}
            </div>
        </div>
    );
}