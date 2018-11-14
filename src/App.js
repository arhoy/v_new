import React, { Component } from 'react';
import './App.css';
import Movies from './components/Movies/Movies';

class App extends Component {
  render() {
    return (
      <div className="App">
          <main className = "container">
            <h1>My Movie DB</h1>
            <Movies/>
          </main>
      </div>
    );
  }
}

export default App;
