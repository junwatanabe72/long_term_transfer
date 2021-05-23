import React from 'react'
import { Helmet } from 'react-helmet'
import { appTitle, description, imagePath, url } from 'utils/constant/top'

const Head: React.FC = () => {
  return (
    <div className="application">
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
        <script type="text/javascript">
          rakuten_affiliateId="0ea62065.34400275.0ea62066.204f04c0";rakuten_items="ranking";rakuten_genreId="111427";rakuten_recommend="on";rakuten_design="slide";rakuten_size="600x200";rakuten_target="_blank";rakuten_border="on";rakuten_auto_mode="on";rakuten_adNetworkId="a8Net";rakuten_adNetworkUrl="https%3A%2F%2Frpx.a8.net%2Fsvt%2Fejp%3Fa8mat%3D3HC8BL%2BAHGV2Y%2B2HOM%2BBS629%26rakuten%3Dy%26a8ejpredirect%3D";rakuten_pointbackId="a21052298708_3HC8BL_AHGV2Y_2HOM_BS629";rakuten_mediaId="20011815";
        </script>
        <script
          type="text/javascript"
          src="//xml.affiliate.rakuten.co.jp/widget/js/rakuten_widget.js"
        ></script>
      </Helmet>
    </div>
  )
}
export default Head
