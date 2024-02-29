import React from 'react'
import { useNavigate, useNavigation } from 'react-router-dom';
import styled from 'styled-components'
import { ProjectData } from '../Data';
import Project from './Project';
import { MdOutlineChevronLeft, MdOutlineChevronRight } from 'react-icons/md';
const Container = styled.div `
scroll-snap-type: y mandatory;
scroll-behavior: smooth;
overflow-y: auto;
scrollbar-width:none;
scroll-snap-align: center;
&::-webkit-scrollbar{
  display: none;
}
`;
const Projects = () => {
    const navigate=useNavigate();

    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 460;
    }
    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 460;
    }
    return (
        <Container id='projects' className="min-h-screen text-white px-10 snap-center scroll-smooth py-10">
            <h2 className="text-6xl text-center font-bold">Projects</h2>
            <div className=''>
          
          <div className="group relative flex items-center">
          <MdOutlineChevronLeft size={40} className='absolute left-1 top-1/2 p-2 cursor-pointer bg-gray-400/60 text-black hover:bg-white rounded-full z-[100] hidden group-hover:flex' onClick={slideLeft}/>
              <div id={"slider"} className=' relative w-full h-full overflow-x-scroll scrollbar-hide whitespace-nowrap scroll-smooth py-10 gap-4'>
                  
                  {ProjectData.map((item, index) => (
                      <Project  key={index} item={item}  />
                  ))}


              </div>
              <MdOutlineChevronRight size={40} className='absolute right-1 top-1/2 p-2 bg-gray-400/60 text-black hover:bg-white cursor-pointer rounded-full z-[100] hidden group-hover:flex' onClick={slideRight}/>
          </div>
    </div>
    
        </Container>
    )
}

export default Projects
