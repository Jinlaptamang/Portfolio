import React from 'react'

const Project = ({
    item
}) => {
    return (


        <a href={`${item.git}`} target='_blank' className='w-full'><div  className="bg-white inline-block cursor-pointer relative p-2 whitespace-nowrap " >
     <img src={ item.url} alt={item.title} className='relative w-full h-[60vh] lg:h-[80vh]'/>
            <div className="absolute w-full h-full bg-black/80 opacity-0 hover:opacity-90 top-0 left-0 flex items-center justify-center">
                <div className="flex flex-col px-3 ">
                <p className="font-bold text-center tracking-wider text-lg lg:text-2xl break-words">{item.title}</p>
                <p className="font-bold whitespace-pre-wrap tracking-wide text-xs">{item.desc}</p>
                </div>
                
              


      
    </div>
        </div>
        </a>
    )
}

export default Project
