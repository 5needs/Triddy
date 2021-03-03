import './App.css';
import MyPosts from './Components/viewOtherProfile/pages/MyPosts';
import MyData from './Components/viewOtherProfile/pages/MyData';
import MenuSlide from './Components/viewOtherProfile/MenuSlide';

function App() {
  return (
    <div>
      <div>
        <MenuSlide/>
      </div>
      <div className="viewOtherProfile">
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
    </div>
  );
}

export default App;
