import React from 'react';
import './App.css';
import Business from './components/Business/Business.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import BusinessList from './components/BusinessList/BusinessList.js';

//business object

/*const businesses  = [
  business,
  business,
  business,
  business,
  business,
  business,
  ];*/

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList />
    </div>
    );  
  }
}

export default App;
