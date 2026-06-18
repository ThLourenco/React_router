import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Navbar from '../component/Navbar'

import { Outlet } from 'react-router-dom'
import { SearchForm } from '../component/SearchForm'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <SearchForm/>
      <Outlet/>
      <p>footer</p>
    </div>
  );
}

export default App
