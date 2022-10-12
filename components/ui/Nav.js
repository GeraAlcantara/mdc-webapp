import NavLink from "./NavLink";
import MENU_ITEMS from "../data/MenuItems";

function Nav() {
  return (
    <nav className='hidden md:flex items-center'>
      <ul className='flex items-center' role='list'>
        {MENU_ITEMS.map((item, idx) => (
          <NavLink linkText={item.name} slug={item.slug} key={item.slug + idx} />
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
