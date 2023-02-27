import { useState, useEffect } from 'react'

import LogoNav from './LogoNav'
import MenuOverlay from './MenuOverlay'
import Nav from './Nav'

export default function Header() {
  const [toogleON, setToggleOn] = useState(false)
  const [background, setBackground] = useState(false)

  const handleMenu = () => {
    setToggleOn((prev) => !prev)
  }

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setBackground(true) : setBackground(false)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={`fixed top-0 w-full z-50 transition-all duration-150 ${
        background ? 'bg-brandBlue-600' : 'bg-none'
      } `}
    >
      <div
        aria-selected={toogleON}
        className={
          toogleON
            ? 'opacity-100 visible md:hidden bg-black h-full left-0 fixed top-0 w-full px-8 py-10 max-h-full bottom-3 landscape:overflow-y-scroll'
            : 'hidden '
        }
      >
        <MenuOverlay istoggle={handleMenu} />
      </div>
      <div className="mdc-ui-container">
        <header className={`py-4 ${toogleON ? 'hidden' : ''} `}>
          <div className=" flex justify-between sm:justify-between md:justify-between mx-auto">
            <LogoNav />
            <Nav />
            <button
              className="md:hidden bg-none text-brandWhite uppercase tracking-widest"
              onClick={handleMenu}
            >
              Menu
            </button>
          </div>
        </header>
      </div>
    </div>
  )
}
