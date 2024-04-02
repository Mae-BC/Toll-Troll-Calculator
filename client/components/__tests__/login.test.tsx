//@vitest-environment jsdom

import {
  describe,
  it,
  expect,
  vi,
  beforeEach,
  afterEach,
  beforeAll,
} from 'vitest'
import {
  screen,
  waitFor,
  waitForElementToBeRemoved,
  within,
} from '@testing-library/react'
import { renderRoute } from '../../test/setup.tsx'
import { useAuth0 } from '@auth0/auth0-react'
import nock from 'nock'

const mockBridges = [
  {
    name: 'Auckland Harbour Bridge',
    location: 'Auckland Harbour',
    type: 'Motorway bridge',
    year_built: 1959,
    length_meters: 1020,
    lanes: 8,
    added_by_user: null,
  },
  {
    name: 'Grafton Bridge',
    location: 'Grafton Gully',
    type: 'Road bridge',
    year_built: 1910,
    length_meters: 100,
    lanes: 4,
    added_by_user: null,
  },
]

// Mock out auth0
vi.mock('@auth0/auth0-react')

const ACCESS_TOKEN = 'mock-access-token'

beforeAll(() => {
  nock.disableNetConnect()

  // Add to remove errors in test output
  vi.spyOn(console, 'error').mockImplementation(() => {})
})

beforeEach(() => {
  vi.mocked(useAuth0).mockReturnValue({
    isAuthenticated: true,
    user: { sub: 'bear@example.com', nickname: 'bear' },
    getAccessTokenSilently: vi.fn().mockReturnValue(ACCESS_TOKEN),
    loginWithRedirect: vi.fn(),
    logout: vi.fn(),
  } as any)
})

afterEach(() => {
  vi.clearAllMocks()
})

describe('<Bridges />', () => {
  it('should render the title', async () => {
    renderRoute('/')
    const title = screen.getByRole('heading', { level: 1 })
    expect(title).toHaveTextContent('Bridge Toll Calculator')
  })

  it('should render some bridges', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/bridges')
      .reply(200, mockBridges)

    renderRoute('/')

    const list = await screen.findAllByRole('list')
    const listItems = within(list[0])
      .getAllByRole('listitem')
      .map((li) => li.textContent)
    expect(listItems).toMatchInlineSnapshot(`
    [
      "Auckland Harbour Bridge",
      "Grafton Bridge",
    ]
  `)
    expect(scope.isDone()).toBe(true)
  })

  it('should test for a signed in user', async () => {
    const addScope = nock('http://localhost', {
      reqheaders: {
        authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })

    const { user, ...screen } = renderRoute('/')

    const loginButton = screen.getByRole('button')
    const signedInText = screen.getByText(/signed in as:/i)

    expect(loginButton).toHaveTextContent('Sign out')
    expect(signedInText).toHaveTextContent(/bear/i)
    expect(addScope.isDone()).toBe(true)
  })
})
