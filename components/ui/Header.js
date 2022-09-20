import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/logo.png'
import Nav from './Nav'


function Header() {
  return (
    <header className='w-full  bg-black bg-opacity-80 py-2'>
      <div className='w-11/12 flex justify-between mx-auto  '>
        <div>
            <Link href="/">
                <Image className='object-contain cursor-pointer' src={Logo} alt="México developer center"  width={46} height={46}></Image>
            </Link>
        </div>
        <Nav/>
      </div>
    </header>
  )
}

export default Header