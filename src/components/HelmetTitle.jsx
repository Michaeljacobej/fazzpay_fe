import React from 'react';
import { Helmet } from 'react-helmet';

function HelmetTitle({ title }) {
  return (
    <Helmet>
      <title>{`${title} - ${import.meta.env.VITE_APP_NAME}`}</title>
    </Helmet>
  );
}

export default HelmetTitle;
