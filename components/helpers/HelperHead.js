import Head from "next/head";
import { DataHeadDefault } from "../data/DataHeader";
/**
 * @param {{ pageDescription:string, pageTitle:string, previewImage:string, previewImageAlt:string }} props
 * @returns
 */
function HelperHead(props) {
  return (
    <>
      <Head>
        <title>{props.pageTitle}</title>
        <meta name='description' content={props.pageDescription} />
        {/* Twitter */}
        <meta name='twitter:card' content='summary' key='twcard' />
        <meta name='twitter:creator' content={DataHeadDefault.twitterHandle} key='twhandle' />
        <meta name='twitter:title' content={props.pageTitle} />
        <meta name='twitter:description' content={props.pageDescription} />
        <meta name='twitter:image' content={props.previewImage} />

        {/* Open Graph */}
        <meta property='og:url' content={DataHeadDefault.currentURL} key='ogurl' />
        <meta property='og:image' content={props.previewImage} key='ogimage' />
        <meta property='og:site_name' content={DataHeadDefault.siteName} key='ogsitename' />
        <meta property='og:title' content={props.pageTitle} key='ogtitle' />
        <meta property='og:description' content={props.pageDescription} key='ogdesc' />
        <meta property='og:image:alt' content={props.previewImageAlt} />
        <meta property='og:type' content='website' />
      </Head>
    </>
  );
}

export default HelperHead;
