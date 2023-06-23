import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import Exchanges from "./pages/Exchanges";
import Coins from './pages/Coins';
import News from './pages/News';
import CoinPage from "./pages/CoinPage";





function App() {

  return (
    <div className="App">
      <div className="nav-container ">
        <NavBar />
      </div>
      <div className="pages-container">
        <NavMenu />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/exchanges" element={<Exchanges />}></Route>
          <Route path="/Coins" element={<Coins />}></Route>
          <Route path="/News" element={<News />}></Route>
          <Route path="/coins/:id" element={<CoinPage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
