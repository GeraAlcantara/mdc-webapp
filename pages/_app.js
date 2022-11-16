import "../styles/globals.scss";
import Layout from "../components/ui/Layout";
import { Analytics } from "@vercel/analytics/react";

import { ParallaxProvider } from "react-scroll-parallax";

function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </ParallaxProvider>
  );
}

export default MyApp;
