import React from 'react'

function Navbar() {
    return (
        <div>
            <div className='flex bg-wall-sec w-100vw  text-skin-base justify-between px-32 py-10'>
                <div><h1 className='text-4xl text-white font-semibold'>SatyumSP</h1></div>
                <div className='flex space-x-10'>
                    <p className='w-fill px-4 py-2 bg-blue-500 hover:border-2 hover'><a href="">Home</a></p>
                    <p><a href="">Projects</a></p>
                    <p><a href="">About</a></p>
                    <p><a href="">Contact</a></p>
                </div>
                <div className='flex space-x-10'>
                    <div>LinkedIn</div>
                    <div>Github</div>
                    <div>Instagram</div>
                    <div>Leetcode</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;