import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './App.css';

import { Switch, Route } from 'react-router-dom'


import Home from './pages/Home/Home';
import Rooms from './pages/Rooms/Rooms';
//import Contacts from './pages/Contacts/Contact';
import SingleRoom from './pages/SingleRoom/SingleRoom';
import Error from './pages/Errors/Errors';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch> 
       
   
    </>
     
  );
}

export default App;
