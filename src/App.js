import './App.css';
import Register from './Components/registerProfile/pages/Register';
import MenuSlide from './Components/registerProfile/MenuSlide';

function App() {
  return (
    <div>
      <div>
          <MenuSlide/>
      </div>
      <div className="register">
          <Register/>
      </div>
    </div>
  );
}

export default App;
