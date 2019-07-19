import React, {Component} from 'react';
import axios from 'axios'
import './App.css';
import '../OwnersView/OwnersView';

//components
import Header from "../Header/Header";
import OwnersView from '../OwnersView/OwnersView';
import Dashboard from "../Dashboard/Dashboard";



class App extends Component {

  componentDidMount(){
    this.getPets();
  }

  getPets = () => {
    axios.get('/pets')
      .then((Response) => {
        console.log(Response);
        
      }).catch(error => {
        console.log('cannot complete get pets request', error);
        
      })
  }

  render() {
  return (
    <div className="App">
      <Header />
      <OwnersView/>
      <Dashboard />
    </div>
  );
  }
}

export default App;
