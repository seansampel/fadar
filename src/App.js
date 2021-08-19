import React from 'react';
import FadarLogo from './FadarLogo.png'
import Search from './components/Search/search';
import List from './components/list';
import './App.css';
import Map from './components/Map/map';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img alt='logo'
        className="logo" 
        src={FadarLogo}/>
        <Search/>
        <List/>
        <Map/>
      </header>
    </div>
  );
}

export default App;
