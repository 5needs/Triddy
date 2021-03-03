import logo from './logo.svg';
import './App.css';
import { Calendar } from './Components/calendar/Calendar';

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
      
      <Calendar dates={[new Date("03-01-2021"),new Date("03-12-2021")]} freeDates={[new Date('03-16-2021'),new Date("03-25-2021")]}/>


    </div>
  );
}

export default App;
