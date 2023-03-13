import Link from 'next/link'
import React from 'react'

export default function Button(props) {
  return (
    <Link className='cursor-pointer' href={props.link}>
        <div className='cursor-pointer overflow-hidden w-64 py-3 px-4 bg-dark-gray text-center relative group'>
            <span className='text-xl text-gray font-medium tracking-wider relative transition-colors duration-75 delay-75 group-hover:text-white'>{props.text}</span>
            <div className="absolute overlay left-[-100%] top-0 w-full h-full bg-white mix-blend-difference transition-all duration-300 ease-in-out group-hover:left-0"></div>
        </div>
        
    </Link>
  )
}
