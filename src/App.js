import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostsList from './container/PostsList';
import PostDetails from './container/PostDetails';
import NotFound from './container/NotFound';
import Layout from './container/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index  element={<PostsList />} />
          <Route path='/posts/:id' element={<PostDetails />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
