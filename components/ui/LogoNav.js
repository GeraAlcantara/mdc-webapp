import Link from "next/link";
import Image from "next/image";

function LogoNav() {
  return (
    <div className='flex items-center'>
      <Link href='/'>
        <a className='flex items-center cursor-pointer'>
        <Image className='object-contain cursor-pointer' src='/logo.png' alt='México developer center' width={36} height={36}></Image>
      <div className='hidden sm:landscape:hidden md:block md:portrait:hidden lg:landscape:block '>
        <h1 className='relative uppercase text-slate-50 ml-3 opacity-60 text-sm leading-tight'>
          Mexico <br></br>
          <span className='uppercase text-slate-50 opacity-60 text-sm tracking-wide leading-tight'>DEVELOPMENT CENTER</span>
        </h1>
      </div>
        </a>
      </Link>
    </div>
  );
}

export default LogoNav;
