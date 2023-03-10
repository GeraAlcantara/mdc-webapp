import { afterEach, describe, expect, it, test } from 'vitest'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { cleanup, render, screen } from '@testing-library/react'

import { createMockRouter } from '../../util/testing/createMockRouter'

import Nav from './Nav'
import MENU_ITEMS from './Header.constants'

describe('Nav', () => {
  afterEach(cleanup)
  it('renders correctly', () => {
    render(
      <RouterContext.Provider value={createMockRouter({})}>
        <Nav />
      </RouterContext.Provider>
    )
  })
  test('should render the correct number links coming from the constant', () => {
    render(
      <RouterContext.Provider value={createMockRouter({})}>
        <Nav />
      </RouterContext.Provider>
    )
    expect(screen.getAllByRole('link').length).toBe(MENU_ITEMS.length)
  })
})
