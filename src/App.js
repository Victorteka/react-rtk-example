import './App.css';
import PostsList from './features/PostsList';

function App() {
  return (
    <div className='appContent'>
      <h1 className='appTitle'>Get posts</h1> 
      <PostsList />
    </div>
  );
}

export default App;
