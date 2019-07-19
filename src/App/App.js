import React, {Component} from 'react';
import './App.css';
import '../OwnersView/OwnersView'

//components
import Header from "../Header/Header";
<<<<<<< HEAD
import OwnersView from '../OwnersView/OwnersView';
=======
import Dashboard from "../Dashboard/Dashboard";
>>>>>>> master

class App extends Component {
  render() {
  return (
    <div className="App">
      <Header />
<<<<<<< HEAD
      <OwnersView/>
=======
      <Dashboard />
>>>>>>> master
    </div>
  );
  }
}

export default App;
