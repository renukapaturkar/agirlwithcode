import React from 'react';

const Header = () => {
    return(
<div className='flex flex-col md:flex-row h-auto md:h-1/4'>
    <div className='w-full md:w-1/4 text-center md:text-left p-4'>
        
    </div>
    <div className='w-full md:w-2/3 p-4'>
        <h1 className='text-5xl md:text-4xl'>Renuka Paturkar</h1>
        <div className="flex items-center space-x-8 pt-2">
            <a className='inline-block py-2 font-semibold text-sm text-gray-600 hover:text-black' href='https://www.linkedin.com/in/renukapaturkar/'>LinkedIn</a>
            <a className='inline-block py-2 font-semibold text-sm text-gray-600 hover:text-black' href='https://github.com/renukapaturkar'>Github</a>
            <a className='inline-block py-2 font-semibold text-sm text-gray-600 hover:text-black' href="/">Blog</a>
        </div>
    </div>
</div>

    )
}

export default Header;