//mock router for testing in vitest
import { NextRouter } from 'next/router'
import { vi } from 'vitest'

export function createMockRouter(router: Partial<NextRouter>): NextRouter {
  return {
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
    reload: vi.fn(),
    beforePopState: vi.fn(),
    events: {
      on: vi.fn(),
      off: vi.fn(),
      emit: vi.fn()
    },
    isFallback: false,
    basePath: '',
    pathname: '/',
    route: '/',
    asPath: '/',
    query: {},
    isReady: true,
    isPreview: false,
    isLocaleDomain: false,
    defaultLocale: '',
    domainLocales: [],
    locale: '',
    locales: [],
    ...router
  }
}
