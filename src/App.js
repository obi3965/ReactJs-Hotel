import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar';
import Home from './components/pages/Home/Home';
import Rooms from './components/pages/Rooms/Rooms';
import Contacts from './components/pages/Contacts/Contact';

function App() {
  return (
    <div className="App">
      
       <Router>
         <Navbar />
         
           <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/rooms' component={Rooms} />
          <Route path='/contacts' component={Contacts} />   
        </Switch>
        
       </Router>
   
    </div>
     
  );
}

export default App;
