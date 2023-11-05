import './App.css';
import Data from './components/data/Data';
import Header from './components/header/Header';
import List from './components/list/List';
import Post from './components/posts/Post';

function App() {
  return (
    <div>
      <Header/>   
      <List/>
      <Data/>
      <Post/>
    </div>
  );
}

export default App;
