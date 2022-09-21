import LogoNav from "./LogoNav";
import MenuOverlay from './MenuOverlay';
import Nav from "./Nav";

function Header() {
  return (
    <div>
      <MenuOverlay></MenuOverlay>
      <header className='w-full  bg-black bg-opacity-80 py-2'>
        <div className='w-11/12 flex justify-between mx-auto  '>
          <LogoNav />
          <Nav />
          <button className='md:hidden bg-none text-white font-RobotoCondense uppercase tracking-widest'>Menu</button>
        </div>
      </header>
    </div>
  );
}

export default Header;
