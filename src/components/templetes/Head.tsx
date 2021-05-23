import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { appTitle, description, imagePath, url } from 'utils/constant/top'

const Head: React.FC = () => {
  return (
    <div className="application">
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{appTitle}</title>
          <link rel="canonical" href="" />
          <meta property="og:title" content={appTitle} />
          <meta property="og:description" content={description} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={url} />
          <meta property="og:image" content={imagePath} />
          <meta property="og:site_name" content={appTitle} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="junwata72" />
          <meta name="twitter:url" content={url} />
          <meta name="twitter:title" content={appTitle} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={imagePath} />
          <link rel="canonical" href={url} />
          <link
            rel="icon"
            href={'/static/head/smallSheep.png'}
            sizes="16x16"
            type="image/png"
          />
          <link
            rel="icon"
            href={'/static/head/midSheep.png'}
            sizes="32x32"
            type="image/png"
          />
          <link
            rel="apple-touch-icon"
            href={'/static/head/apple-touch-icon.png'}
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
        </Helmet>
      </HelmetProvider>
    </div>
  )
}
export default Head
