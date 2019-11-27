import React from 'react';

import './App.css';
import Rooms from './pages/Rooms';
import Error from './pages/Error';
import SingleRoom from './pages/SingleRoom';
import Homes from './pages/Homes';
import {Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';

function App() {
 
  return (
   
    <>
    <Navbar/>
    <Switch>
      <Route exact path='/' component={Homes}/>
      <Route exact path='/rooms/' component={Rooms}/>
      <Route exact path='/rooms/:slug' component={SingleRoom}/>
      <Route component={Error}/>
    </Switch>
    </> 


  );
}

export default App;
