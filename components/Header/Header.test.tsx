import { afterEach, beforeAll, describe, test } from 'vitest'
import { cleanup, render } from '@testing-library/react'
import { RouterContext } from 'next/dist/shared/lib/router-context'

import { createMockRouter } from '../../util/testing/createMockRouter'

import Header from './index'

describe('Header', () => {
  afterEach(cleanup)
  beforeAll(() => {
    // define window object for testing

    window.resizeTo = function resizeTo(width, height) {
      Object.assign(this, {
        innerWidth: width,
        innerHeight: height,
        outerWidth: width,
        outerHeight: height
      }).dispatchEvent(new this.Event('resize'))
    }
  })
  test('renders correctly', () => {
    render(
      <RouterContext.Provider value={createMockRouter({})}>
        <Header />
      </RouterContext.Provider>
    )
  })
})
