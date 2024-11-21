import { useState } from 'react'
import NavBar from './components/nav'
import Footer from './components/footer';
import img1 from "./assets/images/img1.jpg";
import barber from "./assets/images/barbearia.jpg";
import './App.css';

function App() {


  return (
    <>
      <NavBar />
      <main>
        <img src={img1} width="100%" height="auto" />

        <section className='main_container'>
          <div className='mc_img'>
            <img src={barber} width="400px" id='img1'/>
            <img src={barber} width="400px" id='img2'/>
            <img src={barber} width="400px" id='img3'/>
          </div>
          <div className='mc_text'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis mi tortor. Proin sed tortor risus. Quisque non leo ultricies, pretium dui luctus, volutpat dolor. Curabitur faucibus pulvinar lorem, ac sodales enim tincidunt ut. Phasellus luctus ex auctor mauris ullamcorper porttitor. Sed nibh risus, fermentum et mi ac, fermentum laoreet metus. Curabitur fringilla elit eget nibh feugiat sollicitudin id sit amet dolor. Curabitur vitae dictum est. Donec dignissim vehicula commodo. Etiam euismod imperdiet rutrum. Pellentesque quis nunc lectus. Sed fermentum mi id libero sodales sodales. Vestibulum at fermentum mi, ut laoreet arcu. Donec vel mauris id metus euismod efficitur. Proin vestibulum ipsum neque, iaculis consequat arcu bibendum sed.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
