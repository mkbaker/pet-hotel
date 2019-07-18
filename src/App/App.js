import React, {Component} from 'react';
import './App.css';

//components
import Header from "../Header/Header";
import Dashboard from "../Dashboard/Dashboard";

class App extends Component {
  render() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
    </div>
  );
  }
}

export default App;
