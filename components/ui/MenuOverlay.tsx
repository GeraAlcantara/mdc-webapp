import Link from 'next/link'

import MENU_ITEMS from '../../lib/data/MenuItems'

import LogoNav from './LogoNav'

interface MenuOverlayProps {
  istoggle: () => void
}

function MenuOverlay(props: MenuOverlayProps) {
  let year = new Date()

  return (
    <>
      <header className="flex justify-between">
        <LogoNav />
        <nav>
          <button
            className="bg-none text-brandWhite uppercase tracking-widest"
            onClick={props.istoggle}
          >
            CLOSE
          </button>
        </nav>
      </header>
      <div className="mt-16 flex flex-wrap gap-8 ">
        {MENU_ITEMS.map((item, idx) => {
          return (
            /* TODO: #3 close Menu on clik link and why to component mount  */
            <Link key={idx + item.name} href={item.slug}>
              <a
                className="opacity-75 pb-1 text-brandWhite uppercase w-full"
                style={{ boxShadow: 'rgb(229 225 230 / 25%) 0px 1px 0px' }}
                onClick={props.istoggle}
              >
                {item.name}
              </a>
            </Link>
          )
        })}
      </div>

      <h6
        className="absolute bottom-0 landscape:bottom-auto left-0 px-10 py-8 text-brandWhite uppercase "
        style={{
          textShadow: 'rgb(91 175 87 / 74%) -1px -1px 6px, rgb(42 113 178 / 60%) 1px 1px 6px',
          overflowWrap: 'break-word'
        }}
      >
        Copyright © {year.getFullYear()} México Development Center. | Todos los derechos reservados.
      </h6>
    </>
  )
}

export default MenuOverlay
