import React from 'react'
import {productsData} from './Data'
import './Product.css'
import {useStateValue} from './StateProvider'
import Select from 'react-select'
import ReactDOM from 'react-dom'

const productsOrder = productsData;

let order = -1;

function byName() {
  let order = 0;
  ReactDOM.render(Product, document.getElementById('root'));
}

function byPrice() {
  let order = 1;
}

function byScore() {
  let order = 2;
}

export const Products = () => {
  if(order == 0){
    const productsOrder = productsData.sort(function (a, b) {
      return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
    });
  } else if (order == 1) {
    const productsOrder = productsData.sort(function (a, b) {
      return (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0);
    });
  }  else if (order == 1) {
    const productsOrder = productsData.sort(function (a, b) {
      return (a.score > b.score) ? 1 : ((b.score > a.score) ? -1 : 0);
    });
  } else {
     const productsOrder = productsData;
  }

  return (
    <>
    <div className='container'>
    <div className='classification'>
      <button onClick={byName}> Alfabética </button>
      <button> Menor Preço </button>
      <button> Score </button>
    </div>
    <div className='product__container'>
      {productsOrder.map((data, key) => {
        return(
          <div key={key}>
            <Product
              key={data.id}
              id={data.id}
              name={data.name}
              price={data.price}
              score={data.score}
              image={'https://raw.githubusercontent.com/carolinafloriano/react-game-store/gh-pages/'+data.image}
              />
          </div>
        );
      })}
      </div>
      </div>
         </>
       );
    };



const Product = ({id, name, price, score, image}) => {

  const [{basket}, dispatch] = useStateValue()

  console.log('basket content', basket)

  const addToBasket = () => {
    dispatch({
    type: 'ADD_TO_BASKET',
      item: {
        id: id,
        name: name,
        price: price,
        score: score,
        image: image
      }
    })
  }

  return(
    <div className='product__container'>
      <div className='product'>
        <div className='product__info'>
          <p>{name}</p>
          <p className='product__price'>
            <small>R$</small>
            <strong>{price}</strong>
          </p>
          <p className='product__score'>
            <small>Score:</small>
            <strong>{score}</strong>
          </p>
        </div>
        <img src={image} alt='' />
        <button onClick={addToBasket}> Adicionar ao carrinho</button>
      </div>
    </div>
  )
}

export default Products;
