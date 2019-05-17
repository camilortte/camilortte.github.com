import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preconnect"
      key="dns-prefetch-marketingplatform-google"
      href="https://marketingplatform.google.com"
    />,
    <link
      rel="preconnect"
      key="dns-prefetch-google"
      href="https://www.google.com"
    />
  ]);
};