import Link from 'next/link'
import Image from 'next/image'

function LogoNav() {
  return (
    <div className="flex items-center">
      <Link href="/">
        <a className="flex items-center cursor-pointer">
          <Image
            alt="México developer center"
            className="object-contain cursor-pointer"
            height={36}
            src="/logo.png"
            width={36}
          />
          <div className="hidden sm:landscape:hidden md:block md:portrait:hidden lg:landscape:block ">
            <h1 className="relative uppercase text-slate-200 ml-3 text-sm leading-tight">
              Mexico <br />
              <span className="uppercase text-slate-200 text-sm tracking-wide leading-tight">
                DEVELOPMENT CENTER
              </span>
            </h1>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default LogoNav
