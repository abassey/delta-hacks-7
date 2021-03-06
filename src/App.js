import { ChatEngine } from 'react-chat-engine';

import './App.css';

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine 
            height="100vh"
            projectID="91ab2466-2b27-4441-97ba-23aa187737fc"
            userName="impedaka"
            userSecret="123"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}

export default App;