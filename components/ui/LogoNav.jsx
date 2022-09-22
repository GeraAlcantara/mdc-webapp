import Link from "next/link";
import Image from "next/image";

function LogoNav() {
  return (
    <div className='flex items-center'>
      <Link href='/'>
        <a className='flex items-center cursor-pointer'>
        <Image className='object-contain cursor-pointer' src='/logo.png' alt='México developer center' width={46} height={46}></Image>
      <div className='hidden md:block md:portrait:hidden '>
        <h1 className='relative uppercase text-slate-50 font-RobotoCondense ml-3 opacity-60 text-lg font-normal leading-none'>
          Mexico <br></br>
          <span className='uppercase text-slate-50 font-RobotoCondense opacity-60 text-lg font-light tracking-wide leading-none'>DEVELOPMENT CENTER</span>
        </h1>
      </div>
        </a>
      </Link>
    </div>
  );
}

export default LogoNav;
