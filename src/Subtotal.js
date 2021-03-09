import React from 'react'
import CurrencyFormat from 'react-currency-format'
import {useStateValue} from './StateProvider'
import './Subtotal.css'


function Subtotal(){

  const getCartTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

  const [{basket}, dispatch] = useStateValue();

  let frete = basket.length*10.00;;


  if(getCartTotal(basket) > 250){
    frete = 0;
  }

  return(

    <div className='subtotal'>
      {/* preço */}
        <CurrencyFormat
          renderText={(value) => (
              <div>
                <p>
                  Subtotal({basket.length} itens) : <strong>{`${value}`}</strong>
                </p>
              </div>
          )
          }
          decimalScale={2}
          value={getCartTotal(basket)}
          displayType={"text"}
          thousandSeparator={false}
          prefix={"R$"}
        />
        <CurrencyFormat
          renderText={(value) => (
              <div>
                <p>
                  Frete : <strong>{`${value}`}</strong>
                </p>

              </div>
          )
          }
          decimalScale={2}
          value={frete}
          displayType={"text"}
          thousandSeparator={false}
          prefix={"R$"}
        />
        <CurrencyFormat
          renderText={(value) => (
              <div>
                <p>
                  Total: <strong>{`${value}`}</strong>
                </p>

              </div>
          )
          }
          decimalScale={2}
          value={getCartTotal(basket)+frete}
          displayType={"text"}
          thousandSeparator={false}
          prefix={"R$"}
        />
      <button className='checkout_button'>Finalizar pedido</button>
    </div>
  )

}



export default Subtotal;
