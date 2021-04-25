import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import AboutMe from './components/pages/AboutMe';
import Projects from './components/pages/Projects';
import LogIn from './components/pages/LogIn';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about-me' exact component={AboutMe}/>
        <Route path='/projects' exact component={Projects}/>
        <Route path='/log-in' exact component={LogIn}/>
      </Switch>
      <Footer/>

    </Router>
      
    </>
  );
}

export default App;
