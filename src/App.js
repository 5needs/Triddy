import logo from './logo.svg';
import './App.css';
import { Calendar } from './Components/calendar/Calendar';

function App() {
  return (
    <div className="App">
      
      
      <Calendar dates={[new Date("03-01-2021"),new Date("03-12-2021")]}/>


    </div>
  );
}

export default App;
