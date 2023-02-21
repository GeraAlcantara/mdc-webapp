import Document, { Html, Head, Main, NextScript } from 'next/document'
let year = new Date().getFullYear()

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
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
