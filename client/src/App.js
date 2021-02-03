import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import './App.css';
import Footer from './components/Footer';

import Service from './components/Service'
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path = "/" component={Home}/>
        <Route path = "/About" component={About}/>
        <Route path = "/Contact" component={Contact}/>
        <Route path = "/Service" component={Service}/>
        <Redirect to = "/" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
