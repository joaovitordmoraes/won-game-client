import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCard from '.'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: /population zero/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /rockstar games/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', {
        name: /population zero/i
      })
    ).toBeInTheDocument()

    expect(screen.getByText(/r\$ 235,00/i)).toBeInTheDocument()
  })
})