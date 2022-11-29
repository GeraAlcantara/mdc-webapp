import Document, { Html, Head, Main, NextScript } from "next/document";
const d = new Date("July 21, 1983 01:15:00");
let year = d.getFullYear();

class MyDocument extends Document {
  render() {
    return (
      <Html lang='es'>
        <Head>
          <meta charSet='utf-8' />
          <meta lang='es' />
          <meta name='author' content='Mexico Development Center' />
          <meta name='copyright' content={`Copyright ${year} by Mexico Development Center`} />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link href='https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap' rel='stylesheet' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        {/* TODO: poner clase de colores en base a un dark y light mode */}
        <body className='bg-bg_primary text-white antialiased'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
