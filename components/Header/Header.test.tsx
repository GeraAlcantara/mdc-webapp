import { describe, expect, it, test } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { afterEach } from 'node:test'

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
