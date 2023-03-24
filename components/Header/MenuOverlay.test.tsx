import { afterEach, describe, it, vi } from 'vitest'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { cleanup, render } from '@testing-library/react'

import { createMockRouter } from '../../util/testing/createMockRouter'

import MenuOverlay from './MenuOverlay'
const mockToggle = vi.fn()

describe('MenuOverlay', () => {
  afterEach(cleanup)
  it('should render the menu overlay', () => {
    render(
      <RouterContext.Provider value={createMockRouter({})}>
        <MenuOverlay istoggle={mockToggle} />
      </RouterContext.Provider>
    )
  })
})
