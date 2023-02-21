import { useEffect, useState } from 'react'

import Loading from './Loading'

export default function LinkWithPreview({ link }: { link: string }) {
  // Link preview data is of interface PreviewCardData
  const [linkPreview, setLinkPreview] = useState<PreviewCardData>({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getPreview = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/getLinkPreview`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ link })
      })
      const data: PreviewCardData = await res.json()

      setLinkPreview(data)
      setLoading(false)
    }

    // get data from api asynchronously set loading to true
    setLoading(true)
    getPreview()

    return () => {
      // cleanup
      setLoading(false)
    }
  }, [link])

  // return loading or Card preview
  return (
    <div className="">
      {loading ? (
        <Loading />
      ) : (
        <div className="border-gray-600 border-2 bg-[#38363b] rounded-3xl overflow-hidden prose prose-a:no-underline prose-a:hover:text-gray-900 prose-a:text-gray-900 flex flex-col items-center justify-center m-auto max-w-[37.5rem] my-10 text-gray-900 cursor-pointer">
          <a className=" prose-a:no-underline" href={link} rel="noreferrer" target="_blank">
            <div className="">
              {linkPreview.image && (
                <picture>
                  <source srcSet={linkPreview.image} type="image/webp" />
                  <source srcSet={linkPreview.image} type="image/jpeg" />
                  <source srcSet={linkPreview.image} type="image/png" />
                  <img
                    alt={linkPreview.imageAlt ? linkPreview.imageAlt : ''}
                    src={linkPreview.image}
                  />
                </picture>
              )}
              <div className="p-4 bg-gray-100">
                {linkPreview.title ? (
                  <span className="font-bold prose-h1:text-gray-900 ">{linkPreview.title}</span>
                ) : (
                  <span className="font-bold prose-h1:text-gray-900 ">{linkPreview.titleog}</span>
                )}
                <br />

                {linkPreview.description ? <span>{linkPreview.description}</span> : null}
                {linkPreview.siteName ? (
                  <span className="text text-gray-500">{linkPreview.siteName}</span>
                ) : null}
                <br />
                {!linkPreview.url || !linkPreview.siteName ? (
                  linkPreview.canonical ? (
                    //remove https:// and www. from url
                    <span className="text-sm text-gray-500">
                      {linkPreview.canonical.replace(/(^\w+:|^)\/\//, '').replace('www.', '')}
                    </span>
                  ) : null
                ) : null}
              </div>
            </div>
          </a>
        </div>
      )}
    </div>
  )
}
