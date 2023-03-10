import { describe, test } from 'vitest'
import { render } from '@testing-library/react'
import { RouterContext } from 'next/dist/shared/lib/router-context'

import { createMockRouter } from '../../util/testing/createMockRouter'

import Header from './index'

describe('Header', () => {
  test('renders correctly', () => {
    render(
      <RouterContext.Provider value={createMockRouter({})}>
        <Header />
      </RouterContext.Provider>
    )
  })
})
