// gatsby-ssr.js
import React from 'react';
import { Analytics } from '@vercel/analytics/react';

export const wrapRootElement = ({ element }) => {
  return (
    <>
      {element}
      <Analytics />
    </>
  );
};