import React from 'react'
import './ProductCart.css'
import {useStateValue} from './StateProvider'

function ProductCart({id, name, price, score, image}){

  const [{basket}, dispatch] = useStateValue();

  const removeItem = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id
    })
  }

  return(
      <div className='productcart'>
        <img className='productcart__image' src={image} alt='' />
        <div className='productcart__info'>
          <p className='productcart__name'>{name}</p>
          <p className='productcart__price'>
            <small>R$</small>
            {price}
          </p>
          <p className='productcart__score'>
            <small>Score:</small>
            {score}
          </p>

          <button onClick={removeItem}> Excluir do carrinho </button>
        </div>
      </div>
  )
}

export default ProductCart;
