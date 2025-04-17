import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ChiSiamo from './pages/ChiSiamo';
import Posts from './pages/Posts';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="chi-siamo" element={<ChiSiamo />} />
          <Route path="posts" element={<Posts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

