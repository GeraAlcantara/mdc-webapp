import { RouterContext } from 'next/dist/shared/lib/router-context'
import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'

import { createMockRouter } from '../../util/testing/createMockRouter'

import NavLink from './NavLink'

describe('NavLink', () => {
  afterEach(cleanup)
  it('renders correctly', () => {
    render(
      <RouterContext.Provider value={createMockRouter({})}>
        <NavLink />
      </RouterContext.Provider>
    )
  })
  it('should link to the correct slug', () => {
    render(
      <RouterContext.Provider value={createMockRouter({})}>
        <NavLink linkText="linkText" slug="slug" />
      </RouterContext.Provider>
    )
    // check if in the render a tag with property href = slug
    expect(screen.getByRole('link').getAttribute('href')).toBe('/slug')
  })
  it('should render the correct linktext', () => {
    render(
      <RouterContext.Provider value={createMockRouter({})}>
        <NavLink linkText="linkText" slug="slug" />
      </RouterContext.Provider>
    )
    // check if in the render a tag with property href = slug
    expect(screen.getByRole('link').textContent).toBe('linkText')
  })
})
