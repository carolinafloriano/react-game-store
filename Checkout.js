import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import {useStateValue} from './StateProvider'
import ProductCart from './ProductCart'

function Checkout(){

  const [{basket}, dispatch] = useStateValue();

  return(
    <div className='checkout'>
      <div className='checkout__left'>

        {
          basket.length === 0 ? (
            <div>
              <h2 className='checkout__title'> Seu carrinho de compras está vazio.</h2>
              <p>Você não tem itens em seu carrinho. Compre um.</p>
            </div>
          ): (
            <div>
              <h2 className='shoppingbaskettitle'>Items no Carrinho de Compras</h2>
              {
                basket.map(item => (
                  <ProductCart
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    score={item.score}
                    image={item.image}
                  />
                ))
              }
            </div>
          )
        }

      </div>
      {
        basket.length > 0 && (
          <div className='checkout__right'>
            <Subtotal />
          </div>
        )
      }

    </div>
  )
}

export default Checkout;
