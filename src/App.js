import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./components/ChatFeed";
import LogInForm from "./components/LogInForm";
import "./App.css";

const App = () => {
  if (!localStorage.getItem("username")) return <LogInForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID="c3bab527-9060-43b3-8a2d-c69eddb58e97"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
