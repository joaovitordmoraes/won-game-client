import { screen } from '@testing-library/dom'
import { renderWithTheme } from 'utils/tests/helpers'

import Auth from '.'

describe('<Auth />', () => {
  it('should render the logos, title, children', () => {
    renderWithTheme(
      <Auth title="Auth Title">
        <input type="text" />
      </Auth>
    )

    screen.logTestingPlaygroundURL()
    //verifica 2 logos
    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)

    //verifica titulo principal - banner
    expect(
      screen.getByRole('heading', {
        name: /all your favorite games in one place/i
      })
    ).toBeInTheDocument()

    //verifica subtitulo - banner
    expect(
      screen.getByRole('heading', {
        name: /won is the best and most complete gaming platform\./i
      })
    ).toBeInTheDocument()

    //verifica se tem footer
    expect(
      screen.getByText(/won games 2021 © todos os direitos reservados/i)
    ).toBeInTheDocument()

    //verifica se tem title do content
    expect(
      screen.getByRole('heading', {
        name: /auth title/i
      })
    ).toBeInTheDocument()

    //verifica se o children está sendo renderizado
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
