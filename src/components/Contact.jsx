import React, { useEffect, useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import styled from 'styled-components'
import {
    Mail
} from './3Ds/Mail';
import {
    OrbitControls,
    Stage
} from '@react-three/drei';
import {
    Canvas
} from '@react-three/fiber';
import { AiFillCheckCircle } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

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

const fadeInAnimationVarience = {
    initial:{
        opacity:0,
        x:100,
    },
    animate:{
        opacity: 1,
        x:0,
        transition:{delay:0.2}
    }

}
const Contact = () => {
    const form = useRef();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    useEffect(() => {
// console.log(process.env.SERVICE_ID)
    }, [])
    

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm( import.meta.env.VITE_SERVICE_ID,import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_PUBLIC_KEY)
          .then((result) => {
              console.log(result.text);
              toast.success(<p className='w-full  text-black text-sm  flex gap-2 items-center'>Email Sent, I will Contact you as soon as possible</p>)
              setEmail("");
              setName("");
              setMessage("");
          }, (error) => {
              toast.error(<p className='w-full  text-black text-lg font-bold flex gap-2 items-center'>Email Sent,I will Contact you as soon as possible</p>)
              console.log(error.text)
          });
      };

    return (
        <Container id='contact' className="min-h-screen mt-5 overflow-y-scroll flex flex-col  items-center px-10 snap-start scroll-smooth">
            <Toaster/>
            <h1 className="text-7xl text-center font-bold text-white">Contact Me</h1>
           
            <div className="flex p-5 flex-col lg:flex-row gap-5 w-full h-[770px] lg:h-[500px]  items-center justify-center mt-5">

                <div className="hidden lg:flex items-center h-full  w-full">
                    <Canvas camera={
                            {
                                position: [
                                    1000, -100, 490
                                ],
                                fov: 90
                            }
                        }
                        className=''>
                        <OrbitControls enableZoom={true}
                            autoRotate={true}/>
                        <Stage intensity={1.9}
                            scale={1}
                            shadows={true}>
                            <Mail/>
                        </Stage>
                    </Canvas>
                </div>


                <div className="w-full h-auto">
                    <div
                  
                        className="flex flex-col h-full shadow-white shadow-md outline-white min-w-full gap-3">
                        <div
                                 
                            className="flex flex-col p-10 gap-3 ">
                            <div className="text-center">
                                <h3 className="text-4xl lg:text-5xl  text-white font-bold text-center">Contact Form</h3>

                            </div>
                            <div className="">
                                <motion.form
                                     variants={fadeInAnimationVarience}
                                     initial={"initial"}
                                     whileInView={"animate"}
                                     viewport={{ once: false }}
                                    action="" ref={form} className='flex flex-col gap-4' onSubmit={sendEmail}>
                                    <div className="flex flex-col w-full gap-2">
                                        <label htmlFor="" className="text-white text-lg">Your Name</label>
                                        <input type="text" value={name} onChange={(e) => {
                                            setName(e.target.value)
                                        }} name='user_name' placeholder='Enter Name' className='w-full text-black font-bold px-3 py-2 rounded-lg' required />
                                    </div>
                                    <div className="flex flex-col w-full gap-2">
                                        <label htmlFor="" className="text-white text-lg">Your Email</label>
                                        <input type="email" value={email} onChange={(e) => {
                                            setEmail(e.target.value)
                                        }} name='user_email' placeholder='Enter Email' className='w-full px-3 py-2 rounded-lg text-black font-bold' required />
                                    </div>
                                    <div className="flex flex-col w-full gap-2">
                                        <label htmlFor="" className="text-white text-lg">Your Message</label>
                                        <textarea cols={10} value={message} onChange={(e) => {
                                            setMessage(e.target.value)
                                        }} rows={3} name='user_message' type="email" placeholder='Enter Message' className='w-full px-3 py-2 text-black font-bold rounded-lg overflow-auto resize-none' required />
                                    </div>
                                    <input type="submit" className='cursor-pointer w-full px-3 py-2 text-white font-bold bg-[#d127a1] rounded-xl' value={"Send"}/>
                                </motion.form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Contact
