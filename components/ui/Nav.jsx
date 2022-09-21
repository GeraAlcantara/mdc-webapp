import NavLink from "./NavLink";
import MENU_ITEMS from '../data/MenuItems';

function Nav() {
  return (
    <nav className='flex items-center'>
      <ul className='flex items-center'>
        {
          MENU_ITEMS.map((item, idx) => <NavLink linkText={item.name} slug={item.slug} key={idx} />)
        }
      </ul>
    </nav>
  );
}

export default Nav;
