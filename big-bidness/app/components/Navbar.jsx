'use client'
import { useState, React } from 'react';


export const Navbar = () => {
    const [isToggle, setIsToggle] = useState(false);
    function toggleNav() {
        setIsToggle(!isToggle)
    }

    return (
    <div className='bg-white'>
            <div className='max-w-7xl h-16 flex mx-auto px-4 justify-between items-center lg:px-8'>
                <div className="hidden md:inline-block">
                    <div className="space-x-4">
                        <a href="/" className="text-black hover:bg-black hover:text-white rounded-xl p-2">Home</a>
                        <a href="/" className="text-black hover:bg-black hover:text-white rounded-xl p-2">Experience</a>
                        <a href="/" className="text-black hover:bg-black hover:text-white rounded-xl p-2 ">About</a>
                        <a href="/" className="text-black hover:bg-black hover:text-white rounded-xl p-2">Contact</a>
                    </div>
                </div>
                <div className='md:hidden flex items-center'>
                    <button className='p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-inset'
                    onClick={toggleNav}>
                    {isToggle ? <p className="text-black"> X </p> : <p className="text-black">Menu</p>}
                    </button>
                </div>
            </div>
            {isToggle && (
                <div className='md:hidden'>
                    <div className="space-y-1 px-2 pb-3">
                        <a href="/" className="text-black block bg-zinc-100 hover:bg-black hover:text-white rounded-lg p-2">Home</a>
                        <a href="/" className="text-black block hover:bg-black hover:text-white  rounded-lg p-2">About Me</a>
                        <a href="/" className="text-black block bg-zinc-100  hover:bg-black hover:text-white rounded-lg p-2 ">Experience</a>
                        <a href="/" className="text-black block bg-zinc-100 hover:bg-black hover:text-white  rounded-lg p-2">Contact</a>
                    </div>
                </div>
            )}
    </div>
  )
}