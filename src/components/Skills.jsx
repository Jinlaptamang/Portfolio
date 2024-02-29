import React from 'react'
import styled from 'styled-components';
import { skillsData } from '../Data';
import { motion } from 'framer-motion';

const Container = styled.div`
scroll-snap-type: y mandatory;
scroll-behavior: smooth;
overflow-y: auto;
scrollbar-width:none;
scroll-snap-align: center;
&::-webkit-scrollbar{
  display: none;
}
`;


const fadeInAnimationVarience = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => (
    {
      opacity: 1,
      y: 0,
      
      transition: {
          delay: 0.07 * index,
        }
        
    }
  )
}
const Skills = () => {

  
  return (
    <Container id='skills' className="min-h-screen flex flex-col justify-start  items-center px-10 snap-center scroll-smooth py-10 overflow-hidden">
      <div className="flex flex-col gap-10 text-white ">
        <div className="">
          <h1 className="text-7xl text-center font-bold">My Skills</h1>
        </div>
        <div className="grid grid-flow-row grid-cols-2
        lg:grid-flow-row lg:grid-cols-4 
        gap-14">
          {
            skillsData.map((item,index) => {
              return (
                <motion.div
                  key={item.id}
                  variants={fadeInAnimationVarience}
                  initial="initial"
                  whileInView={"animate"}
                  viewport={{ once: false }}
                  custom={index}
                  className="flex px-4 py-3 flex-col justify-center items-center gap-2 shadow-lg shadow-white">
                <img src={`${item.url}`} className='w-44 H-44' alt="" />
                  <h4 className="text-lg font-bold whitespace-nowrap">{item.title}</h4>
              </motion.div>
              )
            })
          }

        </div>
        
      </div>
    </Container>
  )
}

export default Skills
