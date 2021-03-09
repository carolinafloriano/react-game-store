export const initialState = {
  basket:  [],
}

const reducer = (state, action) => {
  console.log(action);
  switch(action.type){
      case 'ADD_TO_BASKET':
        return {
          ...state,
          basket: [...state.basket, action.item]
        }
      case 'REMOVE_FROM_CART':
        let newcart = [...state.basket]
        const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
        if(index >= 0){
          newcart.splice(index, 1)
        }else{
          console.log('Ocorreram erros ao remover o produto do carrinho ')
        }
        return {...state, basket: newcart}
  }
}

export default reducer;
