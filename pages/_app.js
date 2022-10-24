import "../styles/globals.scss";
import Layout from "../components/ui/Layout";
import { ParallaxProvider } from "react-scroll-parallax";

function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ParallaxProvider>
  );
}

export default MyApp;
