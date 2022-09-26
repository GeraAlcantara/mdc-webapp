import Head from "next/head";
import Image from "next/image";
import Header from '../components/ui/Header';
import Hero from '../components/ui/Hero';


export default function Home() {
  return (
    <>
      <Hero></Hero>
      <section>
        <div className=' mdc-ui-container h-96'>
          <p>some content</p>
        </div>
      </section>

      <footer className='mdc-ui-container' >
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
    </>
  );
}
