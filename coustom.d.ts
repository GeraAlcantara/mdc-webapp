declare module "*.svg" {
  import React from "react";
  const component: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default component;
}
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
