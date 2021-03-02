import './App.css';
import MyPosts from './Components/miPerfil/pages/MyPosts';
import MyData from './Components/miPerfil/pages/MyData';

function App() {
  return (
    <div>
      <div>
        <MyData/>
      </div>
      <div className="title-list">
        <h1>Posts</h1>
      </div>
      <div>
        <MyPosts />
      </div>
    </div>
  );
}

export default App;
