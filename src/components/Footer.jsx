import React from 'react'
import {AiOutlineGithub,AiFillInstagram,AiFillYoutube,AiFillLinkedin} from 'react-icons/ai'
const Footer = () => {
    return (
        <div className='w-full h-fit items-center justify-center bg-black p-3'>
            <div className="flex text-white flex-col items-center gap-3 lg:flex-row justify-around">
                <h3 className="text-lg font-bold">Contact:
                    <span>
                        <a href="mailto:parasharneupane3900@gmail.com" target='_blank'>parasharneupane3900@gmail.com</a>
                    </span>
                </h3>

                <ul className="flex flex-row justify-around gap-2">
                    <li className='cursor-pointer'>
                        <a href="https://github.com/unique3900" target='_blank'><span><AiOutlineGithub className='h-8 w-8'/></span></a>
                    </li>
                    <li className='cursor-pointer'>
                        <a href="https://www.instagram.com/__unique.wav/" target='_blank'><span><AiFillInstagram className='h-8 w-8'/></span></a>
                    </li>
                    <li className='cursor-pointer'>
                        <a href="https://www.youtube.com/channel/UCTHW36GTy-QDjTB1mfeZTBA" target='_blank'><span><AiFillYoutube className='h-8 w-8'/></span></a>
                    </li>
                    <li className='cursor-pointer'>
                        <a href="https://www.linkedin.com/in/parashar-neupane-77942b166/" target='_blank'><span><AiFillLinkedin className='h-8 w-8'/></span></a>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Footer
