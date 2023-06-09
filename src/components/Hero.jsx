import React from 'react';
import photo from './../image/pexels-mariana-kurnyk-1775043.jpg'
const Hero = () => {
    return (
        <div className='max-w-[1640px] mx-auto p-4'>
            <div className='max-h-[500px] relative'>
                <div className='absolute w-full h-full  max-h-[500px] bg-black/40 flex flex-col justify-center mt-[210px]'>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-500'>Best</span></h1>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Foods <span className='text-orange-500'>Delivired</span></h1>
                </div>
            </div>
            <img className='w-full max-h-[500px] object-cover' src={photo} alt=""/>
        </div>
    );
};

export default Hero;
