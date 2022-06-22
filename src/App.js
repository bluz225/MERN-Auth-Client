// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import Login from './components/pages/Login';
import Profile from './components/pages/Profile';
import Register from './components/pages/Register';
import Welcome from './components/pages/Welcome';
import Navbar from './components/Navbar';

function App() {
  // the currently logged in user will be stored in state
  const [currentUser, setCurrentUser] = useState(null)

  //useEffect -- if the user navigates away from the page, we will log them back in

  // event handler to log the user out when needed

  const handleLogout = () => {
    console.log("log the user out")
  }

  return (
    <Router>
      <header>
        <Navbar
          currentUser = {currentUser}
          handleLogout = {handleLogout}
        />
      </header>
      <div className="App">
        <Routes>
          <Route path="/" element={<Welcome
            currentUser={currentUser}
            setCurrentUser = {setCurrentUser}
          />}/>

          <Route path="/register" element={<Register
            currentUser={currentUser}
            setCurrentUser = {setCurrentUser}
          />}/>

          <Route path="/login" element={<Login
            currentUser={currentUser}
            setCurrentUser = {setCurrentUser}
          />}/>

          <Route path="/profile" element={<Profile
            currentUser={currentUser}
            setCurrentUser = {setCurrentUser}
          />}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
