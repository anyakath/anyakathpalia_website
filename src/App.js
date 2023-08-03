import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.js"
import * as React from 'react';
import { isMobile } from "react-device-detect";
import TechForGood from './pages/TechForGood'; 
import Projects from './pages/Projects'; 
import MobileError from '../src/components/MobileError';

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
  }
`

function MobileVersion () {
  return(
     <>
    <GlobalStyle />
    <MobileError/>
    </>
  )
}


function DesktopVersion() {
    return (
    <>
    <GlobalStyle />
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element= {<Home/>}/>
          <Route path="/techforgood" exact element= {<TechForGood/>}/>
          <Route path="/projects" exact element= {<Projects/>}/>
        </Routes>
      </Router>
    </>
    </>
    );

}

function App() {
  console.log('reached here')
  if (isMobile){
    return <MobileVersion/>
  } else {
    return <DesktopVersion/>
  }
}


export default App;

