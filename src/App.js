import './App.css';
import MyPosts from './Components/myProfile/pages/MyPosts';
import MyData from './Components/myProfile/pages/MyData';

function App() {
  return (
    <div>
      <div>
        <MyData/>
      </div>
      <div className="title-list">
        <h1>My Posts</h1>
      </div>
      <div>
        <MyPosts />
      </div>
    </div>
  );
}

export default App;
