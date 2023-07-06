import './App.css';
import Login from "./component/login/Login";
import Home from "./component/homepage/Home";
import Register from "./component/register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
function App() {
  const [user, setLoginUser] = useState({})
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={
            user && user._id ? <Home user={user} /> : <Login setLoginUser={setLoginUser} />
          } />
          <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;