import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter  } from 'react-router-dom';
import App from './App';
import { RoomProvider } from './context';


ReactDOM.render(
  <React.Fragment>

  
  <RoomProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</RoomProvider>
</React.Fragment>,
  
  document.getElementById('root')
);


