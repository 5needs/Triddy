import logo from './logo.svg';
import './App.css';
import Conversation from './conversation/Conversation';
import ConversationList from './conversationList/ConversationList';
import ItemsRentados from './itemsRentados/ItemsRentados';
import FormularioCalificacion from './formularioCalificacion/FormularioCalificacion';

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
	  <ConversationList />
	  <Conversation />
	  <ItemsRentados />
	  <FormularioCalificacion /> 
    </div>
  );
}

export default App;
