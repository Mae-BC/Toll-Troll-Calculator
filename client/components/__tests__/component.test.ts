import { describe, it, expect } from "vitest"

import App from '../components/App'
import { render } from "react-dom"


describe('<App />', () => {
  it('renders a heading', () => {
    // ARRANGE
    const { container } = render(<App />)

    // ACT
    // we don't have anything to do
    // ASSERT
    const heading = screen.queryByRole('heading')
    expect(heading).toHaveTextContent('Cats')
  })

  it.todo('renders how we expect', () => {
    // ARRANGE
    const { container } = render(<App />)

    // ACT
    // we don't have anything to do
    // ASSERT
    expect(container).toMatchSnapshot()
  })

  it.todo('renders an image of a bulldog', () => {
    render(<App />)
    const image = screen.getByAltText('a Bulldog')
    expect(image).toBeVisible()
  })
})