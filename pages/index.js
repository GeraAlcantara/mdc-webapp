import Head from "next/head";
import Image from "next/image";
import Header from '../components/ui/Header';
import Hero from '../components/ui/Hero';
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <div className='h-screen'>
        <p>some content</p>
      </div>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  );
}
