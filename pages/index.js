import Head from "next/head";
import Hero from "../components/ui/Hero";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <section>
        <div className=' mdc-ui-container h-96'>
          <p>some content</p>
        </div>
      </section>
    </>
  );
}
