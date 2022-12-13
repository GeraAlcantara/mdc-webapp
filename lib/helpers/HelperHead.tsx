import { NextSeo, NextSeoProps } from "next-seo";
import { DataHeadDefault } from "../data/DataHeader";
/**
 * @param {{ pageDescription:string, pageTitle:string, previewImage:string, previewImageAlt:string, slug:string }} props
 * @returns
 */
interface HeadProps {
  pageDescription: string;
  pageTitle: string;
  previewImage: string;
  previewImageAlt: string;
  slug: string;
}

function HelperHead(props: HeadProps) {
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
