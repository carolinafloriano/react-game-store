import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import './Header.css'
import cartIcon from './assets/cart-icon.svg'
import logoGameStore from './assets/logo-gamestore.png'
import {Link} from 'react-router-dom'
import {useStateValue} from './StateProvider'

function Header() {

  const [{basket}, dispatch] = useStateValue();

  console.log('my basket: ', basket)

  return(
    <nav className="header">
      <img className="header__logo" alt="logo" src={logoGameStore}/>
      <div className="header__search">
        <input type="text" className="header__searchInput"/>
        <SearchIcon className="header__searchIcon" />
      </div>
      <Link to='/checkout' className='header__link'>
      <div className="header__cart">
        <img className="header__cartIcon" alt="cart-icon" src={cartIcon}/>
        {/*Número de itens no carrinho de compras*/}
        <span className='header__productCount'>{basket?.length}</span>
      </div>
      </Link>
    </nav>
  )
}

export default Header
