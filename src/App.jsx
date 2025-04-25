import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './components/layouts/DefaultLayout';
import Home from './pages/Home';
import ChiSiamo from './pages/ChiSiamo';
import Posts from './pages/Posts';
import PostDetail from './pages/PostDetail';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes> 
        <Route element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="chi-siamo" element={<ChiSiamo />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:id" element={<PostDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;


