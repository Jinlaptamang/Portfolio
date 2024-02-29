import {
    OrbitControls,
    Stage
} from '@react-three/drei'
import {
    Canvas
} from '@react-three/fiber'
import React from 'react'
import {
    Model
} from './3Ds/Model'
import { Astronaut } from './3Ds/Astronaut'
import { Planet } from './3Ds/Planet'
import styled from 'styled-components'
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

const fadeInAnimateVarience = {
    initial:{
        x: 100,
        opacity:0
    },
    animate:{
        x: 0,
        opacity: 1,
        transition: {
            delay:0.3
        }
    },
    
}
const Hero = () => {
    return (
        <Container id='hero' className="z-[1000] min-h-screen overflow-y-scroll justify-center  flex flex-col  items-center px-10 snap-start scroll-smooth">
            <div className="flex flex-col lg:flex-row gap-5 w-full h-[770px] lg:h-[500px]  items-center justify-center">
                <motion.div
                    variants={fadeInAnimateVarience}
                    initial={"initial"}
                    whileInView={"animate"}
                    viewport={{once:false}}
                   
                    className="w-full">
                    <div className="flex flex-col h-full  items-start gap-3">
                        <h1 className="text-5xl lg:text-9xl text-white font-extrabold">Jinlap</h1>
                        <h2 className="text-4xl lg:text-7xl font-extrabold text-orange-700">Tamang</h2>
                        <p className=" text-xl text-white">I am pursuing a BCA (Bachelors in Computer Application) degree from
Tribhuwan University at Bhaktapur Multiple Campus. With three and half years
of study in BCA, I have honed my skills specically in MERN stack web
development. As a dedicated and ambitious individual, I am eager to apply and
elevate my expertise in a professional setting. I possess a strong work ethic
and am highly motivated to contribute with a positive and proactive demeanor.
</p>

                    </div>
                </motion.div>
                <div className="flex items-center h-[250px] lg:h-full  w-full">
                    <Canvas camera={
                            {
                                position: [
                                 1000, -100, 490
                                ],
                                fov: 90
                            }
                        }
                        className='z-[10000]'>
                        <OrbitControls enableZoom={false}
                            autoRotate={true} />
                        <Stage intensity={1.9}
                            scale={12} shadows={false}>
                            <Planet/>
                        </Stage>
                    </Canvas>
                </div>
            </div>
        </Container>
    )
}

export default Hero
