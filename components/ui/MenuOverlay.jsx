import LogoNav from "./LogoNav";
import { useState } from 'react';
import MENU_ITEMS from "../data/MenuItems";
import Link from "next/link";

function MenuOverlay() {
  let year = new Date()
  const [overlay, setoverlay] = useState(false)

  const handleMenuOverlay = () =>{
    setoverlay(!overlay)
  }
  return (
    <div className={overlay ? 'opacity-100 visible bg-black h-full left-0 fixed top-0 w-full z-50 px-8 py-10': 'hidden bg-black h-full left-0 fixed top-0 w-full z-50 px-8 py-10' }>
      <header className='flex justify-between'>
        <LogoNav></LogoNav>
        <nav>
          <button onClick={handleMenuOverlay} className='bg-none text-white font-RobotoCondense uppercase tracking-widest'>CLOSE</button>
        </nav>
      </header>
      <div className='mt-16 flex flex-wrap gap-8'>
        {MENU_ITEMS.map((item, idx) => {
          return (
            <Link href={item.slug} key={idx + item.name}>
              <a className="opacity-75 pb-1 text-white uppercase font-RobotoCondense w-full" style={{boxShadow: "rgb(229 225 230 / 25%) 0px 1px 0px"}} >{item.name}</a>
            </Link>
          );
        })}
      </div>
    
      <h6 className='absolute bottom-0 left-0 px-10 py-8 font-RobotoCondense text-white uppercase ' style={{textShadow: 'rgb(91 175 87 / 74%) -1px -1px 6px, rgb(42 113 178 / 60%) 1px 1px 6px', overflowWrap: 'break-word'}} >Copyright © {year.getFullYear()} México Development Center. | All right reserved.  </h6>

    </div>
  );
}

export default MenuOverlay;
