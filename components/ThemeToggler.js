import React from 'react'
import ThemeSwitch from './ThemeSwitch'

const ThemeToggler = () => {
    return (
        <div className='visible lg:hidden  fixed left-2 bottom-2 h-12 w-12 rounded-full bg-indigo-500 py-3 px-3 text-white'>
            <ThemeSwitch />
        </div>
    )
}

export default ThemeToggler
