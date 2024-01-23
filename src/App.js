// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Questions from './components/questions';
import ExperienceInput from './components/ExperienceInput';
import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Experiences from './components/Experiences';
import NavigationBar from './components/NavigationBar';


function App() {
  return (
    <Router>
    <NavigationBar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/questions" Component={Questions} />
        <Route path="/share_experience" Component={ExperienceInput} />
        <Route path="/experiences" Component={Experiences} />
      </Routes>
    </Router>
  )
}

export default App;
