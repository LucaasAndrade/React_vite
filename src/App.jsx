import { useState } from 'react'
import NavBar from './components/nav'
import Footer from './components/footer';
import img1 from "./assets/images/img1.jpg";
import './App.css'

function App() {
  

  return (
    <>
      <NavBar/>
      <main>
        <img src={img1}/>
      </main>
      <Footer/>
    </>
  )
}

export default App
