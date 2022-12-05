import { DataHeadDefault } from "./components/data/DataHeader";
/**
 * @type {import('next-seo').DefaultSeoProps}
 */
const config = {
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: DataHeadDefault.currentURL,
    site_name: DataHeadDefault.siteName,
  },
  twitter: {
    handle: DataHeadDefault.twitterHandle,
    site: DataHeadDefault.twitterHandle,
    cardType: "summary_large_image",
  },
};
export default config;
