import logo from './logo.svg';
import './App.css';
import Rutas from './Components/App';
import Conversation from './Components/conversation/Conversation';
import ConversationList from './Components/conversationList/ConversationList';
import ItemsRentados from './Components/itemsRentados/ItemsRentados';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
	  <Rutas />
	  <ConversationList />
	  <Conversation />
	  <ItemsRentados />
    </div>
  );
}

export default App;
