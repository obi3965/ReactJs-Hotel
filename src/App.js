import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
//import './components/styles/Responsive.css'
import './App.css';

import { Switch, Route } from 'react-router-dom'


import Home from './pages/Home/Home';
import Rooms from './pages/Rooms/Rooms';
//import Contacts from './pages/Contacts/Contact';
import SingleRoom from './pages/SingleRoom/SingleRoom';
import Error from './pages/Errors/Errors';
import Navbar from './components/Navbar';
import Contact from './pages/Contacts/Contact';


function App() {
  return (
    <>
      
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route  path="/rooms/" component={Rooms} />
        <Route  path="/rooms/:slug" component={SingleRoom} />
        <Route  path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch> 
       
   
    </>
     
  );
}

export default App;
