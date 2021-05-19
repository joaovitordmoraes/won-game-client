import { renderWithTheme } from 'utils/tests/helpers'

import FormSignIn from '.'

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    renderWithTheme(<FormSignIn />)

    //verifique email
    //verifique password
    //verifique button
  })

  it('should render the forgot password link', () => {
    renderWithTheme(<FormSignIn />)
  })

  it('should render the text and link to sign up', () => {
    renderWithTheme(<FormSignIn />)

    //verificar texto
    //verificar link
  })
})
