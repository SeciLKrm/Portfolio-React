import React from 'react';
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import About from './components/About'
import Experience from './components/Experience'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'


function App() {
  return (
    <div className="App">
    <Header />
    < Nav/>
     <About/>
     <Experience/>
     <Services/>
     <Portfolio/>
      <Contact/>
   

      </div>
  );
}

export default App;
