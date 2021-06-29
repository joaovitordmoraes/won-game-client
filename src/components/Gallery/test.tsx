import 'match-media-mock'
import { renderWithTheme } from 'utils/tests/helpers'

import Gallery from '.'

import mockItems from './mock'

describe('<Gallery />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />)
  })
})
