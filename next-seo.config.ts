import { DefaultSeoProps } from "next-seo";
import { DataHeadDefault } from "./lib/data/DataHeader";

const config: DefaultSeoProps = {
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
