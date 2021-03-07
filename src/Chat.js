import { ChatEngine } from 'react-chat-engine';

import './App.css';

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

const projectID = '91ab2466-2b27-4441-97ba-23aa187737fc'

const Chat = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;
  
    return (
      <ChatEngine
        height="100vh"
        projectID={projectID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    );
  };
export default Chat;
