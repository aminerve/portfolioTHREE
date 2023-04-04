import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ProjectDisplay from './pages/ProjectDisplay';
import { useState } from 'react';


function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/project/:id' element={<ProjectDisplay/>}/>
        <Route path='/experience' element={<Experience/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;