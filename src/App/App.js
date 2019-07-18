import React, {Component} from 'react';
import './App.css';
import '../OwnersView/OwnersView'

//components
import Header from "../Header/Header";
import OwnersView from '../OwnersView/OwnersView';

class App extends Component {
  render() {
  return (
    <div className="App">
      <Header />
      <OwnersView/>
    </div>
  );
  }
}

export default App;
