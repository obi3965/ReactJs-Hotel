import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import Home from './pages/Home/Home';
import Rooms from './pages/Rooms/Rooms';
import Contacts from './pages/Contacts/Contact';
import SingleRooms from './pages/SingleRooms/SingleRooms';
import Errors from './pages/Errors/Errors';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      
       <Router>
         <Navbar />
         
           <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/rooms' component={Rooms} />
          <Route path='/contacts' component={Contacts} /> 
          <Route path="/rooms/:slug" component={SingleRooms} /> 
          <Route component={Errors} />
        </Switch>
        
       </Router>
   
    </div>
     
  );
}

export default App;
