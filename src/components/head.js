import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import config from '../config';
import favicon from '../images/favicons/favicon.ico';
// import ogImage from '@images/og.png';
import appleIcon32x32 from '../images/favicons/icon-32x32.png';
import appleIcon48x48 from '../images/favicons/icon-48x48.png';
import appleIcon72x72 from '../images/favicons/icon-72x72.png';
import appleIcon96x96 from '../images/favicons/icon-96x96.png';
import appleIcon144x144 from '../images/favicons/icon-144x144.png';
import appleIcon152x152 from '../images/favicons/icon-144x144.png';
import androidIcon192x192 from '../images/favicons/icon-192x192.png';
import favicon32x32 from '../images/favicons/icon-32x32.png';
import favicon96x96 from '../images/favicons/icon-96x96.png';
import msIcon144x144 from '../images/favicons/icon-144x144.png';

const Head = ({ metadata }) => (
  <Helmet>
    <html lang="en" prefix="og: http://ogp.me/ns#" />
    <title itemProp="name" lang="en">
      {metadata.title}
    </title>
    <link rel="shortcut icon" href={favicon} />
    <link rel="canonical" href="https://sushantchitrakar.com.np" />

    <meta name="description" content={metadata.description} />
    <meta name="keywords" content={config.siteKeywords} />
    {/* <meta name="google-site-verification" content={config.googleVerification} /> */}
    <meta property="og:title" content={metadata.title} />
    <meta property="og:description" content={metadata.description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={metadata.siteUrl} />
    <meta property="og:site_name" content={metadata.title} />
    {/* <meta property="og:image" content={`${config.siteUrl}${ogImage}`} /> */}
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:locale" content={config.siteLanguage} />
    <meta itemProp="name" content={metadata.title} />
    <meta itemProp="description" content={metadata.description} />
    {/* <meta itemProp="image" content={`${config.siteUrl}${ogImage}`} /> */}


    <link rel="apple-touch-icon" sizes="32x32" href={appleIcon32x32} />
    <link rel="apple-touch-icon" sizes="48x28" href={appleIcon48x48} />
    <link rel="apple-touch-icon" sizes="72x72" href={appleIcon72x72} />
    <link rel="apple-touch-icon" sizes="96x96" href={appleIcon96x96} />
    <link rel="apple-touch-icon" sizes="144x144" href={appleIcon144x144} />
    <link rel="apple-touch-icon" sizes="152x152" href={appleIcon152x152} />
    <link rel="icon" type="image/png" sizes="192x192" href={androidIcon192x192} />
    <link rel="icon" type="image/png" sizes="32x32" href={favicon32x32} />
    <link rel="icon" type="image/png" sizes="96x96" href={favicon96x96} />
    {/* <link rel="icon" type="image/png" sizes="16x16" href={favicon16x16} /> */}
    <meta name="msapplication-TileColor" content={config.colors.softWhite} />
    <meta name="msapplication-TileImage" content={msIcon144x144} />
    <meta name="theme-color" content={config.colors.softWhite} />
  </Helmet>
);

export default Head;

Head.propTypes = {
  metadata: PropTypes.object.isRequired,
};