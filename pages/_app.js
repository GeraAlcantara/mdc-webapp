import "../styles/globals.scss";
import Layout from "../components/ui/Layout";
import { Analytics } from "@vercel/analytics/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Nprogress from "nprogress";
import { ParallaxProvider } from "react-scroll-parallax";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  Nprogress.configure({ showSpinner: false });

  useEffect(() => {
    const handleStart = (url) => {
      if (url !== router.asPath) {
        Nprogress.start();
      }
    };
    const handleComplete = (url) => {
      if (url === router.asPath) {
        Nprogress.done();
      }
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router.events, router.asPath]);
  return (
    <>
      <DefaultSeo {...SEO} />
      <ParallaxProvider>
        <Layout>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </ParallaxProvider>
    </>
  );
}

export default MyApp;
