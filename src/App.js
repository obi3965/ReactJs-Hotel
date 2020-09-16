import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home/Home';
import Rooms from './components/pages/Rooms/Rooms';
import Contacts from './components/pages/Contacts/Contact';
import SingleRooms from './components/pages/SingleRooms/SingleRooms';
import Errors from './components/pages/Errors/Errors';
import Room from './components/Room/Room';

function App() {
  return (
    <div className="App">
      
       <Router>
         <Navbar />
         
           <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/rooms' component={Rooms} />
          <Route path='/contacts' component={Contacts} /> 
          <Route path='/single-room/:slug' component={SingleRooms} /> 
          <Route path="/room/:slug" component={Room} /> 
          <Route component={Errors} />
        </Switch>
        
       </Router>
   
    </div>
     
  );
}

export default App;
