import { useState } from 'react'
import './App.css'
import Home from './components/Home';
import SingleData from './components/SingleData';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className='App'>
      <Routes>
          <Route path='/' element={<Home/>} />

          <Route path='/' element={<SingleData/>}/>

      </Routes>
    </div>
  )
}

export default App
