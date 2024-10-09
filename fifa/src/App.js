import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';        
import NavigationBar from './Navbar';
import React from 'react';
import PlayersList from './playerList';


function App() {
  return (
    <div>
      <NavigationBar />
      <PlayersList />
    </div>
  );
}

export default App;
