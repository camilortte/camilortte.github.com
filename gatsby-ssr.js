import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preconnect"
      key="dns-prefetch-marketingplatform-google"
      href="https://marketingplatform.google.com"
      crossOrigin="true"
    />,
    <link
      rel="preconnect"
      crossOrigin="true"
      key="dns-prefetch-google"
      href="https://www.google.com"
    />
  ]);
};