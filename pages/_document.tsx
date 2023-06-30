import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
let year = new Date().getFullYear()

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <Script
            id="google-tag-manager"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
            strategy="afterInteractive"
          />
          <Script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
              `
            }}
            id="google-tag-manager-data"
            strategy="afterInteractive"
          />
          <meta lang="es" />
          <meta content="Mexico Development Center" name="author" />
          <meta content={`Copyright ${year} by Mexico Development Center`} name="copyright" />
          <link href="https://fonts.googleapis.com" rel="preconnect" />
          <link href="https://fonts.gstatic.com" rel="preconnect" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap"
            rel="stylesheet"
          />
          <link href="/favicon.ico" rel="icon" />
        </Head>
        {/* TODO: poner clase de colores en base a un dark y light mode */}
        <body className="bg-bg_primary text-brandWhite antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
