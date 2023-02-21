import type { NextApiRequest, NextApiResponse } from 'next'

import { JSDOM } from 'jsdom'

//build a preview card with the meta data of the link
const getLinkPreview = async (req: NextApiRequest, res: NextApiResponse) => {
  // recive the link from the client side parse
  const { link } = req.body

  const response = await fetch(link, {
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'text/html'
    }
  })

  const html = await response.text()
  const dom = new JSDOM(html)
  const doc = dom.window.document
  // get meta data for preview card
  //get title from <title> tag
  const titleog = doc.querySelector('meta[name="og:title"]')?.getAttribute('content')
  const title = doc.querySelector('title')?.textContent
  const description = doc.querySelector('meta[name="description"]')?.getAttribute('content')
  const image = doc.querySelector('meta[property="og:image"]')?.getAttribute('content')
  const imageAlt = doc.querySelector('meta[property="og:image:alt"]')?.getAttribute('content')
  const siteName = doc.querySelector('meta[property="og:site_name"]')?.getAttribute('content')
  const url = doc.querySelector('meta[property="og:url"]')?.getAttribute('content')
  const canonical = doc.querySelector('link[rel="canonical"]')?.getAttribute('href')
  // only send no undefined values

  const preview: PreviewCardData = {}

  if (title) preview.title = title
  if (titleog) preview.titleog = titleog
  if (description) preview.description = description
  if (image) preview.image = image
  if (imageAlt) preview.imageAlt = imageAlt
  if (siteName) preview.siteName = siteName
  if (url) preview.url = url
  if (canonical) preview.canonical = canonical
  // Send PreviewCardData back to client side
  res.status(200).json(preview)
}

// regx for urls

export default getLinkPreview
