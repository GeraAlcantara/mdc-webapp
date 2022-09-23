import LogoNav from "./LogoNav";
import MenuOverlay from './MenuOverlay';
import Nav from "./Nav";
import { useState } from 'react';


function Header() {
  const [toogleON, setToggleOn] = useState(false)

  const handleMenu = () => {
    setToggleOn((prev)=> !prev)
  }
 

  return (
    <>
      <div className={toogleON ? 'opacity-100 visible md:hidden bg-black h-full left-0 fixed top-0 w-full z-50 px-8 py-10 max-h-full bottom-3 landscape:overflow-y-scroll': 'hidden ' } aria-selected={toogleON }>
      <MenuOverlay istoggle={handleMenu} ></MenuOverlay>

      </div>
      
      <header className='w-full  bg-black py-4'>
        <div className='w-11/12 flex justify-between mx-auto  '>
          <LogoNav />
          <Nav />
          <button onClick={handleMenu} className='md:hidden bg-none text-white font-RobotoCondense uppercase tracking-widest' >Menu</button>
        </div>
      </header>
    </>
  );
}

export default Header;
