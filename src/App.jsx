import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import styled from 'styled-components'
import Projects from './components/Projects'
import { BrowserRouter } from 'react-router-dom'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'
const Container = styled.div`
scroll-snap-type: y mandatory;
scroll-behavior: smooth;
width: 100%;
height: 100%;
 background-color: #160040;
/* overflow-y: auto; */
scrollbar-width:none;
&::-webkit-scrollbar{
  display: none;
}
`;
const App = () => {
  return (
    <BrowserRouter>
      
      <Container className="relative min-h-screen  shadow-black shadow-sm  flex flex-col scrollbar-hide bg-[#160040]  bg-blend-normal object-cover">
        <div className="absolute w-full h-screen top-0 left-0 bg-gradient-to-t from-black/40"></div>

      <NavBar />
      <Hero />
      <Skills />
        <Projects />
        <Contact />
        <Footer className="absolute bottom-0"/>
    </Container>
    </BrowserRouter>

  )
}

export default App
