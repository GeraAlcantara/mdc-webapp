import Image from 'next/image'
import Link from 'next/link'
import Nav from './Nav'


function Header() {
  return (
    <header className='w-full  bg-black bg-opacity-80 py-2'>
      <div className='w-11/12 flex justify-between mx-auto  '>
        <div className='flex items-center'>
            <Link href="/">
                <Image className='object-contain cursor-pointer' src="/logo.png" alt="México developer center"  width={46} height={46}></Image>
            </Link>
            <div className=''>
              <h1 className='relative uppercase text-slate-50 font-RobotoCondense ml-3 opacity-60 text-lg font-normal leading-none'>Mexico <br></br>
              <span className='uppercase text-slate-50 font-RobotoCondense opacity-60 text-lg font-light tracking-wide leading-none' >DEVELOPMENT CENTER</span></h1>
            </div>
        </div>
        <Nav/>
      </div>
    </header>
  )
}

export default Header