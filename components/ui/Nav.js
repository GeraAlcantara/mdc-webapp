import NavLink from "./NavLink";

function Nav() {
  return (
    <nav className='flex items-center'>
      <ul className='flex items-center'>
        <NavLink linkText='inicio' />
        <NavLink linkText='servicios' />
        <NavLink linkText='Librerías' />
        <NavLink linkText='Casos de éxito' />
      </ul>
    </nav>
  );
}

export default Nav;
