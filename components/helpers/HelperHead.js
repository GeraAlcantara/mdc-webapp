import Head from "next/head";
import { DataHeadDefault } from "../data/DataHeader";

function HelperHead({ DataHead }) {
  return (
    <>
      <Head>
        <title>{DataHead.pageTitle}</title>
        <meta name='description' content={DataHead.pageDescription} />
        {/* Twitter */}
        <meta name='twitter:card' content='summary' key='twcard' />
        <meta name='twitter:creator' content={DataHeadDefault.twitterHandle} key='twhandle' />
        <meta name='twitter:title' content={DataHead.pageTitle} />
        <meta name='twitter:description' content={DataHead.pageDescription} />

        {/* Open Graph */}
        <meta property='og:url' content={DataHeadDefault.currentURL} key='ogurl' />
        <meta property='og:image' content={DataHead.previewImage} key='ogimage' />
        <meta property='og:site_name' content={DataHeadDefault.siteName} key='ogsitename' />
        <meta property='og:title' content={DataHead.pageTitle} key='ogtitle' />
        <meta property='og:description' content={DataHead.pageDescription} key='ogdesc' />
        <meta property='og:image:alt' content={DataHead.previewImageAlt} />
        <meta property='og:type' content='website' />
      </Head>
    </>
  );
}

export default HelperHead;
