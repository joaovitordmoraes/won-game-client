import { ShoppingCart } from '@styled-icons/material-outlined/ShoppingCart'

import * as S from './styles'

export type CartIiconProps = {
  quantity?: number
}

const CartIcon = ({ quantity = 0 }: CartIiconProps) => (
  <S.Wrapper>
    {quantity > 0 && <S.Badge aria-label="Cart Items">{quantity}</S.Badge>}
    <ShoppingCart aria-label="Shopping Cart" />
  </S.Wrapper>
)

export default CartIcon
