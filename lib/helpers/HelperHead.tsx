import { NextSeo } from "next-seo";
import { DataHeadDefault } from "../data/DataHeader";

function HelperHead(props: HeadData) {
  return (
    <>
      <NextSeo
        title={props.pageTitle}
        description={props.pageDescription}
        canonical={DataHeadDefault.currentURL}
        openGraph={{
          url: `${DataHeadDefault.currentURL}${props.slug}`,
          title: props.pageTitle,
          description: props.pageDescription,
          images: [
            {
              url: `${DataHeadDefault.currentURL}${props.previewImage}`,
              width: 1280,
              height: 640,
              alt: props.previewImageAlt,
            },
          ],
          site_name: DataHeadDefault.siteName,
        }}
      />
    </>
  );
}

export default HelperHead;
