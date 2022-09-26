import Head from "next/head";
import Image from "next/image";
import Header from '../components/ui/Header';


export default function Servicios() {
    return (
      <div >
        
        <div className='h-screen'>
          <p>Servicios</p>
        </div>
  
        <footer >
          <a
            href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            Powered by{" "}
            <span >
              <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
            </span>
          </a>
        </footer>
      </div>
    );
  }
  