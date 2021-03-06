import { ChatEngine } from 'react-chat-engine';

import './App.css';

import ChatFeed from './components/ChatFeed';

const App = () => {
    return (
        <ChatEngine 
            height="100vh"
            projectID="91ab2466-2b27-4441-97ba-23aa187737fc"
            userName="impedaka"
            userSecret="maomao24"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}

export default App;