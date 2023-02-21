import '../styles/globals.scss'
import type { AppProps } from 'next/app'

import { Analytics } from '@vercel/analytics/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Nprogress from 'nprogress'
import { ParallaxProvider } from 'react-scroll-parallax'
import { DefaultSeo } from 'next-seo'

import Layout from '../components/ui/Layout'
import SEO from '../next-seo.config'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  Nprogress.configure({ showSpinner: false })

  useEffect(() => {
    const handleStart = (url: string) => {
      if (url !== router.asPath) {
        Nprogress.start()
      }
    }
    const handleComplete = (url: string) => {
      if (url === router.asPath) {
        Nprogress.done()
      }
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [router.events, router.asPath])

  return (
    <>
      <DefaultSeo {...SEO} />
      <ParallaxProvider>
        <Layout>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </ParallaxProvider>
    </>
  )
}

export default MyApp
