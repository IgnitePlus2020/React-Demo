import React from 'react';
import logo from './logo.svg';
import './App.css';
import FunComp from './Components/FunctionalComponent';
import ClassComponent from './Components/ClassComponent';
import AxiosCall from './Axios/AxiosCall';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h2> </h2>
        
        <FunComp mesaagefromfun = {"Pashupati Nath Verma"} />
        <ClassComponent myname ={"Pashupati Verma"} myrole = {" Eng"}/>
        <AxiosCall />
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
