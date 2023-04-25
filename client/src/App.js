
import './App.css';
import Home from './pages/home/Home.jsx';
import TopBar from './components/topBar/TopBar.jsx';
import Single from './pages/single/Single.jsx'
import Write from './pages/write/write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { BrowserRouter as Router, Route, Routes, redirect } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import { useContext } from 'react';
import { Context } from './context/Context';

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>






  );
}

export default App;
