import logo from './logo.svg';
import './App.css';
import React from 'react';
import './index.css';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Project from './components/Project';
import Footer from './components/Footer';
import Handler from './components/Handler';
import List from './components/List';
import Contact from './components/Contact';
import { BrowserRouter, NavLink } from 'react-router-dom';

function App() {

  const [page, setPage] = React.useState('About');

  const [project, setProject] = React.useState([
    ...List
])   

const renderPage = (page) => {
            
            
  switch(page) {

      case('Project'):        
          return  <div className='content'>
                      {project.map(project => 
                      <Project 
                      git = {project.git}
                      name= {project.name}
                      link= {project.link}
                      source = {project.source}
                      />)}
                  </div>

      case('Resume'):            
          return <Resume />
      

      case('About'):            
          return <About /> 

      case('Contact'):            
          return <Contact />
      

      default:
          return <Resume />;
      
  }            
}
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <BrowserRouter>
    <div className="app">
    <Header
      setPage = {setPage}
      NavLink={ NavLink}
    />
    <Handler
      page= {page} renderPage= { renderPage }
    />    
    <Footer />
    </div>
  </BrowserRouter>

  );
}

export default App;
