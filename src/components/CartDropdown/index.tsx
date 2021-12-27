import CartIcon from 'components/CartIcon'
import CartList from 'components/CartList'
import DropDown from 'components/DropDown'
import { GameItemProps } from 'components/GameItem'

import * as S from './styles'

export type CartDropdownProps = {
  items: GameItemProps[]
  total: string
}

const CartDropdown = ({ items, total }: CartDropdownProps) => (
  <S.Wrapper>
    <DropDown title={<CartIcon quantity={items.length} />}>
      <CartList items={items} total={total} hasButton />
    </DropDown>
  </S.Wrapper>
)

export default CartDropdown
