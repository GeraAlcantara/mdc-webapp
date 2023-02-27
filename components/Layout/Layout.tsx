import { useState, useEffect } from 'react'

import Footer from '../Footer'
import Header from '../Header'

function Layout({ children }: { children: React.ReactNode }): JSX.Element {
  // show btnscrolltop when scroll down
  const [showBtnScrollTop, setShowBtnScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowBtnScrollTop(true)
      } else {
        setShowBtnScrollTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  /* arrow up btn on click go to top of the page  */
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <Header />
      {showBtnScrollTop ? (
        <div>
          <button
            className="fixed bottom-4 lg:bottom-8 right-4 lg:right-8 bg-brandBlue-400 text-brandWhite rounded-full p-2 z-20"
            title="Scroll to the top"
            onClick={scrollToTop}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 10l7-7m0 0l7 7m-7-7v18"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
          </button>
        </div>
      ) : null}
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
