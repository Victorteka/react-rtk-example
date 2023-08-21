import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostsList from './container/PostsList';
import PostDetails from './container/PostDetails';
import NotFound from './container/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<PostsList />} />
        <Route path='/posts/:id' element={<PostDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
