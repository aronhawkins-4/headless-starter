import logoTitle from '../../public/images/sidekick-logo-word-red_1small.png'
// import logoMask from '../../public/images/sidekick-logo-icon-whitesmall.png'
import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
  return (
    
      <div className='grid p-8 grid-cols-2 fixed w-full z-[9999]'>
        <Link href='/'>
          <div className='cursor-pointer flex justify-start align-center relative h-8 w-44 overflow-hidden'>
            <Image src={logoTitle} alt='The word Sidekick' layout='fill' objectFit='contain' className='right-full'></Image>
            {/* <Image src={logoMask} alt='The word Sidekick' layout='fill' objectFit='contain' className='right-full static'></Image> */}
          </div>
        </Link>
          <div className='toggle-wrapper flex gap-4 justify-self-end items-center'>
            <div className='hamburger-wrapper flex flex-col relative gap-2 w-6'>
              <div className='hamburger-line h-px bg-white w-full'></div>
              <div className='hamburger-line h-px bg-white w-full'></div>
              <div className='hamburger-line h-px bg-white w-full'></div>
            </div>
          <span className='text-xl font-medium tracking-wide'>Menu</span>
          </div>
      </div>
    
  )
}
